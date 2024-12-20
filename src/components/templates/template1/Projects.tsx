import Project from "@/types/Project";

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Blogs website",
      description:
        "Blog site using react js and appwrite, focusing on functionality",
      link: "https://blogger-web.vercel.app",
    },
    {
      id: 2,
      name: "Book Store",
      description:
        "Online book store website using react, typescript and tailwind",
      link: "https://bookstore-mb-nu.vercel.app/",
    },
    {
      id: 3,
      name: "DSA Blogs",
      description: "Blogs site for DSA Beginners using next js and sanity",
      link: "https://dsahub.vercel.app/",
    },
    {
      id: 4,
      name: "Portfolio Site",
      description: "My personal portfolio using next js",
      link: "https://muzzamil-bukhari.vercel.app/",
    },
  ];

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-3 text-sky-600">ACADEMIC PROJECTS</h2>
      <ul className="list-disc space-y-3 pl-5">
        {projects.map((project) => (
          <li key={project.id} className="text-sm">
            <div className="font-semibold">
              <span>{project.name}</span> |
              <span className="ml-2">{project.description}</span>
            </div>
            <div>
              <div>
                <span> Project link :- </span>
                <a
                  href={project.link}
                  className="text-sky-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
