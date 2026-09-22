import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex grow flex-col place-content-center place-items-center gap-4.5 px-5 pt-8 pb-6 lg:gap-6.25 lg:p-0">
        <div className="relative">
          <img
            src={heroImg}
            className="relative z-0 mx-auto w-42.5"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute inset-x-0 top-8.5 z-1 mx-auto h-7 transform-[perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 top-26.75 z-0 mx-auto h-6.5 w-auto transform-[perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="my-5 text-4xl font-medium tracking-[-1.68px] text-text-h lg:my-8 lg:text-[56px]">
            Get started
          </h1>
          <p>
            Edit{' '}
            <code className="inline-flex rounded bg-code-bg px-2 py-1 font-mono text-[15px] leading-[135%] text-text-h">
              src/App.jsx
            </code>{' '}
            and save to test{' '}
            <code className="inline-flex rounded bg-code-bg px-2 py-1 font-mono text-[15px] leading-[135%] text-text-h">
              HMR
            </code>
          </p>
        </div>
        <button
          type="button"
          className="mb-6 inline-flex rounded-md border-2 border-transparent bg-accent/10 px-2.5 py-1.25 font-mono text-base text-accent transition-colors duration-300 hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="relative w-full before:absolute before:top-[-4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-border before:content-[''] after:absolute after:top-[-4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-border after:content-['']" />

      <section className="flex flex-col border-t border-border text-center lg:flex-row lg:text-left">
        <div className="flex-1 border-b border-border px-5 py-6 lg:border-r lg:border-b-0 lg:p-8">
          <svg
            className="mb-4 h-5.5 w-5.5"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="mb-2 text-xl leading-[118%] font-medium tracking-[-0.24px] text-text-h lg:text-2xl">
            Documentation
          </h2>
          <p>Your questions, answered</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2 lg:mt-8 lg:flex-nowrap lg:justify-start">
            <li className="basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="box-border flex w-full items-center justify-center gap-2 rounded-md bg-social-bg px-3 py-1.5 text-base text-text-h no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
              >
                <img className="h-4.5" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://react.dev/"
                target="_blank"
                className="box-border flex w-full items-center justify-center gap-2 rounded-md bg-social-bg px-3 py-1.5 text-base text-text-h no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
              >
                <img className="h-4.5 w-4.5" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-5 py-6 lg:p-8">
          <svg
            className="mb-4 h-5.5 w-5.5"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="mb-2 text-xl leading-[118%] font-medium tracking-[-0.24px] text-text-h lg:text-2xl">
            Connect with us
          </h2>
          <p>Join the Vite community</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2 lg:mt-8 lg:flex-nowrap lg:justify-start">
            <li className="basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="box-border flex w-full items-center justify-center gap-2 rounded-md bg-social-bg px-3 py-1.5 text-base text-text-h no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
              >
                <svg
                  className="h-4.5 w-4.5 dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="box-border flex w-full items-center justify-center gap-2 rounded-md bg-social-bg px-3 py-1.5 text-base text-text-h no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
              >
                <svg
                  className="h-4.5 w-4.5 dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="box-border flex w-full items-center justify-center gap-2 rounded-md bg-social-bg px-3 py-1.5 text-base text-text-h no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
              >
                <svg
                  className="h-4.5 w-4.5 dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="basis-[calc(50%-8px)] lg:flex-none lg:basis-auto">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="box-border flex w-full items-center justify-center gap-2 rounded-md bg-social-bg px-3 py-1.5 text-base text-text-h no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
              >
                <svg
                  className="h-4.5 w-4.5 dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative w-full before:absolute before:top-[-4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-border before:content-[''] after:absolute after:top-[-4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-border after:content-['']" />
      <section className="h-12 border-t border-border lg:h-22" />
    </>
  )
}

export default App
