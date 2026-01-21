import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-40 relative min-h-screen flex items-center overflow-hidden px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">The Narrative</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ivory mb-12">Digital <span className="italic text-primary">Frontier</span></h2>
            
            <div className="space-y-8 text-lg font-serif italic text-muted-foreground leading-relaxed">
              <p>
                "A Lahore-born computer scientist with a passion for elegant code and compelling user experiences. 
                My journey from Wapda Town to the digital frontier has been guided by a singular principle: 
                technology should serve humanity, not the other way around."
              </p>
              <p className="text-base font-sans not-italic text-ivory/80">
                "I believe exceptional software is built at the intersection of three disciplines: 
                the rigor of computer science, the empathy of user-centered design, and the narrative power of storytelling."
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: "2019-2021",
                title: "Punjab College Sahiwal",
                desc: "Honored as district runner-up with 99%, where mathematical precision met creative problem-solving, foreshadowing my approach to software development."
              },
              {
                year: "2017-2019",
                title: "Govt High School | Farooka",
                desc: "Laid the foundation of analytical thinking, graduating second in my class with a 96% score—not just numbers, but the beginning of a pattern-seeking mind."
              },
              {
                year: "2024",
                title: "IELTS 6.5",
                desc: "Mastering technical communication in global contexts, ensuring code speaks clearly across cultures and teams."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="group relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-[2px] h-0 group-hover:h-full bg-primary transition-all duration-700" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{item.year}</span>
                <h4 className="text-xl font-serif text-ivory mt-2 mb-4">{item.title}</h4>
                <p className="text-sm font-sans text-muted-foreground/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
