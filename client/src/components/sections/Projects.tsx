import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  code: string;
  category: string;
  desc: string;
  color: string;
  image: string;
  mission: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nova Financial",
    code: "OPERATION-NOVA",
    category: "FinTech Architecture",
    desc: "A high-security financial platform designed for global transactions.",
    mission: "Establish a decentralized, unhackable ledger system for tier-1 bank operations.",
    color: "#c5a059", // Gold
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    tech: ["React", "Rust", "Web3"]
  },
  {
    id: 2,
    title: "Vertex Intel",
    code: "PROJECT-VERTEX",
    category: "Data Alchemy",
    desc: "Advanced intelligence board for real-time strategic data visualization.",
    mission: "Transform raw satellite data into actionable intelligence in under 500ms.",
    color: "#5a7d7a", // Teal
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    tech: ["Python", "Three.js", "AI"]
  },
  {
    id: 3,
    title: "Aegis Shield",
    code: "AEGIS-ZERO",
    category: "Cyber Defense",
    desc: "Next-gen encryption protocols for secure governmental communication.",
    mission: "Protect critical infrastructure from quantum-level decryption attacks.",
    color: "#8b0000", // Crimson
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    tech: ["C++", "Security", "Crypto"]
  },
  {
    id: 4,
    title: "Digital Ghost",
    code: "GHOST-PROTOCOL",
    category: "Espionage Tech",
    desc: "Stealth digital presence management for high-profile assets.",
    mission: "Anonymize digital footprints across global networks with zero trace.",
    color: "#8a9b76", // Sage
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    tech: ["Go", "Networking", "VPN"]
  }
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-40 relative min-h-screen overflow-hidden px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Archive Section 04</span>
          <h2 className="text-4xl md:text-6xl font-serif text-ivory">Classified <span className="italic text-primary">Dossiers</span></h2>
        </motion.div>

        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-6 lg:gap-4 relative h-[600px] lg:h-[500px]">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            const isAnyHovered = hoveredId !== null;
            
            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  width: isHovered ? (window.innerWidth < 1024 ? "100%" : 600) : (window.innerWidth < 1024 ? "100%" : 40),
                  height: isHovered ? 500 : (window.innerWidth < 1024 ? 80 : 400),
                  rotate: isHovered ? 0 : (index % 2 === 0 ? 5 : -5),
                  opacity: isAnyHovered && !isHovered ? 0.2 : 1,
                  scale: isAnyHovered && !isHovered ? 0.95 : 1,
                  zIndex: isHovered ? 50 : 1
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.68, -0.55, 0.265, 1.55] 
                }}
                className={`
                  relative cursor-pointer overflow-hidden border border-white/10 glass-card
                  ${!isHovered ? 'flex items-center justify-center' : ''}
                `}
              >
                {/* Initial Vertical Slit State */}
                <AnimatePresence mode="wait">
                  {!isHovered && (
                    <motion.div 
                      key="slit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {/* Matrix Code Stream (Simulated) */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                        <div className="animate-matrix text-[8px] font-mono leading-none break-all p-1 text-primary">
                          {Array(100).fill(0).map(() => Math.random().toString(36).substring(2)).join('')}
                        </div>
                      </div>
                      
                      <span 
                        className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {project.code}
                      </span>
                    </motion.div>
                  )}

                  {/* Expanded Dossier State */}
                  {isHovered && (
                    <motion.div 
                      key="dossier"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute inset-0 flex flex-col md:flex-row h-full"
                    >
                      {/* Image Layer */}
                      <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
                        <motion.div 
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.6 }}
                          transition={{ duration: 1 }}
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-noir via-transparent to-transparent" />
                      </div>

                      {/* Content Layer */}
                      <div className="flex-1 p-8 flex flex-col justify-center relative">
                        {/* Intelligence Stamps */}
                        <motion.div 
                          initial={{ scale: 2, opacity: 0, rotate: -10 }}
                          animate={{ scale: 1, opacity: 1, rotate: -5 }}
                          className="absolute top-4 right-4 border-2 border-primary/50 text-primary px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest"
                        >
                          TOP SECRET // CLASSIFIED
                        </motion.div>

                        <motion.span 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="text-[10px] font-mono text-primary mb-2 uppercase tracking-[0.3em]"
                        >
                          {project.category}
                        </motion.span>
                        
                        <motion.h3 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-3xl md:text-5xl font-serif text-ivory mb-6"
                        >
                          {project.title}
                        </motion.h3>

                        <div className="space-y-6">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">Mission Objective</span>
                            <p className="text-sm text-ivory/80 font-light italic border-l border-primary/30 pl-4">
                              "{project.mission}"
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                              <span key={i} className="text-[9px] font-mono border border-white/10 px-2 py-1 uppercase text-muted-foreground bg-white/5">
                                {t}
                              </span>
                            ))}
                          </div>

                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="luxury-button !px-6 !py-3 w-fit"
                          >
                            Access Full File
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Ambient Edge Glow */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 20px ${project.color}20` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Matrix Rain Decorative (Limited) */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none overflow-hidden select-none">
        <div className="text-[8px] font-mono leading-none break-all">
          {Array(500).fill(0).map(() => Math.random().toString(36).substring(2)).join('')}
        </div>
      </div>
    </section>
  );
}
