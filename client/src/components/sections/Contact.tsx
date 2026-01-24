import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

   return (
    <div className="space-y-10 text-left">
      {/* Email Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group"
      >
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-primary/50 hover:bg-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Email Me</h3>
              <p className="text-white/70 max-w-md">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
              <p className="text-primary font-medium">hamad.akram70@gmail.com</p>
            </div>
            <motion.button
              onClick={() => {
                const mailtoLink = `mailto:hamad.akram70@gmail.com?subject=Portfolio Inquiry&body=Hello Hamad,`;
                window.location.href = mailtoLink;
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-button min-w-[160px]"
            >
              <i className="fas fa-envelope mr-2"></i>
              Send Email
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* GitHub Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group"
      >
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-primary/50 hover:bg-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="fab fa-github text-3xl text-white"></i>
                <h3 className="text-xl font-semibold text-white">GitHub Profile</h3>
              </div>
              <p className="text-white/70 max-w-md">
                Check out my projects, contributions, and code repositories
              </p>
              <a 
                href="https://github.com/hammadakram70/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                https://github.com/hammadakram70/
              </a>
            </div>
            <motion.a
              href="https://github.com/hammadakram70/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-button min-w-[160px]"
            >
              <i className="fab fa-github mr-2"></i>
              Visit GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Optional:  can add more contact options here in the same format */}
    </div>
  );
}
