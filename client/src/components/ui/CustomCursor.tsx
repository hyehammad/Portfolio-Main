import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [hoverState, setHoverState] = useState<"default" | "interactive" | "project">("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      {/* Primary Layer: 2x2 Square */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-ivory"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: hoverState === "interactive" ? 45 : 0,
          scale: hoverState === "interactive" ? 2 : 1,
          borderRadius: hoverState === "project" ? "0%" : "0%",
          width: hoverState === "project" ? 4 : 4,
          height: hoverState === "project" ? 40 : 4,
        }}
        transition={{ duration: 0.2, ease: [0.645, 0.045, 0.355, 1] }}
      />

      {/* Secondary Layer: Wireframe Circle */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-gold/20 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoverState === "interactive" ? 1.5 : 1,
          opacity: hoverState === "interactive" ? 0.3 : 0.15,
          borderColor: hoverState === "interactive" ? "rgba(197, 160, 89, 0.4)" : "rgba(197, 160, 89, 0.2)",
        }}
        transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
      />

      {/* Tertiary Layer: Micro-points */}
      {[0, 90, 180, 270].map((angle) => (
        <motion.div
          key={angle}
          className="fixed top-0 left-0 w-0.5 h-0.5 bg-gold/40"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: Math.cos((angle * Math.PI) / 180) * (hoverState === "interactive" ? 20 : 12),
            y: Math.sin((angle * Math.PI) / 180) * (hoverState === "interactive" ? 20 : 12),
          }}
          transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
        />
      ))}
    </div>
  );
}
