import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="py-40 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: 19th Century Botanical Manuscript */}
      <div className="absolute inset-0 z-0 bg-[#f5f0e6] overflow-hidden">
        {/* Paper Texture & Aging */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
        
        {/* Chain Lines & Foxing */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_0%,transparent_98%,#000_100%)] bg-[size:40px_100%]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-40 w-4 h-4 rounded-full bg-[#8b4513] blur-xl opacity-20" />
          <div className="absolute bottom-40 right-60 w-8 h-8 rounded-full bg-[#5d4037] blur-2xl opacity-10" />
        </div>

        {/* Botanical Illustrations (Faded) */}
        <div className="absolute top-20 right-20 w-96 h-96 opacity-10 grayscale pointer-events-none">
          <img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1000&auto=format&fit=crop" alt="Botanical" className="w-full h-full object-contain" />
        </div>

        {/* Archival Details */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-serif text-[#5d4037] opacity-40 text-xs tracking-[0.3em]">
          Folio CXXIV
        </div>
        <div className="absolute top-12 left-12 border-2 border-[#8b0000]/20 rounded-full w-20 h-20 flex items-center justify-center text-[#8b0000]/20 font-serif text-[8px] rotate-[-15deg] uppercase tracking-tighter text-center leading-none">
          Cabinet des<br/>Estampes
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#5d4037] mb-4 block">Correspondence</span>
          <h2 className="text-5xl md:text-7xl font-serif text-[#2c1810]">Get in <span className="italic text-[#8b4513]">Touch</span></h2>
        </motion.div>

        {/* Victorian Writing Slope Box */}
        <motion.div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          animate={{
            y: isOpen ? -20 : 0,
            scale: isOpen ? 1.02 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
          className="relative w-full max-w-2xl aspect-[3/2] cursor-pointer"
        >
          {/* Closed Box State */}
          <div className="absolute inset-0 bg-[#3d2b1f] rounded-sm shadow-2xl border-4 border-[#2c1810] overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-60" />
            <div className="absolute top-0 left-0 w-full h-2 bg-white/5" />
            
            {/* Brass Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#c5a059] opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#c5a059] opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#c5a059] opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#c5a059] opacity-40 group-hover:opacity-100 transition-opacity" />
            
            {/* Lock */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-12 bg-[#c5a059] rounded-t-lg shadow-lg">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-black/40 rounded-full" />
            </div>

            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center flex-col gap-4"
                >
                  <span className="font-serif text-[#c5a059]/40 tracking-[0.2em] uppercase text-xs">Alistair Finch — 1842</span>
                  <div className="w-12 h-[1px] bg-[#c5a059]/20" />
                  <motion.div 
                    animate={{ opacity: [0.2, 0.5, 0.2] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-[10px] font-sans text-[#c5a059]/40 uppercase tracking-[0.4em]"
                  >
                    Hover to Unlock
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Opened Content (Materializing) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                style={{ transformOrigin: "top" }}
                className="absolute inset-0 z-20 bg-[#8b0000] border-4 border-[#2c1810] shadow-2xl p-10 flex flex-col"
              >
                {/* Crimson Velvet Interior */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen-2.png')] opacity-20 mix-blend-overlay" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-mono text-[#f2f2f2]/40 text-[10px] uppercase tracking-[0.3em]">Imperial Mail // Correspondence</span>
                    <div className="w-4 h-4 bg-[#c5a059] rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
                  </div>

                  <form className="space-y-6 flex-1">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-widest text-[#f2f2f2]/60">Sender Name</label>
                        <input className="w-full bg-black/20 border-b border-[#c5a059]/30 px-0 py-2 text-ivory focus:border-[#c5a059] outline-none transition-colors font-serif italic" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-widest text-[#f2f2f2]/60">Email Address</label>
                        <input className="w-full bg-black/20 border-b border-[#c5a059]/30 px-0 py-2 text-ivory focus:border-[#c5a059] outline-none transition-colors font-serif italic" />
                      </div>
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      <label className="block text-[10px] uppercase tracking-widest text-[#f2f2f2]/60">Message Transcript</label>
                      <textarea className="w-full h-full bg-black/20 border-b border-[#c5a059]/30 px-0 py-2 text-ivory focus:border-[#c5a059] outline-none transition-colors font-serif italic resize-none" rows={4} />
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-[#c5a059] text-noir font-sans font-bold uppercase tracking-[0.3em] text-xs shadow-xl"
                    >
                      Seal & Send
                    </motion.button>
                  </form>
                </div>

                {/* Golden Corner Accents (Inside) */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#c5a059]/40" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#c5a059]/40" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#c5a059]/40" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#c5a059]/40" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Page Grain Overlay (Contact Specific) */}
      <div className="absolute inset-0 pointer-events-none z-[1] mix-blend-multiply opacity-10 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
    </section>
  );
}
