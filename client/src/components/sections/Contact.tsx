import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDirectorCut, setIsDirectorCut] = useState(false);

  return (
    <section id="contact" className="py-40 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: Studio Editing Wall */}
      <div className="absolute inset-0 z-0 bg-[#1a1c25]">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1c25] via-transparent to-[#d4af37]/20 opacity-40" />
        
        {/* Film Flicker & Grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
        <motion.div 
          animate={{ opacity: [0.01, 0.03, 0.01] }}
          transition={{ repeat: Infinity, duration: 0.1 }}
          className="absolute inset-0 bg-white pointer-events-none" 
        />

        {/* Storyboard Thumbnails (Faded) */}
        <div className="absolute top-20 left-10 w-64 h-auto opacity-10 space-y-4 pointer-events-none">
          {[1, 2, 3].map(i => (
            <div key={i} className="aspect-video bg-white/20 border border-white/10" />
          ))}
          <span className="text-[8px] font-mono text-white/40 block">SCENE_STORYBOARD</span>
        </div>

        {/* Spotlight Pools */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#d4af37] mb-4 block">The Cinematic Epilogue</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter">Initiate <span className="italic text-[#d4af37]">Protocol</span></h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto font-serif italic text-lg leading-relaxed">
            "Every great software project begins with a conversation. Whether you're looking to architect a new system, optimize existing code, or explore the intersection of technology and creativity—let's write the first line of our collaboration."
          </p>
        </motion.div>

        {/* Vintage Film Reel Cabinet */}
        <motion.div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          animate={{
            y: isOpen ? -20 : 0,
            scale: isOpen ? 1.05 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="relative w-full max-w-3xl aspect-video cursor-pointer"
        >
          {/* Cabinet Body */}
          <div className="absolute inset-0 bg-[#2a2d3a] border-2 border-white/10 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20" />
            
            {/* Modular Reel Slots */}
            <div className="absolute inset-0 p-12 grid grid-cols-4 gap-8 opacity-40">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-full border-4 border-white/5 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full border border-white/5" />
                </div>
              ))}
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 to-transparent pointer-events-none"
                />
              )}
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-10">
              <AnimatePresence mode="wait">
                {!isOpen && (
                  <motion.div
                    key="closed-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.4em]">KEM-SYSTEM // MOD-01</span>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                      <span className="text-white text-sm font-sans uppercase tracking-widest">Awaiting Transmission</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Opening Mechanism & Form Projection */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="editing-interface"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                className="absolute inset-0 z-20 bg-black/80 backdrop-blur-xl border border-white/20 p-12 flex flex-col justify-center"
              >
                <div className="mb-8 flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest">Project: COLLABORATION_PROTOCOL</span>
                    <h3 className="text-2xl font-serif text-white italic">The Secure Slate</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-mono text-white/40 block uppercase">Roll: CS</span>
                    <span className="text-[8px] font-mono text-white/40 block uppercase">Take: BS</span>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#d4af37]/60">Your Identity</label>
                      <input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#d4af37] transition-colors outline-none font-sans" placeholder="Enter Designation..." />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#d4af37]/60">Secure Channel</label>
                      <input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#d4af37] transition-colors outline-none font-sans" placeholder="Enter Email..." />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-[#d4af37]/60">Communication Protocol</label>
                    <textarea className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-[#d4af37] transition-colors outline-none font-sans resize-none" rows={3} placeholder="Transmit initial conditions..." />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-[8px] font-mono text-white/60 uppercase">REC ● LIVE</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05, backgroundColor: "#d4af37", color: "#000" }}
                      className="px-8 py-3 border border-[#d4af37] text-[#d4af37] text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-all"
                    >
                      ENCRYPT & TRANSMIT →
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scrubber Timeline */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="w-1/4 h-full bg-[#d4af37]/40" 
        />
      </div>
    </section>
  );
}
