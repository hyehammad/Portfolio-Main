import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import bgImage from "@assets/generated_images/ethereal_gradient_mesh_background.png";

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
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const taglineVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-0" />
      
      <div className="container mx-auto px-8 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gold font-sans font-light tracking-widest text-sm uppercase mb-6"
          >
            Hello, I'm Hammad Akram
          </motion.h2>

          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={taglineVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] mb-8 min-h-[3.3em]"
          >
            Design Engineer.<br/>
            <span className="text-muted-foreground italic block h-[1.1em]">
              {text}
              <span className="animate-pulse text-gold">|</span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-lg leading-relaxed mb-10"
          >
            I craft digital experiences that balance emotion and precision. 
            Blending technical mastery with a cinematic eye for detail.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-6"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gold text-charcoal font-sans font-medium rounded-sm hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-white/20 text-foreground font-sans font-light rounded-sm hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
