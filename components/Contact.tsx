import Image from 'next/image';

const contactLinks = {
  linkedin: 'https://www.linkedin.com/in/marcos-evaristo-a2497393/',
  whatsapp: 'https://wa.me/+55999400403',
  email: 'marcosh.evaristo15@gmail.com',
};

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="py-20">
      <div className="container mx-auto px-6">
        <h2
          data-testid="contact-title"
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <p
            data-testid="contact-description"
            className="text-center text-zinc-600 dark:text-zinc-400 mb-8 text-lg"
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={contactLinks.email ? `mailto:${contactLinks.email}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-email"
            >
              <Image
                src="/email-icon.svg"
                alt="Email"
                width={48}
                height={48}
                className="bg-white w-12 h-12 rounded-sm"
              />
            </a>
            <a
              href={contactLinks.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-linkedin"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={48}
                height={48}
                className="bg-white w-12 h-12 rounded-sm"
              />
            </a>
            <a
              href={contactLinks.whatsapp || '#'}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp"
            >
              <Image
                src="/whatsapp-icon.svg"
                alt="WhatsApp"
                width={48}
                height={48}
                className="bg-white w-12 h-12 p-1 rounded-sm"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
