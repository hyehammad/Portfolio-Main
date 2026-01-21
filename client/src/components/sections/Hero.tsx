import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = [
  "A Designer who Codes.",
  "A Problem-Finder.",
  "A Storyteller.",
  "A Leader."
];

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden px-8">
      {/* Central Composition */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          className="mb-8"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-2 block">Premium Portfolio Vol. 01</span>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
          className="text-7xl md:text-9xl lg:text-[12rem] font-serif text-ivory tracking-tighter leading-none mb-4 uppercase mix-blend-difference"
        >
          Design <br/> <span className="italic font-light opacity-80 text-primary">Couture</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-lg md:text-2xl font-serif italic text-muted-foreground mb-12"
        >
          {text}<span className="text-primary not-italic">_</span>
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
            Explore Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-sans border border-white/10 hover:border-white transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Side Numbers (Editorial Style) */}
      <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-4 text-[10px] font-sans tracking-[0.5em] uppercase text-muted-foreground/30 [writing-mode:vertical-rl] rotate-180">
          <span>Established 2026</span>
          <div className="h-20 w-[1px] bg-white/10 mx-auto" />
          <span>Lahore — Global</span>
        </div>
      </div>

      {/* Background Shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] border border-white/5 rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -left-[10%] w-[40vw] h-[40vw] border border-white/5 rounded-full pointer-events-none" 
      />
    </section>
  );
}
