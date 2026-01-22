import { motion } from "framer-motion";

export function About() {
  const education = [
    {
      period: "07-2017 – 07-2019",
      title: "Govt High School | Secondary School Certificate",
      location: "Farooka, Pakistan",
      highlights: [
        "Cumulative GPA 1058/1100 (96%)",
        "Ranked Second among all students in High school."
      ]
    },
    {
      period: "11-2019 – 11-2021",
      title: "Punjab College Sahiwal | High School Certificate",
      location: "Sahiwal, Pakistan",
      highlights: [
        "Cumulative GPA 1092/1100 (99%)",
        "Ranked second in District."
      ]
    },
    {
      period: "Year-2024",
      title: "English Proficiency Test | British Council",
      location: "IELTS 6.5 Bands",
      highlights: [
        "Strong Language Proficiency",
        "Mastering technical communication"
      ]
    }
  ];

  return (
    <section id="about" className="py-40 relative min-h-screen flex items-center overflow-hidden px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">About Me</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ivory mb-12">Hammad <br/><span className="italic text-primary">Akram</span></h2>
            
            <div className="space-y-8 text-lg font-sans text-muted-foreground leading-relaxed">
              <p>
                Specializing in bridging the gap between logic and creativity, I architect high-performance digital solutions that balance computational rigor with intuitive design. 
                My approach treats every project as a unique optimization problem, ensuring code that is as clean as it is effective.
              </p>
              <p>
                I am a dedicated professional with a background in leadership and technical excellence, focusing on delivering production-ready applications that resonate on both technical and human levels.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Education</span>
            {education.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="group relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-[2px] h-0 group-hover:h-full bg-primary transition-all duration-700" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{item.period}</span>
                <h4 className="text-xl font-serif text-ivory mt-2 mb-1">{item.title}</h4>
                <p className="text-sm font-sans text-primary/80 mb-4 italic">{item.location}</p>
                <ul className="space-y-2">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="text-sm font-sans text-muted-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
