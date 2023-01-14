import Head from "next/head";
import { projects } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const date = new Date();

  return (
    <>
      <Head>
        <title>Izzu Zantya Fawwas</title>
      </Head>

      <div className="homepage">
        {/* Navbar */}
        <div className="navbar py-[16px] px-[20px]">
          <div className="container flex items-center justify-between">
            {/* Brand */}
            <div className="brand font-black text-3xl">
              <Link href="/">IZZ.</Link>
            </div>
            {/* end of Brand */}
          </div>
        </div>
        {/* end of Navbar */}

        {/* Hero */}
        <div className="hero p-[20px]">
          <div className="container flex flex-col h-[67vh] max-h-[768px] justify-center gap-10">
            <div className="greeting">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold">
                Hi there.{" "}
                <span className="text-blue-700 whitespace-nowrap">
                  I&apos;m Izzu
                </span>
              </h1>
              <p className="mt-[16px] text-3xl md:text-4xl text-gray-400">
                Web Engineer
              </p>
            </div>
          </div>
        </div>
        {/* end of Hero */}

        {/* Projects */}
        <div className="my-projects p-[16px] px-[20px]">
          <div className="container max-w-screen mx-auto">
            <h2 className="title text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="projects-list mt-[24px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project-item bg-white p-[16px] rounded-[16px] shadow-lg"
                >
                  <Image
                    src={project.thumbnailSrc}
                    alt={project.description}
                    className="rounded-[8px] shadow"
                  />
                  <h3 className="project-title mt-[24px] font-bold text-2xl">
                    {project.name}
                  </h3>
                  <p className="project-desc mt-[8px]">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-[16px] rounded-[8px] border border-gray-400 border-solid py-[8px] px-[24px] font-medium"
                  >
                    Visit
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end of Projects */}

        {/* Footer */}
        <div className="footer p-[20px]">
          <div className="container mx-auto">
            <p className="text-center text-gray-400">
              izzuzantyaf - {date.getFullYear()}
            </p>
          </div>
        </div>
        {/* end of Footer */}
      </div>
    </>
  );
}
