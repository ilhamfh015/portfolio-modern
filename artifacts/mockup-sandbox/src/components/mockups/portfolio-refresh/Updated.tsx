import Navbar from './updated/Navbar';
import ScrollToTop from './updated/ScrollToTop';
import Hero from './updated/sections/Hero';
import About from './updated/sections/About';
import Skills from './updated/sections/Skills';
import Projects from './updated/sections/Projects';
import Experience from './updated/sections/Experience';
import Contact from './updated/sections/Contact';
import Footer from './updated/sections/Footer';
import './_updated.css';

export function Updated() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
