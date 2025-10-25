import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="hero h-dvh relative flex flex-col px-6 justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight z-[1] mb-4">
          Hi there. <span className="font-extrabold">I&apos;m Izzu 👋</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl z-[1] text-gray-600 mb-8">
          Software Engineer
        </h2>

        <p className="text-lg sm:text-2xl text-gray-600 max-w-[60ch] mb-12">
          I bring digital solutions from the complexity of technology into intuitive experiences on your screens.
        </p>

        <p className="text-lg sm:text-xl text-gray-600 mb-4">Let's get connected</p>
        <div className="flex gap-4">
          <a href="mailto:izzuzantyaf+work@gmail.com" className="p-2 rounded-xl bg-gray-200 transition-all duration-300 hover:scale-110">
            <MdAlternateEmail className="text-2xl sm:text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/izzuzantyaf/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-gray-200 transition-all duration-300 hover:scale-110">
            <FaLinkedin className="text-2xl sm:text-3xl" />
          </a>
          <a href="https://github.com/izzuzantyaf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-gray-200 transition-all duration-300 hover:scale-110">
            <FaGithub className="text-2xl sm:text-3xl" />
          </a>
        </div>
      </section>
    </>
  );
}
