export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      data-testid="footer"
      className="py-8 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center text-zinc-700 dark:text-zinc-300">
          <p data-testid="footer-copyright">
            © {currentYear} Marcos Evaristo. All rights reserved.
          </p>
          <p data-testid="footer-tech-stack" className="mt-2 text-sm">
            Built with Next.js 16, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
