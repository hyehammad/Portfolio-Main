import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = [
    {
      role: "Team Lead",
      company: "Techman Ventures",
      period: "2022 – 2024",
      desc: "Architecting high-performance sales strategies for the US market."
    },
    {
      role: "Academic Excellence",
      company: "Punjab College",
      period: "2019 – 2021",
      desc: "Top 0.1% Merit — High School Certificate."
    }
  ];

  return (
    <section id="about" className="py-40 relative bg-noir overflow-hidden">
      <div className="container mx-auto px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-6 block">Biography</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ivory mb-12 leading-tight">
              Crafting <br/> <span className="italic text-primary">Precision</span> <br/> Through Empathy.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-md">
              Hammad Akram is a design engineer focused on building digital products that transcend utility. 
              By merging leadership skills with technical rigor, I create experiences that resonate.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="block text-3xl font-serif text-primary mb-1">99%</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Academic Peak</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-primary mb-1">02+</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Years Leadership</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12" ref={ref}>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + (index * 0.2), duration: 1, ease: [0.77, 0, 0.175, 1] }}
                className="group border-b border-white/10 pb-12"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-xl font-sans tracking-wide text-ivory group-hover:text-primary transition-colors">{item.role}</h4>
                  <span className="text-[10px] font-mono text-muted-foreground">{item.period}</span>
                </div>
                <span className="text-sm text-primary mb-4 block uppercase tracking-widest">{item.company}</span>
                <p className="text-muted-foreground font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 text-[20vw] font-serif font-bold text-white/[0.02] pointer-events-none select-none italic">
        Story
      </div>
    </section>
  );
}
