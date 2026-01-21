import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="py-40 relative min-h-screen flex items-center justify-center overflow-hidden px-8">
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary mb-4 block">Get In Touch</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter">Contact <span className="italic text-primary">Us</span></h2>
        </motion.div>

        <motion.div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="relative bg-noir/40 border border-white/10 p-12 md:p-20 backdrop-blur-xl group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <form className="space-y-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-mono">Full Name</label>
                <input className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary transition-colors outline-none font-sans" placeholder="Enter your name..." />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-mono">Email Address</label>
                <input className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary transition-colors outline-none font-sans" placeholder="name@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-primary font-mono">Message</label>
              <textarea className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-primary transition-colors outline-none font-sans resize-none" rows={4} placeholder="How can I help you?" />
            </div>

            <div className="pt-8 flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="luxury-button w-full md:w-auto"
              >
                Send Message
              </motion.button>
            </div>
          </form>

          <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-primary mb-2">Location</span>
              <p className="text-sm font-sans text-muted-foreground">Wapda Town Lahore</p>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-primary mb-2">Email</span>
              <p className="text-sm font-sans text-muted-foreground">hamad.akram70@gmail.com</p>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-widest text-primary mb-2">Call</span>
              <p className="text-sm font-sans text-muted-foreground">+92 311 6251731</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
