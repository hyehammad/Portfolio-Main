import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="py-40 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: 19th Century Botanical Manuscript */}
      <div className="absolute inset-0 z-0 bg-[#f5f0e6] overflow-hidden">
        {/* Handmade Paper Texture with Chain/Wire Lines */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)`, 
                      backgroundSize: '40px 100%, 100% 4px' }} />
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
        
        {/* Foxing & Water Stains */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-[#8b4513]/10 blur-3xl" />
          <div className="absolute bottom-[10%] right-[15%] w-64 h-64 rounded-full bg-[#5d4037]/15 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-[#5d4037]/10 blur-2xl" />
        </div>

        {/* Faded Botanical Illustrations & Diagrams */}
        <div className="absolute top-20 right-[10%] w-80 h-80 opacity-[0.08] grayscale pointer-events-none rotate-12">
          <img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1000&auto=format&fit=crop" alt="Botanical Print" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-40 left-[15%] w-40 h-40 opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="#5d4037" strokeWidth="0.5">
            <circle cx="50" cy="50" r="40" />
            <path d="M50 10 L50 90 M10 50 L90 50" />
            <path d="M20 20 L80 80 M80 20 L20 80" />
          </svg>
        </div>

        {/* Archival Details & Annotations */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-serif text-[#5d4037] opacity-40 text-xs tracking-[0.4em]">
          Folio CXXIV
        </div>
        <div className="absolute top-16 left-16 border-[1px] border-[#8b0000]/20 rounded-full w-24 h-24 flex items-center justify-center text-[#8b0000]/25 font-serif text-[10px] rotate-[-12deg] uppercase tracking-tighter text-center leading-tight">
          Cabinet des<br/>Estampes<br/>1842
        </div>
        
        {/* Corner Damage */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f5f0e6] origin-bottom-left rotate-[-15deg] shadow-[-10px_10px_20px_rgba(0,0,0,0.1)]" 
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />
      </div>

      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-[#5d4037] mb-4 block">Archive Correspondence</span>
          <h2 className="text-6xl md:text-8xl font-serif text-[#2c1810] tracking-tighter">Imperial <span className="italic text-[#8b4513] opacity-80">Desk</span></h2>
        </motion.div>

        {/* Victorian Writing Slope Box - The Mechanical Marvel */}
        <div className="perspective-[2000px] w-full max-w-3xl">
          <motion.div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            animate={{
              y: isOpen ? -30 : 0,
              rotateX: isOpen ? 5 : 0,
            }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            className="relative w-full aspect-[16/10] cursor-pointer group"
          >
            {/* Box Body (Walnut with Patina) */}
            <div className="absolute inset-0 bg-[#3d2b1f] rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[1px] border-[#1a110a] overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-80 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40" />
              
              {/* Brass Accents & Corner Protectors */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#c5a059]/40 rounded-tl-sm group-hover:border-[#c5a059]/80 transition-colors duration-500" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#c5a059]/40 rounded-tr-sm group-hover:border-[#c5a059]/80 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#c5a059]/40 rounded-bl-sm group-hover:border-[#c5a059]/80 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#c5a059]/40 rounded-br-sm group-hover:border-[#c5a059]/80 transition-colors duration-500" />
              
              {/* Lock Mechanism Plate */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-14 bg-[#c5a059]/30 backdrop-blur-sm border border-[#c5a059]/40 rounded-t-xl group-hover:bg-[#c5a059]/60 transition-all duration-500">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-2 h-5 bg-black/60 rounded-full" />
                <motion.div 
                  animate={isOpen ? { scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] } : {}}
                  className="absolute inset-0 bg-[#c5a059]/20 blur-md rounded-full opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Sleeping State Labels */}
              <AnimatePresence>
                {!isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  >
                    <span className="font-serif text-[#c5a059]/30 tracking-[0.4em] uppercase text-[10px] mb-4 italic">Dr. Alistair Finch — 1842</span>
                    <div className="w-16 h-[1px] bg-[#c5a059]/10" />
                    <div className="mt-6 font-sans text-[8px] uppercase tracking-[0.8em] text-[#c5a059]/20 animate-pulse">Touch to Unlock Archive</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interior Reveal Content (Clockwork Precision) */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ rotateX: -90, opacity: 0, y: 50 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  exit={{ rotateX: -90, opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                  style={{ transformOrigin: "bottom" }}
                  className="absolute inset-0 z-20 bg-[#6b0000] border-[1px] border-[#1a110a] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                >
                  {/* Crimson Velvet & Gold Tooling */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/crushed-velvet.png')] opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-2 border border-[#c5a059]/20 pointer-events-none" />
                  
                  <div className="relative z-10 h-full p-12 flex flex-col overflow-hidden">
                    <div className="flex justify-between items-start mb-10">
                      <div className="space-y-1">
                        <span className="block font-mono text-[#f2f2f2]/40 text-[9px] uppercase tracking-[0.4em]">Dispatch // No. 842</span>
                        <div className="w-8 h-[1px] bg-[#c5a059]/30" />
                      </div>
                      <div className="w-6 h-6 bg-[#c5a059]/80 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.4)]">
                        <div className="w-4 h-4 border border-noir/20 rounded-full" />
                      </div>
                    </div>

                    <form className="space-y-8 flex-1">
                      <div className="grid grid-cols-2 gap-10">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                          className="space-y-3"
                        >
                          <label className="block text-[9px] uppercase tracking-[0.3em] text-[#f2f2f2]/50 font-sans">Full Appellation</label>
                          <input className="w-full bg-transparent border-b border-[#c5a059]/20 pb-2 text-ivory focus:border-[#c5a059]/60 outline-none transition-all font-serif italic text-lg" placeholder="Honorable Guest" />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                          className="space-y-3"
                        >
                          <label className="block text-[9px] uppercase tracking-[0.3em] text-[#f2f2f2]/50 font-sans">Return Address</label>
                          <input className="w-full bg-transparent border-b border-[#c5a059]/20 pb-2 text-ivory focus:border-[#c5a059]/60 outline-none transition-all font-serif italic text-lg" placeholder="correspondence@domain.com" />
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="space-y-3 flex-1"
                      >
                        <label className="block text-[9px] uppercase tracking-[0.3em] text-[#f2f2f2]/50 font-sans">Manuscript Content</label>
                        <textarea className="w-full h-32 bg-transparent border border-[#c5a059]/10 p-4 text-ivory focus:border-[#c5a059]/40 outline-none transition-all font-serif italic text-lg resize-none" placeholder="Your message transcribed here..." />
                      </motion.div>

                      <motion.button 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.02, backgroundColor: "#d4af37" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-[#c5a059]/90 text-noir font-sans font-bold uppercase tracking-[0.4em] text-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      >
                        Affix Seal & Dispatch
                      </motion.button>
                    </form>
                  </div>

                  {/* Mechanical Details */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#c5a059]/30" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#c5a059]/30" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#c5a059]/30" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#c5a059]/30" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ambient Volumetric Lighting (Glow from box edges) */}
            <motion.div 
              animate={isOpen ? { opacity: 0.4, scale: 1.1 } : { opacity: 0, scale: 1 }}
              className="absolute inset-[-100px] bg-gradient-radial from-[#c5a059]/20 to-transparent pointer-events-none z-0"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Golden Hour Atmospheric Dust */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pollen.png')] opacity-20" />
      </div>
    </section>
  );
}
