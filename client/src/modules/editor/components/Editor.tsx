'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Toolbar } from './Toolbar'

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-neutral dark:prose-invert max-w-none min-h-[60svh] px-8 py-6 focus:outline-none',
      },
    },
  })

  if (!editor) return null

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Toolbar editor={editor} />
      <div className="rounded-b-lg border border-t-0 border-border bg-bg">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
