import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/sections/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <Layout backgroundColor="#080808">
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
          
          <footer className="py-12 text-center border-t border-white/5 bg-noir">
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              Built with Precision © 2026
            </span>
          </footer>
        </Layout>
      )}
    </>
  );
}
