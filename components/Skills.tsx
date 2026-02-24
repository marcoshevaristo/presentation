const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      'Angular',
      'React.js',
      'Next.js',
      'Vue.js',
      'JavaScript',
      'TypeScript',
      'TailwindCSS',
      'HTML/CSS',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
    ],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'Bun', 'NPM', 'Vercel', 'CI/CD'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-20 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="container mx-auto px-6">
        <h2
          data-testid="skills-title"
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={`${category.category}-${index}`}
              data-testid={`skill-category-${category.category.toLowerCase()}`}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6"
            >
              <h3
                data-testid={`skill-category-title-${category.category.toLowerCase()}`}
                className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400"
              >
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={`${category.category}-${skillIndex}`}
                    data-testid={`skill-${category.category.toLowerCase()}-${skillIndex}`}
                    className="flex items-center text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
