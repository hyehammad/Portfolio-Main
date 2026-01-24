import { motion } from "framer-motion";

export function Contact() {
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
          <h2 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter">Contact <span className="italic text-primary">Me</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-noir/40 border border-white/10 p-12 md:p-20 backdrop-blur-xl group"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          {/* Contact Options - Email Me and GitHub */}
          <div className="space-y-8">
            {/* Email Me Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl border border-white/10 bg-white/5 p-8 w-full transition-all duration-300 hover:border-primary/50 hover:bg-white/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <i className="fas fa-envelope text-2xl text-primary"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white font-mono">Email Me</h3>
                    <p className="text-sm text-muted-foreground font-sans">hamad.akram70@gmail.com</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => {
                    // Fixed: Added complete mailto link with proper encoding
                    const subject = encodeURIComponent("Portfolio Inquiry");
                    const body = encodeURIComponent("Hello Hamad,\n\nI came across your portfolio and wanted to get in touch.");
                    const mailtoLink = `mailto:hamad.akram70@gmail.com?subject=${subject}&body=${body}`;
                    window.open(mailtoLink, '_blank');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap font-sans border border-primary/30"
                >
                  <i className="fas fa-paper-plane"></i>
                  Send Email
                </motion.button>
              </div>
            </motion.div>

            {/* GitHub Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 p-8 w-full transition-all duration-300 hover:border-primary/50 hover:bg-white/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <i className="fab fa-github text-2xl text-primary"></i>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white font-mono">GitHub Profile</h3>
                    <a 
                      href="https://github.com/hammadakram70/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors break-all font-sans"
                    >
                      https://github.com/hammadakram70/
                    </a>
                  </div>
                </div>
                <motion.a
                  href="https://github.com/hammadakram70/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap font-sans border border-primary/30"
                >
                  <i className="fab fa-github"></i>
                  Visit GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Location, Email, Call - Moved outside the form box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-primary mb-2 font-mono">Location</span>
            <p className="text-sm font-sans text-muted-foreground">Wapda Town Lahore, Punjab</p>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-primary mb-2 font-mono">Email</span>
            <p className="text-sm font-sans text-muted-foreground">hamad.akram70@gmail.com</p>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-primary mb-2 font-mono">Call</span>
            <p className="text-sm font-sans text-muted-foreground">+92 311 6251731</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
