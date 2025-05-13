import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pyramids of Giza",
    description: "A beautiful photo of the pyramids.",
    image: "/projects/picture1.JPG",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubURl: "#",
  },
  {
    id: 2,
    title: "Driving through desert",
    description: "How are people moving through the desert.",
    image: "/projects/picture2.JPG",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubURl: "#",
  },
  {
    id: 3,
    title: "Egyptian village",
    description: "An insight into an Egyptian village.",
    image: "/projects/picture3.JPG",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubURl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Feateured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
          Here’s a selection of my recent work — projects where I combined clean
          design with solid functionality to solve real problems and deliver
          smooth user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hober"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-forground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubURl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto"
            target="_blank"
            href="https://github.com/rmandici"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
