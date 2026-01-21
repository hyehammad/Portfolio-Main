import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full relative">
      {/* Morphing Background Layer */}
      <div className="morphing-bg" />
      
      {/* Matte Texture Layer */}
      <div className="matte-texture" />

      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
