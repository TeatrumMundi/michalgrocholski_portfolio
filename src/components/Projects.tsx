import { projects } from "@/config/config";

/* eslint-disable @next/next/no-img-element */
function Projects() {
  return (
    <div className="min-h-screen px-6" id="projects">
      <p className="text-white/50 text-center text-xl mt-10 mb-3">
        Michał Grocholski
      </p>
      <h1 className="text-5xl text-center mb-10">
        <span className="text-6xl font-my animated-gradient">My </span>
        <span className="bg-gradient-to-r from-teal-500 via-rose-400 to-yellow-300 text-transparent bg-clip-text">
          Crafted Selection
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 transform-gpu perspective-1000"
          >
            {/* Browser Window Header */}
            <div className="bg-liquid-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-liquid-100 rounded-standard mx-4 px-3 py-1">
                <span className="text-white/70 text-sm">{project.liveUrl}</span>
              </div>
            </div>

            {/* Website Preview */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                <div className="flex gap-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-200 hover:bg-accent-100 transition-all duration-500 px-6 py-3 rounded-standard text-center font-semibold border border-accent-100 flex items-center justify-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-liquid-100 hover:bg-liquid-200 transition-all duration-500 px-6 py-3 rounded-standard text-center font-semibold border border-border flex items-center justify-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                <span className="bg-liquid-100 p-1 px-4 rounded-standard">{project.title}</span>
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-teal-500/20 to-rose-400/20 text-teal-300 px-3 py-1 rounded-full text-sm border border-teal-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
