import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Portfolio 2026",
    category: "Design & Dev",
    desc: "A premium cinematic portfolio experience built with React and Framer Motion.",
    color: "var(--rose)",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Techman Analytics",
    category: "Data & Sales",
    desc: "Dashboard for tracking call center metrics and sales performance.",
    color: "var(--teal)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Digital Excavation",
    category: "Research",
    desc: "A curated collection of hidden internet gems and digital archaeology findings.",
    color: "var(--gold)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-32 relative bg-black/20">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-2">Selected <span className="text-rose italic">Works</span></h2>
          </div>
          <div className="flex gap-4">
             {/* Navigation controls could go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative aspect-[3/4] cursor-pointer"
            >
              <div className="absolute inset-0 bg-charcoal rounded-sm overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <span className="text-xs font-mono text-rose mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.desc}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="text-xs uppercase tracking-widest text-white flex items-center gap-2">
                      View Case Study <span className="text-rose">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
