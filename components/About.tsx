export default function About() {
  const currentYear = new Date().getFullYear();
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="container mx-auto px-6">
        <h2
          data-testid="about-title"
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p
              data-testid="about-paragraph-1"
              className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-6"
            >
              I'm a passionate developer with a love for creating elegant
              solutions to complex problems. With expertise in modern web
              technologies, I specialize in building scalable applications that
              provide exceptional user experiences.
            </p>
            <p
              data-testid="about-paragraph-2"
              className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-6"
            >
              My journey in software development started {currentYear - 2016}{' '}
              years ago, and since then I've worked on various projects ranging
              from small business websites to large-scale enterprise
              applications. I'm constantly learning and staying up-to-date with
              the latest industry trends.
            </p>
            <p
              data-testid="about-paragraph-3"
              className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed"
            >
              I believe in continuous improvement and enjoy collaborating with
              talented individuals to bring ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
