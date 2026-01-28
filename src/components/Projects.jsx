import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      url: "https://github.com/ClayMicholaz/rental_mobil",
      title: "Car Rental Website",
      description:
        "A full-stack car rental platform built with PHP and MySQL. Developed collaboratively as a college final project demonstrating database design, user authentication, and booking system functionality.",
    },
    {
      url: "https://github.com/ClayMicholaz/Advanced-HariSenin",
      title: "Video Learning Platform",
      description:
        "An educational video platform developed during full-stack bootcamp. Features content management, user roles, video streaming, and responsive design built with modern web technologies.",
    },
    {
      title: "third project",
      description: "coming soon",
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center snap-start bg-white px-6"
    >
      <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {projects.map((project, i) => {
          const content = (
            <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          );
          return project.url ? (
            <a
              key={i}
              href={project.url}
              title={`${project.title} - GitHub Repository`}
            >
              {content}
            </a>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>
      <a
        href="https://github.com/ClayMicholaz"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 px-5 py-2 border border-gray-900 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition"
      >
        <FaGithub className="text-2xl" />
        View My GitHub
      </a>
    </section>
  );
}
