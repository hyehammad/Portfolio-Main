import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const stages = [
      setTimeout(() => setStage(1), 1000), // Name appear
      setTimeout(() => setStage(2), 2500), // Flash
      setTimeout(() => onComplete(), 4000),
    ];

    return () => {
      clearInterval(interval);
      stages.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-noir flex flex-col items-center justify-center overflow-hidden"
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
    >
      {/* Background Text (Architectural) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[30vw] font-serif font-bold uppercase tracking-tighter">AKRAM</span>
      </motion.div>

      <div className="relative flex flex-col items-center">
        {/* Central Logo / Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: stage >= 1 ? 0 : "100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="text-4xl md:text-6xl font-serif tracking-[0.3em] uppercase text-ivory flex items-baseline gap-2"
          >
            Hammad <span className="text-primary text-xl tracking-normal">Akram</span>
          </motion.h1>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 font-sans text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          {percent}% Loading Experience
        </motion.span>
      </div>

      {/* Cinematic Flash Overlay */}
      <AnimatePresence>
        {stage === 2 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Corner Accents */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-12 left-12 w-8 h-8 border-t border-l border-white/20" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-12 right-12 w-8 h-8 border-t border-r border-white/20" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-white/20" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-white/20" 
      />
    </motion.div>
  );
}
