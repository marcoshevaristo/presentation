const projects = [
    {
        title: "Equipment fleet manager",
        description: "A SaaS application for managing a fleet of equipment, including display of market valuation for retail, wholesale and auction, inventory management, insights and more. Client is a leading company in North America in the equipment auction market.",
        technologies: ["Angular", "Angular Material", "Chart.js", "Python", "Postgres"],
    },
    {
        title: "SaaS platform for company administration",
        description: "A SaaS platform for company administration, including user management, analytics, payroll and more.",
        technologies: ["Java", "Spring", "Angular", "TypeScript", "Postgres"],
    },
    {
        title: "Logistics web application",
        description: "A platform for logistics management, including real-time tracking, price and delivery time estimation using integration with client external API. Handcrafted for a leading logistics company in Brazil.",
        technologies: ["Vue.js", "PrimeVue", "TailwindCSS", "Node.js", "MongoDB"],
    },
    {
        title: "Company risk management system",
        description: "A system for managing company risks, including risk assessment, mitigation planning and monitoring. Client is a leading company in the enterprise safety and security industry, based in Switzerland.",
        technologies: ["Vue.js", "PrimeVue", "TailwindCSS", "Node.js", "MongoDB"],
    },
    {
        title: "Application for production line management",
        description: "Internal application for production line management, including inventory control, customer and partners management and many more. Built with development speed as primary goal with tight deadlines and constant changes in requirements, I built a page constructor engine that reads JSON files from the backend and renders the pages based on that, with multiple complex condition logic and reusable components. Client is a global giant in the food industry.",
        technologies: ["Angular", "PrimeNG", "C# .NET", "SQL Server"],
    },
    {
        title: "Mobile app for selling/delivery",
        description: "Mobile app used for registering sales and deliveries, with features such as inventory management, customer management, delivery tracking, API integration for payment with credit card and more. Client is reference in kitchen gas distribution in its region in Brazil.",
        technologies: ["React Native", "Redux", "Material UI"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    My Projects
                </h2>
                <p className="max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-12">
                    Most of my projects up to this point have been corporate projects that can't be publically shared, so I can't share images, links or details about them. However, here are some descriptions of some projects I've worked on and the technologies I've used. I'm always eager to take on new challenges and expand my portfolio with exciting projects in the future!
                </p>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
