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
      desc: "Led a high-performing team in a USA-based call center, consistently surpassing sales goals."
    },
    {
      role: "Education",
      company: "Punjab College Sahiwal",
      period: "2019 – 2021",
      desc: "High School Certificate - 99% Cumulative GPA. Ranked 2nd in District."
    },
    {
      role: "Education",
      company: "Govt High School",
      period: "2017 – 2019",
      desc: "Secondary School Certificate - 96% Cumulative GPA. Ranked 2nd in High School."
    }
  ];

  return (
    <section id="about" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Section Title */}
          <div className="lg:col-span-4">
            <motion.h2 
              className="text-6xl md:text-8xl font-serif text-teal/20 absolute -top-20 left-4 z-0 pointer-events-none select-none"
              style={{ writingMode: "vertical-rl" }}
            >
              About Me
            </motion.h2>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-foreground mb-6">A Journey of <span className="text-teal italic">Growth</span></h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                From ranking top in my district to leading high-performance teams, my path has been defined by a relentless pursuit of excellence. 
                I don't just participate; I aim to master. My background in leadership and communication has taught me that the best digital experiences are deeply human.
              </p>
              
              <div className="p-6 border border-teal/20 bg-teal/5 rounded-sm backdrop-blur-sm">
                <h4 className="text-gold uppercase tracking-widest text-xs mb-4">Core Philosophy</h4>
                <p className="text-foreground font-serif italic text-lg">
                  "Thinking 5 moves ahead in everything."
                </p>
              </div>
            </div>
          </div>

          {/* Timeline / Experience */}
          <div className="lg:col-span-8 space-y-8" ref={ref}>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative p-8 border border-white/5 bg-charcoal/50 hover:bg-charcoal hover:border-teal/30 transition-all duration-500 rounded-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-xl font-sans font-medium text-foreground group-hover:text-teal transition-colors">
                    {item.role}
                  </h4>
                  <span className="text-sm font-mono text-muted-foreground">{item.period}</span>
                </div>
                <h5 className="text-muted-foreground/80 mb-2">{item.company}</h5>
                <p className="text-sm text-muted-foreground font-light max-w-xl">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
