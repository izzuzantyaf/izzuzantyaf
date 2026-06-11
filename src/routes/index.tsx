import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <section className="hero h-dvh relative flex flex-col px-6 justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight mb-4">
          Hi there. <span className="font-extrabold">I&apos;m Izzu 👋</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-600 mb-8">
          AI-Native Software Engineer
        </h2>

        <p className="text-lg sm:text-2xl text-gray-600 max-w-[60ch] mb-12">
          I bring digital solutions from the complexity of technology into
          intuitive experiences on your screens.
        </p>
      </section>
    </main>
  )
}
