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
    color: "#c5a059",
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
    color: "#5a7d7a",
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
    color: "#8b0000",
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
    color: "#8a9b76",
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

        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-12 lg:gap-8 relative min-h-[600px] lg:h-[500px]">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            const isAnyHovered = hoveredId !== null;
            
            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  width: isHovered ? (window.innerWidth < 1024 ? "100%" : 800) : (window.innerWidth < 1024 ? "100%" : 60),
                  height: isHovered ? 500 : (window.innerWidth < 1024 ? 120 : 400),
                  rotate: isHovered ? 0 : (index % 2 === 0 ? 3 : -3),
                  opacity: isAnyHovered && !isHovered ? 0.1 : 1,
                  scale: isAnyHovered && !isHovered ? 0.9 : 1,
                  zIndex: isHovered ? 50 : 1,
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.77, 0, 0.175, 1] 
                }}
                className={`
                  project-slit relative cursor-pointer overflow-hidden border border-white/10 glass-card
                  ${!isHovered ? 'flex items-center justify-center' : ''}
                `}
              >
                <AnimatePresence mode="wait">
                  {!isHovered && (
                    <motion.div 
                      key="slit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-noir/40 backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                        <div className="animate-pulse text-[8px] font-mono leading-none break-all p-2 text-primary/40">
                          {Array(50).fill(0).map(() => Math.random().toString(36).substring(2)).join('')}
                        </div>
                      </div>
                      
                      <span 
                        className="font-mono text-[12px] uppercase tracking-[0.6em] text-muted-foreground whitespace-nowrap"
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                      >
                        {project.code}
                      </span>
                    </motion.div>
                  )}

                  {isHovered && (
                    <motion.div 
                      key="dossier"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col md:flex-row h-full w-full"
                    >
                      <div className="w-full md:w-2/5 h-48 md:h-full relative overflow-hidden">
                        <motion.div 
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.7 }}
                          transition={{ duration: 1.2 }}
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-noir via-transparent to-transparent" />
                      </div>

                      <div className="flex-1 p-10 flex flex-col justify-center relative bg-noir/80 backdrop-blur-md">
                        <motion.div 
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="absolute top-8 right-8 border border-primary/30 text-primary px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em]"
                        >
                          CONFIDENTIAL // INTEL
                        </motion.div>

                        <motion.span 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-[10px] font-mono text-primary mb-4 uppercase tracking-[0.4em]"
                        >
                          {project.category}
                        </motion.span>
                        
                        <motion.h3 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-4xl md:text-6xl font-serif text-ivory mb-8"
                        >
                          {project.title}
                        </motion.h3>

                        <div className="space-y-8 max-w-lg">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block">Mission Objective</span>
                            <p className="text-base text-ivory/90 font-light italic border-l-2 border-primary/40 pl-6 leading-relaxed">
                              "{project.mission}"
                            </p>
                          </motion.div>

                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-3"
                          >
                            {project.tech.map((t, i) => (
                              <span key={i} className="text-[10px] font-mono border border-white/10 px-3 py-1.5 uppercase text-muted-foreground bg-white/5">
                                {t}
                              </span>
                            ))}
                          </motion.div>

                          <motion.button 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="luxury-button"
                          >
                            Access Full File
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
