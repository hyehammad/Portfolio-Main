import { motion } from "framer-motion";

const skills = [
  { name: "Communication", category: "Soft", level: 95 },
  { name: "Leadership", category: "Soft", level: 90 },
  { name: "Problem Solving", category: "Soft", level: 92 },
  { name: "MS Office Suite", category: "Tech", level: 98 },
  { name: "Adobe Photoshop", category: "Design", level: 85 },
  { name: "SQL", category: "Tech", level: 80 },
  { name: "Cold Calling", category: "Sales", level: 99 },
  { name: "Digital Research", category: "Tech", level: 90 },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Constellation of <span className="text-sage italic">Proficiency</span></h2>
          <p className="text-muted-foreground font-light">Technical mastery meets human connection.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="aspect-square flex flex-col items-center justify-center p-6 border border-white/5 rounded-full bg-white/2 hover:bg-sage/10 hover:border-sage/30 transition-all duration-300 group cursor-pointer relative"
            >
              {/* Circular Progress (Simulated with SVG) */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 p-1">
                <circle 
                  cx="50%" cy="50%" r="48%" 
                  fill="none" stroke="currentColor" strokeWidth="1" 
                  className="text-white/5"
                />
                <motion.circle 
                  cx="50%" cy="50%" r="48%" 
                  fill="none" stroke="currentColor" strokeWidth="1" 
                  className="text-sage opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  strokeDasharray="100 100" // Simplified for mockup
                  strokeDashoffset={100 - skill.level}
                />
              </svg>

              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 group-hover:text-sage transition-colors">{skill.category}</span>
              <h3 className="text-lg md:text-xl font-serif text-foreground text-center group-hover:scale-110 transition-transform duration-300">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
