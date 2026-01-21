import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import butterflyImage from "@assets/generated_images/delicate_butterfly_line_art.png";
import pencilImage from "@assets/generated_images/elegant_vintage_pencil_illustration.png";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timers = [
      setTimeout(() => setStage(1), 500),   // Pencil enters
      setTimeout(() => setStage(2), 2000),  // Writing completes (simulated)
      setTimeout(() => setStage(3), 2500),  // Butterfly enters
      setTimeout(() => setStage(4), 4500),  // Exit
      setTimeout(() => onComplete(), 5500), // Complete
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 1 ? 1 : 0 }}
          className="font-serif text-3xl md:text-5xl text-foreground italic relative z-10"
        >
          {stage >= 1 && (
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap inline-block border-r-2 border-transparent"
            >
              My Portfolio
            </motion.span>
          )}
        </motion.div>

        {/* Pencil Animation */}
        <AnimatePresence>
          {stage >= 1 && stage < 3 && (
            <motion.img
              src={pencilImage}
              alt="Pencil"
              initial={{ x: 200, y: 100, rotate: 45, opacity: 0 }}
              animate={{ x: 80, y: 20, opacity: 1 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute w-32 md:w-48 object-contain z-20 pointer-events-none filter brightness-150 grayscale"
            />
          )}
        </AnimatePresence>

        {/* Butterfly Animation */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ y: -200, opacity: 0, scale: 0.5 }}
              animate={{ y: -40, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none mix-blend-screen"
            >
              <img 
                src={butterflyImage} 
                alt="Butterfly" 
                className="w-24 md:w-32 opacity-90 animate-pulse-slow" 
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Particles (CSS Simulated) */}
        {stage === 4 && (
          <div className="absolute inset-0 pointer-events-none">
             {/* Simple CSS particles could go here, relying on exit transition for now */}
          </div>
        )}
      </div>
    </motion.div>
  );
}
