import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  code: string;
  category: string;
  desc: string;
  mission: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    code: "ALPHA-SECURE",
    category: "Security Systems",
    desc: "Developing secure communication protocols for internal systems.",
    mission: "Ensure zero-latency encrypted data transmission.",
    tech: ["Python", "SQL", "Git"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Project Beta",
    code: "BETA-INTEL",
    category: "Data Analysis",
    desc: "Interactive dashboard for real-time sales performance metrics.",
    mission: "Transform raw sales data into actionable business intelligence.",
    tech: ["MS Excel", "React", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Project Gamma",
    code: "GAMMA-NINJA",
    category: "Performance Optimization",
    desc: "Automated workflow system for high-pressure team environments.",
    mission: "Optimize team output through algorithmic scheduling.",
    tech: ["JavaScript", "Node.js", "SQL"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  }
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const interests = [
    { title: "Digital Archaeology", desc: "Digging Up Hidden Internet Gems" },
    { title: "Cold Calling Olympics", desc: "Beating Receptionists Like Pro" },
    { title: "Mental Gymnastics", desc: "Thinking 5 Moves Ahead in Everything" }
  ];

  return (
    <section id="projects" className="py-40 relative min-h-screen overflow-hidden px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-serif text-ivory">Projects</h2>
        </motion.div>

        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-12 lg:gap-8 relative min-h-[600px] lg:h-[500px] mb-40">
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
                  rotate: isHovered ? 0 : (index % 2 === 0 ? 2 : -2),
                  opacity: isAnyHovered && !isHovered ? 0.2 : 1,
                  scale: isAnyHovered && !isHovered ? 0.95 : 1,
                  zIndex: isHovered ? 50 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                className={`
                  project-slit relative cursor-pointer overflow-hidden border border-white/10 bg-noir/20 backdrop-blur-md
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
                      className="absolute inset-0 flex items-center justify-center"
                    >
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
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col md:flex-row h-full w-full"
                    >
                      <div className="w-full md:w-1/2 h-full relative overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-noir via-transparent to-transparent" />
                      </div>
                      <div className="flex-1 p-10 flex flex-col justify-center bg-noir/80">
                        <span className="text-[10px] font-mono text-primary mb-4 uppercase tracking-[0.4em]">{project.category}</span>
                        <h3 className="text-4xl font-serif text-ivory mb-6">{project.title}</h3>
                        <p className="text-muted-foreground font-sans mb-8 leading-relaxed italic">"{project.mission}"</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="text-[9px] font-mono border border-white/10 px-3 py-1 uppercase text-muted-foreground">{t}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Interests Section */}
        <div className="mt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Passions</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ivory">Interests</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-10 border border-white/5 bg-white/[0.01] text-center group"
              >
                <h4 className="text-xl font-serif text-ivory mb-4 group-hover:text-primary transition-colors">{interest.title}</h4>
                <div className="w-8 h-[1px] bg-primary/20 mx-auto mb-6 group-hover:w-16 transition-all" />
                <p className="text-sm font-sans text-muted-foreground leading-relaxed italic">"{interest.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
