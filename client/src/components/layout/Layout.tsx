import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  backgroundColor?: string;
}

export function Layout({ children, backgroundColor = "var(--charcoal)" }: LayoutProps) {
  return (
    <motion.div 
      className="min-h-screen w-full relative transition-colors duration-1000 ease-in-out"
      animate={{ backgroundColor }}
      style={{ backgroundColor }}
    >
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
