'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { ContactLinksContext } from '@/app/context/ContactLinksContext';

export default function Contact() {
  const { linkedin, whatsapp, email } = useContext(ContactLinksContext);
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={email ? `mailto:${email}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/email-icon.svg"
                alt="Email"
                width={48}
                height={48}
                className="bg-white w-12 h-12 rounded-sm"
              />
            </a>
            <a href={linkedin || '#'} target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={48}
                height={48}
                className="bg-white w-12 h-12 rounded-sm"
              />
            </a>
            <a href={whatsapp || '#'} target="_blank" rel="noopener noreferrer">
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
