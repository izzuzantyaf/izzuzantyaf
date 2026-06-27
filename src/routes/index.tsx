import { createFileRoute } from '@tanstack/react-router'
import { Share2 } from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/izzuzantyaf',
    external: true,
    bgColor: '#dbeafe',
    textColor: '#1d4ed8',
    iconPath:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Email',
    href: 'mailto:me@izzuzantyaf.space?subject=Hi%2C%20Let%27s%20Collaborate.&body=Hi%20Izzu%2C%20let%27s%20collaborate%20about...',
    external: false,
    bgColor: '#fce7f3',
    textColor: '#be185d',
    iconPath:
      'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.805.596-1.468 1.364-1.58L12 10.548l10.636-6.671C23.404 3.989 24 4.652 24 5.457z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/izzuzantyaf',
    external: true,
    bgColor: '#f3f4f6',
    textColor: '#111827',
    iconPath:
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
]

function HomePage() {
  return (
    <>
      <div className="p-4 md:px-6 md:pt-6 pb-0 sticky top-0 z-10">
        <header className="flex items-center gap-3 justify-between max-w-7xl mx-auto rounded-xl p-2 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] ring-1 ring-inset ring-white/60 dark:ring-white/10">
          <a
            href="/"
            className="font-extrabold text-2xl bg-gray-300/30 rounded-lg backdrop-blur-md select-none w-12 h-12 flex items-center justify-center"
          >
            IF
          </a>
          <button
            type="button"
            onClick={() =>
              navigator.share({
                title: document.title,
                url: window.location.origin,
              })
            }
            className="border rounded-lg backdrop-blur-md w-12 h-12 flex items-center justify-center cursor-pointer"
            aria-label="Share"
            title="Share"
          >
            <Share2 size={18} />
          </button>
        </header>
      </div>

      <main>
        <section className="flex flex-col p-6 mt-9 sm:mt-20 lg:mt-28 justify-center max-w-7xl mx-auto md:text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight mb-4">
            Hi there.{' '}
            <span className="font-extrabold whitespace-nowrap">
              I&apos;m Izzu 👋
            </span>
          </h1>

          <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-600 mb-12">
            AI-Native Software Engineer
          </span>

          <span className="text-lg sm:text-2xl text-gray-600 max-w-[60ch] mx-auto">
            I bring digital solutions from the complexity of technology into
            intuitive experiences on your screens.
          </span>

          <ul className="flex flex-wrap gap-3 mt-12 list-none p-0 m-0 md:justify-center">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-medium"
                  style={{
                    border: '1.5px solid',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={link.iconPath} />
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
