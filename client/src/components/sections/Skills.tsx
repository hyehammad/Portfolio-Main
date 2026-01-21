import { motion } from "framer-motion";

export function Skills() {
  const skillGroups = [
    {
      title: "Software Tools",
      items: ["MS Word", "MS Excel", "Power Point", "Adobe Photoshop", "SQL"],
      status: "Master"
    },
    {
      title: "Communication",
      items: ["English", "Urdu", "Punjabi"],
      status: "Strong"
    },
    {
      title: "Technical & Smart Skills",
      items: ["Cold Call Ninja", "Data Alchemy", "ChatGPT Domination", "Digital Espionage"],
      status: "Expert"
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
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Proficiency</span>
          <h2 className="text-5xl md:text-7xl font-serif text-ivory">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-lg font-serif text-ivory uppercase tracking-widest">{group.title}</h3>
                <span className="text-[10px] font-mono text-primary border border-primary/20 px-2 py-1 uppercase">{group.status}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, j) => (
                  <span key={j} className="text-[10px] font-mono border border-white/10 px-3 py-1.5 uppercase text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Section Integrated */}
        <div className="mt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Career Path</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ivory">Experience</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-12 border border-white/10 bg-noir/40 backdrop-blur-xl relative"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-serif text-ivory">Techman Ventures</h3>
                <p className="text-primary font-sans text-sm tracking-widest uppercase mt-1">USA certified and registered | Team Lead</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-serif italic text-ivory/60">Lahore</span>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mt-1">12/2022 – 12/2024</p>
              </div>
            </div>
            
            <ul className="space-y-4 max-w-4xl">
              {[
                "Led a high-performing team in a USA-based call center, consistently surpassing sales goals and increasing revenue.",
                "Motivated and managed dynamic individuals to ensure top-tier customer satisfaction.",
                "Developed strong leadership, communication, and problem-solving skills in a fast-paced, results-driven environment.",
                "Adapted under pressure to meet high expectations and deliver exceptional results."
              ].map((bullet, k) => (
                <li key={k} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1">/</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
