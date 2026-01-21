import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/sections/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const sectionColors: Record<string, string> = {
  home: "#080808",     // Noir
  about: "#0f1514",    // Muted Deep Teal
  skills: "#14110f",   // Muted Charcoal
  projects: "#1a0f11", // Muted Crimson Depth
  contact: "#080808",  // Back to Noir
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const color = sectionColors[sectionId];
          if (color) {
            document.documentElement.style.setProperty("--bg-color", color);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "about", "skills", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <Layout>
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
          
          <footer className="py-12 text-center border-t border-white/5 bg-transparent">
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              Built with Precision © 2026
            </span>
          </footer>
        </Layout>
      )}
    </>
  );
}
