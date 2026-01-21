import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="py-40 relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Background Page Texture */}
      <div className="absolute inset-0 z-0 bg-[#f5f0e6] opacity-95">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
        <div className="absolute top-12 right-12 font-serif italic text-noir/10 text-xl">18--</div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-serif text-noir/20 text-sm tracking-widest uppercase">CXXIV</div>
      </div>

      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-noir mb-4">The Casket of <span className="italic text-primary">Correspondence</span></h2>
          <p className="text-noir/60 font-serif italic text-lg uppercase tracking-widest">Page 124 — Professional Ties</p>
        </motion.div>

        {/* Vintage Box */}
        <div className="relative perspective-1000">
          <motion.div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            animate={{
              rotateX: isOpen ? -10 : 0,
              y: isOpen ? -10 : 0,
            }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="w-[320px] h-[180px] bg-[#3d2b1f] rounded-sm relative shadow-2xl border-2 border-noir/20 cursor-pointer group"
          >
            {/* Box Lid */}
            <motion.div
              animate={{ rotateX: isOpen ? -110 : 0 }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-0 bg-[#4a3426] border-b border-white/5 origin-top z-20 flex items-center justify-center"
            >
              <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Box Interior / Form Reveal */}
            <div className="absolute inset-0 bg-[#8b0000] p-6 overflow-hidden">
               <AnimatePresence>
                 {isOpen && (
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0 }}
                     className="w-full h-full flex flex-col items-center justify-center text-ivory text-center"
                   >
                     <p className="font-serif italic text-sm mb-4">Uncovering the secret correspondence method...</p>
                     <div className="w-12 h-[1px] bg-gold/50" />
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Floating Form (Separate from box for better usability) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12 w-full max-w-xl p-12 bg-white/5 backdrop-blur-xl border border-noir/5 shadow-2xl rounded-none"
            >
              <form className="space-y-8">
                <div className="group border-b border-noir/10">
                  <label className="block text-[10px] uppercase tracking-[0.4em] text-noir/40 mb-2">Subject Name</label>
                  <Input className="bg-transparent border-0 rounded-none px-0 text-noir font-serif text-lg focus-visible:ring-0" placeholder="Sign your name..." />
                </div>
                <div className="group border-b border-noir/10">
                  <label className="block text-[10px] uppercase tracking-[0.4em] text-noir/40 mb-2">Return Address</label>
                  <Input className="bg-transparent border-0 rounded-none px-0 text-noir font-serif text-lg focus-visible:ring-0" placeholder="Electronic mail..." />
                </div>
                <div className="group border-b border-noir/10">
                  <label className="block text-[10px] uppercase tracking-[0.4em] text-noir/40 mb-2">Message Payload</label>
                  <Textarea className="bg-transparent border-0 rounded-none px-0 text-noir font-serif text-lg focus-visible:ring-0 min-h-[100px] resize-none" placeholder="Write your correspondence..." />
                </div>
                <button className="luxury-button w-full !bg-noir !text-ivory hover:!bg-primary hover:!text-noir transition-all duration-500">
                  Apply Wax Seal & Send
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
