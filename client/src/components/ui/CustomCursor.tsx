import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [angle, setAngle] = useState(0);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [hoverState, setHoverState] = useState<"default" | "interactive">("default");

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
      if (target.closest("button, a, [role='button'], .project-slit, input, textarea")) {
        setHoverState("interactive");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Refined Directional Glow */}
      <motion.div
        className="fixed top-0 left-0 h-32 origin-left"
        style={{
          x: cursorX,
          y: cursorY,
          rotate: angle,
          width: 100,
          background: "linear-gradient(90deg, rgba(197, 160, 89, 0.15) 0%, transparent 100%)",
          maskImage: "radial-gradient(ellipse at left, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at left, black, transparent 80%)",
        }}
        animate={{
          opacity: hoverState === "interactive" ? 0.6 : 0.3,
          scaleY: hoverState === "interactive" ? 1.2 : 1,
        }}
      />

      {/* Main Cursor Point */}
      <motion.div
        className="fixed top-0 left-0"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 w-8 h-8 -ml-4 -mt-4 border border-gold/20 rounded-full"
          animate={{
            scale: hoverState === "interactive" ? 1.5 : 0.8,
            opacity: hoverState === "interactive" ? 0.4 : 0.2,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        />

        {/* Core Dot */}
        <motion.div
          className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          animate={{
            scale: hoverState === "interactive" ? 0.5 : 1,
          }}
        />
      </motion.div>

      {/* Smooth Trail */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-gold/30 rounded-full blur-[1px]"
        style={{
          x: useSpring(mouseX, { damping: 45, stiffness: 450 }),
          y: useSpring(mouseY, { damping: 45, stiffness: 450 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
