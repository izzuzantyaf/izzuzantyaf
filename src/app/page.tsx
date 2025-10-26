import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiJest, SiAntdesign, SiNestjs } from "react-icons/si";
import { IconBaseProps } from "react-icons";
import Image from "next/image";

const SOCIAL_MEDIA = [
  {
    name: "Email",
    icon: (props: IconBaseProps) => <MdAlternateEmail {...props} />,
    href: "mailto:izzuzantyaf+work@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: (props: IconBaseProps) => <FaLinkedin {...props} />,
    href: "https://www.linkedin.com/in/izzuzantyaf/",
  },
  {
    name: "GitHub",
    icon: (props: IconBaseProps) => <FaGithub {...props} />,
    href: "https://github.com/izzuzantyaf",
  }
]

const TECH_TOOLS = [
  { name: "Cursor", icon: () => <Image src="https://cursor.com/assets/images/logo.svg" alt="Cursor" width={40} height={40} />, color: "#000000" },
  { name: "TypeScript", icon: (props: IconBaseProps) => <SiTypescript {...props} />, color: "#3178c6" },
  { name: "React", icon: (props: IconBaseProps) => <FaReact {...props} />, color: "#61dafb" },
  { name: "Next.js", icon: (props: IconBaseProps) => <SiNextdotjs {...props} />, color: "#000000" },
  { name: "Tailwind CSS", icon: (props: IconBaseProps) => <SiTailwindcss {...props} />, color: "#06b6d4" },
  { name: "Node.js", icon: (props: IconBaseProps) => <FaNodeJs {...props} />, color: "#339933" },
  { name: "PostgreSQL", icon: (props: IconBaseProps) => <SiPostgresql {...props} />, color: "#336791" },
  { name: "NestJS", icon: (props: IconBaseProps) => <SiNestjs {...props} />, color: "#e0234e" },
  { name: "Docker", icon: (props: IconBaseProps) => <FaDocker {...props} />, color: "#2496ed" },
  { name: "Jest", icon: (props: IconBaseProps) => <SiJest {...props} />, color: "#c21325" },
  { name: "Ant Design", icon: (props: IconBaseProps) => <SiAntdesign {...props} />, color: "#000000" },
  { name: "Git", icon: (props: IconBaseProps) => <FaGitAlt {...props} />, color: "#f05032" },
]

export default function Home() {
  return (
    <>
      <section className="hero h-dvh relative flex flex-col px-6 justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight z-1 mb-4">
          Hi there. <span className="font-extrabold">I&apos;m Izzu 👋</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl z-1 text-gray-600 mb-8">
          Software Engineer
        </h2>

        <p className="text-lg sm:text-2xl text-gray-600 max-w-[60ch] mb-12">
          I bring digital solutions from the complexity of technology into intuitive experiences on your screens.
        </p>

        <p className="text-lg sm:text-xl text-gray-600 mb-4">Let&apos;s get connected</p>
        <div className="flex gap-4">
          {SOCIAL_MEDIA.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-gray-200 transition-all duration-300 hover:scale-110">
              <item.icon className="text-2xl sm:text-3xl" />
            </a>
          ))}
        </div>
      </section>

      <section className="tools-running-logo py-16 overflow-hidden flex justify-center">
        <div className="running-text-container">
          <div className="running-text">
            {/* First set */}
            {TECH_TOOLS.map((tool, index) => (
              <div key={`first-${tool.name}-${index}`} className="tool-item">
                <tool.icon className="tool-icon" />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {TECH_TOOLS.map((tool, index) => (
              <div key={`second-${tool.name}-${index}`} className="tool-item">
                <tool.icon className="tool-icon" />
              </div>
            ))}
            {/* Third set for smoother animation */}
            {TECH_TOOLS.map((tool, index) => (
              <div key={`third-${tool.name}-${index}`} className="tool-item">
                <tool.icon className="tool-icon" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
