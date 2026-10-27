import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Monitor, Moon, Share2, Sun } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { LiquidGlassFilter } from '../features/common/components/liquid-glass'
import {
  ScreenshotGallery,
  type ScreenshotSet,
} from '../features/common/components/screenshot-gallery'
import { useTheme } from '../features/common/theme'

const HERO_SHOTS = [
  {
    src: '/images/experience/website/synapsis-home-hero-iot.webp',
    alt: 'Synapsis website home hero promoting integrated IoT and AI',
    label: 'Synapsis Website',
    caption:
      'Marketing site on a feature-oriented architecture with Strapi-driven campaigns.',
  },
  {
    src: '/images/experience/tos/tos-dashboard.webp',
    alt: 'Tyre Operating System dashboard with tyre consumption and scrap performance charts',
    label: 'Tyre Operating System',
    caption:
      'Tyre management for mining fleets - condition monitoring, data entry and reporting.',
  },
  {
    src: '/images/experience/ear/ear-asset-movement-history.webp',
    alt: 'Enterprise Asset Registry asset detail with asset movement history timeline',
    label: 'Enterprise Asset Registry',
    caption:
      'Asset lifecycle tracking for the same fleet - detail view with the movement history timeline.',
  },
]

const PROOF_POINTS = [
  { figure: '4', label: 'years shipping software' },
  { figure: '3', label: 'platforms shipped end to end' },
  { figure: '2.5s', label: 'LCP on website pages' },
  { figure: '450', label: 'test cases bootstrapped' },
]

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
    href: 'mailto:me@izzuzantyaf.com?subject=Hi%2C%20Let%27s%20Collaborate.&body=Hi%20Izzu%2C%20let%27s%20collaborate%20about...',
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

interface ExperienceRole {
  title: string
  period: string
  stack: string[]
  summary: string
  galleries?: ScreenshotSet[]
}

interface Experience {
  company: string
  type: string
  duration: string
  location: string
  linkedin: string
  roles: ExperienceRole[]
}

const PROFESSIONAL_EXPERIENCES: Experience[] = [
  {
    company: 'GovTech Procurement by Telkom Indonesia',
    type: 'Full-time',
    duration: '2 mos',
    location: 'Jakarta, Indonesia',
    linkedin: 'https://www.linkedin.com/company/govtech-procurement/',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Sep 2026 – Present',
        stack: [
          'Next.js',
          'Turborepo',
          'GraphQL',
          'Codegen',
          'Vitest',
          'Playwright',
        ],
        summary:
          'Works on INAPROC (https://katalog.inaproc.id), LKPP\'s national e-procurement platform, inside a Turborepo monorepo of 13 Next.js apps and 11 shared packages on a federated GraphQL layer with schema-driven codegen, and shipped PPK punishment validation at checkout, mandatory curation revision with its change history, and the "Pencarian Pintar" AI search, where queries are matched by embedding similarity and results are ranked against the buyer\'s own region. Bootstrapped unit testing for the buyer checkout scope with Vitest and Testing Library (~450 cases across 80 files) plus a Playwright happy-flow recorder, and keeps codegen, typecheck and lint clean one PR per ticket.',
      },
    ],
  },
  {
    company: 'Synapsis',
    type: 'Full-time',
    duration: '2 yrs 6 mos',
    location: 'Yogyakarta, Indonesia',
    linkedin: 'https://www.linkedin.com/company/synapsis-id/',
    roles: [
      {
        title: 'Mid. Frontend Engineer',
        period: 'Aug 2025 – Aug 2026',
        stack: [
          'Next.js',
          'TanStack Query',
          'Strapi',
          'i18n',
          'Core Web Vitals',
        ],
        summary:
          'Named Best Employee of the year 2025 and became person-in-charge of the Frontend and Marketing collaboration, turning repeated ad-hoc content requests into a self-service workflow. Improved and maintained https://synapsis.id to LCP under 2.5s and CLS under 0.1, added multi-language routing, and built the Strapi plugins the marketing team relies on: live preview before publish, a Tiptap rich text editor, and CSV/Excel export. Migrated the entire TOS codebase from SWR to TanStack Query and moved the website to a feature-oriented architecture, working with AI agents, repository rules and MCPs for 30% to 50% faster deliveries without trading away code quality.',
        galleries: [
          {
            title: 'Synapsis Website',
            description:
              'Company website (https://synapsis.id) with Strapi-driven campaigns, insight reports and lead capture forms.',
            screenshots: [
              {
                src: '/images/experience/website/synapsis-home-hero-iot.webp',
                caption:
                  'Home hero for the integrated IoT and AI platform, with language switcher',
              },
              {
                src: '/images/experience/website/synapsis-report-chapter.webp',
                caption:
                  'Gated report page with the e-book download call to action',
              },
              {
                src: '/images/experience/website/synapsis-use-cases.webp',
                caption: 'Use case section grouping the platform by role',
              },
              {
                src: '/images/experience/website/synapsis-integration.webp',
                caption: 'Integration section with API and AI module cards',
              },
              {
                src: '/images/experience/website/synapsis-nearon-features.webp',
                caption: 'IoT dashboard feature carousel',
              },
              {
                src: '/images/experience/website/synapsis-iot-solutions.webp',
                caption: 'Industry tabs for IoT solutions and AI PPE detection',
              },
              {
                src: '/images/experience/website/synapsis-insight-reports.webp',
                caption: 'Insight report listing',
              },
              {
                src: '/images/experience/website/synapsis-video-insight.webp',
                caption: 'Video insight and media coverage cards',
              },
              {
                src: '/images/experience/website/synapsis-mining-page.webp',
                caption: 'Campaign landing page for mining',
              },
              {
                src: '/images/experience/website/synapsis-report-landing.webp',
                caption: 'Gated report landing page with download',
              },
              {
                src: '/images/experience/website/synapsis-report-testimonials.webp',
                caption: 'Operations leader testimonials as social proof',
              },
              {
                src: '/images/experience/website/synapsis-report-form.webp',
                caption: 'Lead capture form for the report download',
              },
              {
                src: '/images/experience/website/synapsis-smart-iot-dashboard.webp',
                caption: 'Video modal for the smart IoT dashboard',
              },
              {
                src: '/images/experience/website/synapsis-predictive-intelligence.webp',
                caption:
                  'Predictive intelligence section with the live dashboard',
              },
            ],
          },
        ],
      },
      {
        title: 'Frontend Engineer',
        period: 'Mar 2024 – Aug 2025',
        stack: ['Next.js', 'TypeScript', 'ECharts', 'RBAC', 'Figma'],
        summary:
          'Built the Tyre Operating System (TOS) and Enterprise Asset Registry (EAR) web apps to 100% of their specification requirement and Figma design, working daily in Scrum with system analysts, backend engineers, designers and PMs. Delivered the TOS modules end to end, from tyre change, pressure check, tread depth and daily activity to master data and the ECharts reporting suite, along with permission-aware menus, actions and cost fields. Cut PDF render time by 80%, built the reusable Select, SectionTitle, TableActionButton and status-switch modal components, and introduced the feature-oriented architecture both apps still follow.',
        galleries: [
          {
            title: 'Tyre Operating System (TOS)',
            description:
              'Tyre management for mining fleets: condition monitoring, data entry, and reporting.',
            screenshots: [
              {
                src: '/images/experience/tos/tos-dashboard.webp',
                caption:
                  'Dashboard with tyre consumption and scrap performance charts',
              },
              {
                src: '/images/experience/tos/tos-daily-activity.webp',
                caption: 'Daily activity board of pending and scheduled jobs',
              },
              {
                src: '/images/experience/tos/tos-unit-model-setup.webp',
                caption:
                  'Unit model setup, mapping axle positions and load percentages',
              },
              {
                src: '/images/experience/tos/tos-tyre-change.webp',
                caption:
                  'Tyre change form with a drag and drop axle position diagram',
              },
              {
                src: '/images/experience/tos/tos-tyre-change-configuration.webp',
                caption: 'Tyre change configuration table with serial numbers',
              },
              {
                src: '/images/experience/tos/tos-pressure-check.webp',
                caption:
                  'Pressure check form flagging under and over pressure tyres',
              },
              {
                src: '/images/experience/tos/tos-pressure-recommendation.webp',
                caption:
                  'Pressure recommendation matrix per load and inflation range',
              },
              {
                src: '/images/experience/tos/tos-tread-depth-check.webp',
                caption:
                  'Tread depth check list with readings per tyre position',
              },
              {
                src: '/images/experience/tos/tos-tyre-damage-report.webp',
                caption:
                  'Tyre damage report with drag and drop photo evidence uploads',
              },
              {
                src: '/images/experience/tos/tos-tyre-card.webp',
                caption:
                  'Tyre card report preview with unit and position filters',
              },
              {
                src: '/images/experience/tos/tos-tyre-performance-report.webp',
                caption: 'Generated tyre performance report preview',
              },
              {
                src: '/images/experience/tos/tos-inventory-report.webp',
                caption: 'Tyre inventory report ready to export',
              },
              {
                src: '/images/experience/tos/tos-budget-forecasting.webp',
                caption: 'Versioned budget forecasting list',
              },
            ],
          },
          {
            title: 'Enterprise Asset Registry (EAR)',
            description:
              'Asset registry for incoming, in use, transferred, and disposed company assets.',
            screenshots: [
              {
                src: '/images/experience/ear/ear-asset-movement-history.webp',
                caption: 'Asset movement history timeline',
              },
              {
                src: '/images/experience/ear/ear-incoming-asset.webp',
                caption:
                  'Incoming asset form with supporting document and handover fields',
              },
              {
                src: '/images/experience/ear/ear-asset-list.webp',
                caption:
                  'Minor and major asset list with search and pagination',
              },
              {
                src: '/images/experience/ear/ear-table-settings.webp',
                caption: 'Table settings for choosing which columns to show',
              },
              {
                src: '/images/experience/ear/ear-asset-detail.webp',
                caption:
                  'Registered asset detail with general information and QR preview',
              },
              {
                src: '/images/experience/ear/ear-asset-card.webp',
                caption: 'Asset card PDF with QR code',
              },
            ],
          },
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
        period: 'Jan 2023 – Jan 2024',
        stack: ['NestJS', 'Next.js', 'Clean Architecture', 'Atomic Design'],
        summary:
          'Built Widya Wicara MediaMaker, a Canva-like web app that generates videos with an AI-generated news anchor (https://mediamaker.widyawicara.com), and Widya Wicara Notulensi, which automates meeting note taking (https://notulensi.id). Developed the NestJS backend and Next.js frontend with Clean Architecture and Atomic Design, integrated existing and external services, and mentored interns while working directly with the VP of Tech.',
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
          className="text-primary dark:text-blue-500 hover:underline font-medium"
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
      <h2
        id="experience"
        className="scroll-m-20 text-3xl sm:text-4xl font-semibold mb-10 scroll-mt-24"
      >
        Professional Experiences
      </h2>
      <div className="flex flex-col gap-12">
        {PROFESSIONAL_EXPERIENCES.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-8">
            <div className="grid md:grid-cols-[10rem_1fr] gap-x-8 gap-y-1">
              <p className="text-sm text-muted-foreground tabular-nums">
                {exp.duration}
              </p>
              <div>
                <a
                  href={exp.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-xl font-semibold hover:text-primary hover:underline transition-colors inline-flex items-center gap-1"
                >
                  {exp.company}
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </a>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {exp.type} · {exp.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              {exp.roles.map((role) => (
                <div
                  key={role.title}
                  className="grid md:grid-cols-[10rem_1fr] gap-x-8 gap-y-2"
                >
                  <p className="text-sm text-muted-foreground tabular-nums">
                    {role.period}
                  </p>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{role.title}</h3>
                    <ul className="flex flex-wrap gap-1.5 mt-2 list-none p-0 m-0">
                      {role.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-gray-200 dark:border-gray-800 px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-foreground leading-relaxed mt-4">
                      {renderTextWithLinks(role.summary)}
                    </p>
                    {role.galleries?.length ? (
                      <ScreenshotGallery galleries={role.galleries} />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-900/50 mt-20 sm:mt-32 pb-16 pt-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="font-extrabold text-sm bg-muted rounded-sm select-none size-8 flex items-center justify-center">
            IF
          </div>
          <span className="text-sm text-muted-foreground">
            Made by{' '}
            <span className="font-semibold text-foreground">
              Izzu Z. Fawwas
            </span>
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  function cycleTheme() {
    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  const tooltipText =
    theme === 'system'
      ? 'Theme: System'
      : theme === 'light'
        ? 'Theme: Light'
        : 'Theme: Dark'

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="border border-white/40 dark:border-white/10 rounded-lg size-12 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-accent-foreground dark:hover:bg-white/5 transition-colors"
      aria-label={tooltipText}
      title={tooltipText}
    >
      {theme === 'light' ? (
        <Sun size={18} />
      ) : theme === 'dark' ? (
        <Moon size={18} />
      ) : (
        <Monitor size={18} />
      )}
    </button>
  )
}

function HeroShotStack() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % HERO_SHOTS.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const activeShot = HERO_SHOTS[activeIndex]

  return (
    <figure className="m-0 lg:pl-4">
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border bg-muted/30 shadow-2xl lg:rotate-1">
        {HERO_SHOTS.map((shot, index) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={index === activeIndex ? shot.alt : ''}
            width={1600}
            height={960}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <figcaption className="flex items-start justify-between gap-4 mt-3 lg:pl-1">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            {activeShot.label}
          </span>{' '}
          - {activeShot.caption}
        </p>
        <div className="flex gap-1.5 shrink-0 pt-1.5">
          {HERO_SHOTS.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${shot.label}`}
              aria-current={index === activeIndex}
              className={`size-2 rounded-full cursor-pointer transition-colors ${
                index === activeIndex ? 'bg-foreground' : 'bg-foreground/25'
              }`}
            />
          ))}
        </div>
      </figcaption>
    </figure>
  )
}

function HomePage() {
  const glassRef = useRef<HTMLElement>(null)

  return (
    <>
      <div className="p-4 md:px-6 md:pt-6 pb-0 sticky top-0 z-10">
        <header
          ref={glassRef}
          className="liquid-glass flex items-center gap-3 justify-between max-w-5xl mx-auto rounded-xl p-2 bg-white/40 dark:bg-white/8 shadow-[0_4px_24px_0_rgba(0,0,0,0.08)]"
        >
          <a
            href="/"
            className="font-extrabold text-2xl bg-muted/30 rounded-lg select-none size-12 flex items-center justify-center"
          >
            IF
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() =>
                navigator.share({
                  title: document.title,
                  url: window.location.origin,
                })
              }
              className="border border-white/40 dark:border-white/10 rounded-lg size-12 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-accent-foreground dark:hover:bg-white/5 transition-colors"
              aria-label="Share"
              title="Share"
            >
              <Share2 size={18} />
            </button>
          </div>
        </header>
        <LiquidGlassFilter targetRef={glassRef} />
      </div>

      <main>
        <section className="grid lg:grid-cols-[1.15fr_1fr] lg:items-center gap-12 p-6 mt-8 sm:mt-10 lg:mt-14 max-w-7xl mx-auto">
          <div>
            <p className="text-xs sm:text-sm font-medium tracking-[0.12em] sm:tracking-[0.2em] uppercase text-muted-foreground mb-5">
              Izzu Z. Fawwas · Software Engineer
            </p>

            <h1 className="scroll-m-20 text-5xl sm:text-6xl lg:text-7xl font-extralight leading-[1.05] tracking-tight mb-6">
              Measure twice,{' '}
              <span className="font-extrabold whitespace-nowrap">
                ship once.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-[52ch] leading-relaxed">
              I build and maintain the frontends behind mining fleets, national
              procurement and asset registries - typed, tested, and shipped
              without breaking the people who use them daily.
            </p>

            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {PROOF_POINTS.map((point) => (
                <div key={point.label}>
                  <dt className="text-3xl font-semibold tabular-nums">
                    {point.figure}
                  </dt>
                  <dd className="text-sm text-muted-foreground leading-snug mt-1">
                    {point.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-center gap-3 mt-10">
              <a
                href="mailto:me@izzuzantyaf.com?subject=Hi%2C%20Let%27s%20Collaborate.&body=Hi%20Izzu%2C%20let%27s%20collaborate%20about..."
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                Email me
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 px-6 py-3 rounded-full border font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                See the work
              </a>
            </div>

            <ul className="flex flex-wrap gap-3 mt-8 list-none p-0 m-0">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      border: '1.5px solid',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
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
          </div>

          <HeroShotStack />
        </section>

        <ProfessionalExperiences />
        <Footer />
      </main>
    </>
  )
}
