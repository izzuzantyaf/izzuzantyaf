import { projects } from "../../lib/constants";

export default function Projects() {
  return (
    <div className="my-projects dark:bg-gray-900 p-[16px] px-[20px]">
      <div className="container mx-auto">
        <h2 className="title text-3xl md:text-4xl font-bold dark:text-gray-300">
          Projects
        </h2>
        <div className="projects-list mt-[16px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item p-[16px] rounded-[16px] shadow-md border-t border-gray-100 border-solid"
            >
              <h3 className="project-title font-bold text-xl">
                {project.name}
              </h3>
              <p className="project-desc mt-[8px]">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-[16px]"
              >
                <button className="rounded-[8px] bg-gray-100 py-[8px] px-[24px] font-medium">
                  Visit
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
