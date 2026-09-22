# AGENTS.md

Hướng dẫn cho AI coding agent làm việc trên dự án **Docs Clone** (real-time collaborative document editor, kiểu Google Docs thu nhỏ).

## Tổng quan dự án

Ứng dụng web cho phép nhiều người cùng soạn thảo 1 document theo thời gian thực, có version history, permission, và presence (thấy ai đang xem/gõ). Mục tiêu học tập chính: real-time collaboration (CRDT), concurrency ở nhiều tầng (network, memory, database), và PostgreSQL nâng cao (JSONB, transaction, locking).

## Stack kỹ thuật

- **Runtime**: Node.js
- **Backend**: Express (hoặc Fastify) + TypeScript
- **Database**: PostgreSQL — dùng `JSONB` cho document content, `NUMERIC` cho mọi giá trị tiền tệ nếu có
- **DB access**: Knex.js hoặc Drizzle ORM — migration bắt buộc phải qua tool, không sửa schema tay
- **Real-time sync**: Yjs (CRDT) + y-websocket
- **Editor**: Tiptap (ProseMirror) + `@tiptap/extension-collaboration`
- **Frontend**: React (Vite hoặc Next.js)
- **Auth**: JWT

## Cấu trúc thư mục (dự kiến)

```
/server
  /src
    /routes        # API endpoints
    /db
      /migrations   # Knex/Drizzle migration files
      /seeds
    /websocket      # y-websocket server, presence handling
    /services       # business logic (document, permission, version)
  package.json
/client
  /src
    /components     # React components (Editor, Toolbar, PresenceList...)
    /hooks
    /api            # API client calls
  package.json
AGENTS.md
```

## Quy ước code

- TypeScript cho cả backend và frontend, tránh `any` trừ khi thật sự cần
- Mọi thay đổi schema database phải đi qua migration file (Knex/Drizzle), không được `ALTER TABLE` tay ngoài migration
- Giá trị tiền tệ (nếu có, vd billing sau này) luôn dùng kiểu `NUMERIC` trong PostgreSQL, không dùng `FLOAT`/`REAL`
- Document content lưu dạng `JSONB`, không lưu HTML thô
- Mọi API endpoint thay đổi dữ liệu (POST/PATCH/DELETE) phải validate quyền truy cập (`document_permissions`) trước khi thực thi

## Nguyên tắc concurrency (quan trọng — đọc kỹ trước khi sửa code liên quan)

Dự án có 2 tầng concurrency khác nhau, agent cần phân biệt rõ khi sửa code:

1. **Real-time editing (Yjs/CRDT)** — lock-free, optimistic. Không dùng transaction/lock kiểu SQL ở tầng này. Mọi update là 1 CRDT operation, tự động merge.
2. **Persist xuống PostgreSQL** — khi flush Yjs state xuống DB, hoặc khi ghi `document_versions`, phải dùng transaction + `SELECT ... FOR UPDATE` hoặc optimistic locking (version column) để tránh race condition giữa nhiều server instance.

Không được trộn 2 cách tiếp cận này — không dùng SQL lock cho real-time sync, và không dùng CRDT merge cho các bảng quan hệ thông thường (users, permissions...).

## Package manager

Dự án dùng **pnpm**, không dùng npm hoặc yarn. Luôn cài dependency bằng `pnpm add`/`pnpm add -D`, không tự ý tạo `package-lock.json` (chỉ giữ `pnpm-lock.yaml`). Nếu dự án dùng monorepo (backend + frontend cùng repo), cân nhắc `pnpm-workspace.yaml` để quản lý chung.

## Lệnh thường dùng

```bash
# Backend
cd server
pnpm dev                 # chạy dev server
pnpm migrate             # chạy migration
pnpm migrate:rollback    # rollback migration gần nhất
pnpm test                # chạy test

# Frontend
cd client
pnpm dev
pnpm build
```

## Testing

- Mọi thay đổi liên quan tới nghiệp vụ nhập/xuất document, permission, hoặc merge logic cần có test
- Test concurrency: viết script mô phỏng nhiều client cùng gửi update đồng thời (không test tay bằng cách mở nhiều tab), đặt trong `/server/src/__tests__/concurrency`
- Trước khi coi 1 tính năng real-time là "xong", phải test case: 2+ client gõ cùng vị trí cùng lúc, và 1 client mất mạng giữa chừng rồi reconnect

## Việc KHÔNG được làm

- Không tự ý đổi phương pháp real-time sync (vd chuyển từ Yjs sang Operational Transform tự viết) mà không hỏi trước — đây là quyết định kiến trúc lớn
- Không lưu password ở dạng plaintext, luôn hash (bcrypt/argon2)
- Không bỏ qua bước migration khi đổi schema, kể cả khi đang ở giai đoạn prototype

## Trạng thái hiện tại / Roadmap theo tuần

Dự án đang ở giai đoạn lên kế hoạch / mới bắt đầu.

1. **Tuần 1-2**: Setup & Rich Text Editor cơ bản (Tiptap, chưa lưu trữ)
2. **Tuần 3-4**: Backend + lưu document qua PostgreSQL (chưa real-time)
3. **Tuần 5-7**: Real-time collaboration với Yjs (mốc quan trọng nhất)
4. **Tuần 8**: Persist Yjs state xuống PostgreSQL
5. **Tuần 9**: Presence & cursor
6. **Tuần 10-11**: Version history
7. **Tuần 12**: Permissions & sharing
8. **Tuần 13**: Comment (tùy chọn)
9. **Tuần 14**: Export/Import (tùy chọn)
10. **Tuần 15-16**: Scale test với nhiều server instance + Redis Pub/Sub (tùy chọn)

Khi agent được giao task, hãy xác định đang ở bước nào trong roadmap trên và không nhảy cóc sang bước sau nếu bước hiện tại chưa hoàn thiện — đặc biệt không tích hợp Yjs (bước 3) trước khi editor + backend cơ bản (bước 1-2) đã chạy ổn định.
