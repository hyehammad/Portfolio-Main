import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [hoverState, setHoverState] = useState<"default" | "interactive" | "project">("default");
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTime;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const v = Math.sqrt(dx*dx + dy*dy) / dt;
      
      setVelocity(v);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;

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
      {/* Path Illumination (Beam) */}
      <motion.div
        className="fixed top-0 left-0 w-[160px] h-[80px] origin-left pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          background: "radial-gradient(ellipse at left, rgba(255, 215, 0, 0.15) 0%, transparent 70%)",
          rotate: velocity > 0.1 ? 0 : 0, // In a real app we'd calculate angle
          opacity: hoverState === "project" ? 0.4 : 0.2,
        }}
        animate={{
          scaleX: 1 + velocity * 0.5,
          skewY: velocity * 2,
        }}
      />

      {/* The Beacon (Core) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FFD700] rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 8px 2px rgba(255, 215, 0, 0.7), 0 0 24px 4px rgba(255, 215, 0, 0.2)",
        }}
        animate={{
          scale: hoverState === "interactive" ? 2 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.2, ease: [0.645, 0.045, 0.355, 1] }}
      />

      {/* Orbiting Particles */}
      {[0, 120, 240].map((i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-0.5 h-0.5 bg-[#FFD700] rounded-full"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: Math.cos(Date.now() / 1000 + i) * 12,
            y: Math.sin(Date.now() / 1000 + i) * 12,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      ))}
    </div>
  );
}
