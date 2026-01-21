import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [angle, setAngle] = useState(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [hoverState, setHoverState] = useState<"default" | "interactive" | "project">("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const prevX = mouseX.get();
      const prevY = mouseY.get();
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        setAngle(Math.atan2(dy, dx) * (180 / Math.PI));
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest("button, a, [role='button']")) {
        setHoverState("interactive");
      } else if (target.closest(".project-slit")) {
        setHoverState("project");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Cinematic Light Beam */}
      <motion.div
        className="fixed top-0 left-0 h-40 origin-left"
        style={{
          x: cursorX,
          y: cursorY,
          rotate: angle,
          width: 120,
          background: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(197, 160, 89, 0.2) 50%, transparent 100%)",
          maskImage: "radial-gradient(ellipse at left, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at left, black, transparent 70%)",
          opacity: hoverState === "interactive" ? 0.8 : 0.4,
        }}
        animate={{
          scaleY: hoverState === "interactive" ? 1.5 : 1,
        }}
      />

      {/* Primary Pen Tip */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff,0_0_20px_#c5a059]"
          animate={{
            scale: hoverState === "interactive" ? 2 : 1,
            rotate: hoverState === "interactive" ? 45 : 0,
          }}
        />
        
        {/* Cardinal Spikes */}
        {[0, 90, 180, 270].map((rot) => (
          <motion.div
            key={rot}
            className="absolute w-4 h-[1px] bg-white/40"
            style={{ rotate: rot, translateX: "100%" }}
            animate={{
              scaleX: hoverState === "interactive" ? 1.5 : 1,
            }}
          />
        ))}
      </motion.div>

      {/* Trail Frames (Simulated with simple delay) */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white/20 rounded-full blur-[2px]"
        style={{
          x: useSpring(mouseX, { damping: 40, stiffness: 400 }),
          y: useSpring(mouseY, { damping: 40, stiffness: 400 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
