import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden px-8">
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          className="mb-8"
        >
          <div className="w-12 h-[1px] bg-primary/30 mx-auto" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
          className="text-7xl md:text-9xl lg:text-[10rem] font-serif text-ivory tracking-tighter leading-none mb-8 uppercase"
        >
          Hammad <br/> <span className="italic font-light opacity-80 text-primary">Akram</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-base md:text-lg font-serif italic text-ivory/60 mb-12 max-w-2xl"
        >
          "The best way to predict the future is to invent it."
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.77, 0, 0.175, 1] }}
          className="flex flex-col md:flex-row gap-6"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="luxury-button"
          >
            Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-sans border border-white/10 hover:border-white transition-colors"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

    </section>
  );
}
