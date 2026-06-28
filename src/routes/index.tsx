import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Share2 } from 'lucide-react'

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

const PROFESSIONAL_EXPERIENCES = [
  {
    company: 'Synapsis',
    type: 'Full-time',
    duration: '2 yrs 4 mos',
    location: 'Yogyakarta, Indonesia',
    linkedin: 'https://www.linkedin.com/company/synapsis-id/',
    roles: [
      {
        title: 'Mid. Frontend Engineer',
        period: 'Apr 2025 – Present · 1 yr 3 mos',
        highlights: [
          'Achieved an award as Best Employee of the year 2025.',
          'Fluently adopted AI tools such as Cursor/Antigravity/Claude agents, rules, and MCPs into my workflow that gives results on better edge cases handling, maintainable code, and 30%–50% faster output deliveries.',
          'Became person-in-charge in Frontend and Marketing team collaboration.',
          "Improved and maintained the company's website (https://synapsis.id). Improved its LCP (Largest Contentful Paint) to under 2.5s, CLS (Cumulative Layout Shift) to under 0.1.",
          'Created various Strapi plugins such as preview page before publish, advanced text editor, and data exporting into CSV or Excel to support the marketing team.',
          'Implemented feature-oriented architecture on Synapsis website codebase that gives results on consistent and predictable pattern on the entire codebase.',
          'Successfully migrated SWR to Tanstack Query on the entire TOS codebase without any major issue occurred.',
          'Contributed to internal tools development. Initially gave recommendation about PDF generation method which utilise plain HTML, CSS combined with Gotenberg that gives results to be a standard in the Frontend team.',
        ],
      },
      {
        title: 'Frontend Engineer',
        period: 'Mar 2024 – Mar 2025 · 1 yr 1 mo',
        highlights: [
          'On a daily basis I collaborated closely with System Analyst, Backend Engineer, UI/UX Designer, and Project Manager in agile software development life cycle.',
          'Developed Tyre Operating System (TOS) and Enterprise Asset Registry (EAR) web application user interfaces that 100% complied to its specification requirement and Figma design.',
          'Crafted complex UI components and interactions in TOS web app that consist of complex form structure, local state management combined with drag n drop interactions.',
          'Successfully implemented a more efficient PDF generation method which significantly reduces render time by ~80% in TOS and EAR web app.',
          'Implemented feature-oriented codebase architecture on both TOS and EAR that gives results on consistent and predictable pattern on the entire codebase.',
          'Crafted reusable UI components on both TOS and EAR codebase that gives results on better maintenance and debugging.',
        ],
      },
    ],
  },
  {
    company: 'Widya Wicara',
    type: 'Full-time',
    duration: '1 yr 1 mo',
    location: 'Yogyakarta, Indonesia',
    linkedin: 'https://www.linkedin.com/company/widya-wicara/',
    roles: [
      {
        title: 'Fullstack Engineer',
        period: 'Jan 2023 – Jan 2024 · 1 yr 1 mo',
        highlights: [
          'Developed Widya Wicara MediaMaker, a Canva-like design maker web app that specialized to generate videos with AI-generated news anchor (https://mediamaker.widyawicara.com).',
          'Developed Widya Wicara Notulensi, a web app to automate meeting note taking using AI (https://notulensi.widyawicara.com).',
          'On a daily basis I worked closely with the VP of Tech and other software engineers.',
          'I had responsibility to develop, maintain, and ensure the platform works fine.',
          'Developed the backend using NestJS, integrated with the existing and external services, applied Clean Architecture resulting a modular, performant, and well functioned backend app.',
          'Developed the frontend using Next.js, structured the repository folders by applying Clean Architecture combined with Atomic Design resulting a modular, performant, and well functioned frontend app.',
          'Arranged and mentored interns to work together building the products so that resulted in more outcomes in the development process.',
        ],
      },
    ],
  },
]

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s)]+)/g
  const parts = text.split(urlRegex)

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          // biome-ignore lint/suspicious/noArrayIndexKey: string part is unique enough
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          {part}
        </a>
      )
    }
    return part
  })
}

function ProfessionalExperiences() {
  return (
    <section className="p-6 max-w-7xl mx-auto mt-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Professional Experiences
      </h2>
      <div className="flex flex-col gap-12">
        {PROFESSIONAL_EXPERIENCES.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-6">
            {/* Company header */}
            <div>
              <a
                href={exp.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-xl font-bold hover:text-primary hover:underline transition-colors inline-flex items-center gap-1"
              >
                {exp.company}
                <ArrowUpRight
                  size={16}
                  className="text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
              <p className="text-sm text-gray-500 mt-0.5">
                {exp.type} · {exp.duration}
              </p>
              <p className="text-sm text-gray-500">{exp.location}</p>
            </div>

            {/* Roles */}
            <div className="flex flex-col gap-8 border-l-2 border-gray-200 dark:border-gray-700 pl-6">
              {exp.roles.map((role) => (
                <div key={role.title}>
                  <p className="font-semibold text-lg">{role.title}</p>
                  <p className="text-sm text-gray-500 mb-4">{role.period}</p>
                  <ul className="flex flex-col gap-2 list-none p-0 m-0">
                    {role.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="mt-1 shrink-0 text-gray-400">–</span>
                        <span>{renderTextWithLinks(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

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

        <ProfessionalExperiences />
      </main>
    </>
  )
}
