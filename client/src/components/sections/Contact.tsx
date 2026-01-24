import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form className="space-y-10 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest text-primary">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[9px] uppercase tracking-widest text-primary">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[9px] uppercase tracking-widest text-primary">Subject</label>
              <input 
                type="text" 
                id="subject"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[9px] uppercase tracking-widest text-primary">Your Message</label>
              <textarea 
                rows={6}
                id="message"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <div className="pt-8 flex justify-center">
              <motion.button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  const name = document.getElementById('name').value;
                  const email = document.getElementById('email').value;
                  const subject = document.getElementById('subject').value;
                  const message = document.getElementById('message').value;
                  
                  const mailtoLink = `mailto:hamad.akram70@gmail.com?subject=Portfolio Main - ${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  window.location.href = mailtoLink;
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="luxury-button w-full md:w-auto"
              >
                Send Message
              </motion.button>
            </div>
          </form>
}
