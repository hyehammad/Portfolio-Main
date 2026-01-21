import { motion } from "framer-motion";
import pencilImage from '@assets/stock_images/vintage_wooden_penci_43afafa7.jpg';

export function Hero() {
  const name = "Hammad Akram";
  
  const pencilVariants = {
    animate: {
      x: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400],
      y: [0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0],
      transition: {
        duration: 4,
        ease: "linear",
        repeat: 0
      }
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 5 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden px-8 bg-[#0a0a0a]">
      {/* Vintage Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')]" />
      
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-6"
        >
          <span className="font-serif italic text-sm uppercase tracking-[0.6em] text-primary/60 mb-2 block">Est. 2026</span>
          <div className="w-16 h-[0.5px] bg-primary/20 mx-auto" />
        </motion.div>

        {/* Writing Animation Area */}
        <div className="relative mb-12 py-10 flex flex-col items-center">
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-serif text-ivory tracking-tight leading-none flex items-baseline relative">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className={char === " " ? "mr-6 md:mr-10" : ""}
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400
                }}
              >
                {char}
              </motion.span>
            ))}

            {/* Animated Pencil */}
            <motion.div
              className="absolute -top-16 -left-20 w-32 h-32 pointer-events-none z-20"
              variants={pencilVariants}
              animate="animate"
            >
              <img 
                src={pencilImage}
                alt="Vintage Pencil"
                className="w-full h-full object-contain opacity-90"
                style={{ 
                  transform: "rotate(-45deg)",
                  filter: "brightness(0.8) sepia(0.3)"
                }}
              />
            </motion.div>
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1.5 }}
          className="text-xs md:text-sm font-serif italic tracking-[0.4em] text-ivory/30 mb-16 uppercase"
        >
          Wapda Town Lahore, Punjab
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1, ease: [0.77, 0, 0.175, 1] }}
          className="flex flex-col md:flex-row gap-10"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 font-serif italic tracking-widest text-xs uppercase border border-primary/20 text-primary hover:bg-primary/5 transition-all duration-500"
          >
            The Archive
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-serif italic border border-white/5 hover:border-primary/40 transition-all duration-700 text-ivory/60 hover:text-ivory"
          >
            Inquiry
          </button>
        </motion.div>
      </div>

      {/* Editorial Numbers */}
      <div className="absolute left-12 bottom-12 text-[9px] font-serif italic tracking-[0.5em] text-white/5 uppercase">
        ARCHITECTURAL NOIR SERIES // NO. 01
      </div>
    </section>
  );
}
