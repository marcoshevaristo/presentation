'use client';

import { MoneyIcon, UsersIcon } from '@phosphor-icons/react';

const projects = [
  {
    title: 'Equipment fleet manager',
    description:
      'A SaaS application for managing a fleet of equipment, including display of market valuation for retail, wholesale and auction, inventory management, insights and more. Client is a leading company in North America in the equipment auction market.',
    technologies: [
      'Angular',
      'Angular Material',
      'Chart.js',
      'Python',
      'Postgres',
    ],
    companyAnnualRevenue: 1200000000,
    revenueCurrency: 'USD',
  },
  {
    title: 'SaaS platform for company administration',
    description:
      'A SaaS platform for company administration, including user management, analytics, payroll and more, representing over 20% of all payroll processing from CLT workers in Brazil with over 9MM payrolls across over 5,200 clients. Client is a leading company in the human resources industry in Brazil.',
    technologies: ['Java', 'Spring', 'Angular', 'TypeScript', 'Postgres'],
    usersCount: 100000,
    companyAnnualRevenue: 1000000000,
    revenueCurrency: 'BRL',
  },
  {
    title: 'Logistics portal and fintech',
    description:
      'A web application for managing logistics operations and other business related features including a fintech for drivers and related parts to exchange credit and make payments. Client is a reference in the logistics industry in Brazil.',
    technologies: ['Angular', 'PrimeNG', 'ASP.NET'],
    usersCount: 120000,
  },
  {
    title: 'Logistics tracking and estimate application',
    description:
      'A platform for logistics management, including real-time tracking, price and delivery time estimation using integration with client external API. Client is a leading logistics company in Brazil.',
    technologies: ['Vue.js', 'PrimeVue', 'TailwindCSS', 'Node.js', 'MongoDB'],
    companyAnnualRevenue: 3000000000,
    revenueCurrency: 'BRL',
  },
  {
    title: 'College monitored exam application',
    description:
      'An application for students to take monitored exams remotely, with features such as webcam monitoring, AI-based cheating detection and more. The application was split into three parts, one for a worker to check on students documents and give instructions, one for the student to take the exam while with their webcam and microphone open, and one for a worker to monitor the exam process of up to 50 students simultaneously. Client is a reference in the education industry in Brazil.',
    technologies: ['Angular', 'Node.js', 'Socket.IO', 'TensorFlow', 'WebRTC'],
    usersCount: 200000,
    companyAnnualRevenue: 1500000000,
    revenueCurrency: 'BRL',
  },
  {
    title: 'Application for production line management',
    description:
      'Internal application for production line management, including inventory control, customer and partners management and many more. Built with development speed as primary goal with tight deadlines and constant changes in requirements, I built a page constructor engine that reads JSON files from the backend and renders the pages based on that, with multiple complex condition logic and reusable components. Client is a global giant in the food industry.',
    technologies: ['Angular', 'PrimeNG', 'C# .NET', 'SQL Server'],
    companyAnnualRevenue: 70000000000,
    revenueCurrency: 'USD',
  },
  {
    title: 'Company risk management system',
    description:
      'A system for managing company risks, including risk assessment, mitigation planning and monitoring. Client is a leading company in the enterprise safety and security industry, based in Switzerland.',
    technologies: ['Vue.js', 'PrimeVue', 'TailwindCSS', 'Node.js', 'MongoDB'],
    companyAnnualRevenue: 140000000,
    revenueCurrency: 'USD',
  },
  {
    title: 'Mobile app for selling/delivery',
    description:
      'Mobile app used for registering sales and deliveries, with features such as inventory management, customer management, delivery tracking, API integration for payment with credit card and more. Client is reference in kitchen gas distribution in its region in Brazil.',
    technologies: ['React Native', 'Redux', 'Material UI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="py-20">
      <div className="container mx-auto px-6">
        <h2
          data-testid="projects-title"
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My Projects
        </h2>
        <p
          data-testid="projects-intro"
          className="max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-12"
        >
          Most of my projects up to this point have been corporate projects that
          can't be publicly shared, so I can't share images, links or details
          about them. However, here are some descriptions of some projects I've
          worked on and the technologies I've used. I'm always eager to take on
          new challenges and expand my portfolio with exciting projects in the
          future!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              data-testid={`project-card-${index}`}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900 flex flex-col"
            >
              <h3
                data-testid={`project-title-${index}`}
                className="text-2xl font-bold mb-3"
              >
                {project.title}
              </h3>
              <p
                data-testid={`project-${index}-description`}
                className="text-zinc-600 dark:text-zinc-400 mb-4"
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={`${project.title}-${tech}-${techIndex}`}
                    data-testid={`project-${index}-tech-${techIndex}`}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                data-testid={`project-${index}-stats`}
                className="flex justify-between items-end flex-1 text-sm text-zinc-500 dark:text-zinc-500"
              >
                {project.companyAnnualRevenue && project.revenueCurrency && (
                  <span
                    data-testid={`project-${index}-revenue`}
                    className="flex items-center gap-1"
                  >
                    <MoneyIcon />~
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: project.revenueCurrency,
                      notation: 'compact',
                    }).format(project.companyAnnualRevenue)}
                    *
                  </span>
                )}
                {project.usersCount && (
                  <span
                    data-testid={`project-${index}-users`}
                    className="flex items-center gap-1"
                  >
                    <UsersIcon />
                    {`~${project.usersCount.toLocaleString()} users`}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          data-testid="projects-footer-note"
          className="max-w-6xl mx-auto mt-4 text-sm text-zinc-500 dark:text-zinc-500"
        >
          <span>*Company annual revenue in their respective currency</span>
        </div>
      </div>
    </section>
  );
}
