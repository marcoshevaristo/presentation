'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { ContactLinksContext } from './context/ContactLinksContext';

export default function Home() {
  return (
    <ContactLinksContext.Provider
      value={{
        linkedin: 'https://www.linkedin.com/in/marcos-evaristo-a2497393/',
        whatsapp: 'https://wa.me/+55999400403',
        email: 'marcosh.evaristo15@gmail.com',
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ContactLinksContext.Provider>
  );
}
