const projects = [
    {
        title: "Project One",
        description: "A full-stack web application built with Next.js and TypeScript. Features include authentication, real-time updates, and a modern UI.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Project Two",
        description: "An e-commerce platform with payment integration, inventory management, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Project Three",
        description: "A mobile-first progressive web app for task management with offline capabilities.",
        technologies: ["Next.js", "PWA", "IndexedDB", "Service Workers"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    My Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900"
                        >
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.liveUrl}
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo →
                                </a>
                                <a
                                    href={project.githubUrl}
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
