import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/sections/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeColor, setActiveColor] = useState("var(--charcoal)");

  // Scroll spy to change background color
  useEffect(() => {
    if (loading) return;

    const handleScroll = () => {
      const sections = [
        { id: "home", color: "var(--charcoal)" },
        { id: "about", color: "hsl(229, 17%, 12%)" }, // Secondary
        { id: "skills", color: "hsl(228, 16%, 15%)" }, // Slightly darker muted
        { id: "projects", color: "hsl(229, 27%, 5%)" }, // Very dark for contrast
        { id: "contact", color: "var(--charcoal)" },
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveColor(section.color);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <Layout backgroundColor={activeColor}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          
          <footer className="py-8 text-center text-muted-foreground text-xs uppercase tracking-widest border-t border-white/5">
            © 2026 Hammad Akram. All Rights Reserved.
          </footer>
        </Layout>
      )}
    </>
  );
}
