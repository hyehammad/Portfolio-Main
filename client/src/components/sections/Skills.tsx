import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    {
      category: "Software Architecture",
      items: ["Python", "JavaScript", "SQL", "React", "Docker", "Git"]
    },
    {
      category: "Specialized Systems",
      items: ["Data Alchemy", "AI Integration", "Digital Espionage", "Cold Call Ninjery"]
    }
  ];

  return (
    <section id="skills" className="py-40 relative min-h-screen overflow-hidden px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-serif text-ivory">Technical <span className="italic text-primary">Proficiencies</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <h3 className="text-xl font-serif text-ivory mb-8 uppercase tracking-widest">{skill.category}</h3>
              <div className="flex flex-wrap gap-4">
                {skill.items.map((item, j) => (
                  <span key={j} className="text-[10px] font-mono border border-white/10 px-4 py-2 uppercase text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-10 border border-primary/20 bg-primary/[0.02] text-center max-w-3xl mx-auto"
        >
          <p className="text-lg font-serif italic text-muted-foreground leading-relaxed">
            "I believe exceptional software is built at the intersection of the rigor of computer science, 
            the empathy of user-centered design, and the narrative power of storytelling."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
