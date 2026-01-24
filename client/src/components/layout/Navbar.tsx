import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, ReactNode } from "react";
// Removed react-icons import

// Using Lucide icons as they are pre-installed
import { Instagram, Linkedin, Github } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // Simple scroll spy logic could go here, for now just static links
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id.replace("#", ""));
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-8 md:px-16 bg-[rgba(15,17,26,0.7)] backdrop-blur-md border-b border-white/5"
    >
      {/* Logo */}
      <div className="font-serif text-xl md:text-2xl text-foreground font-medium tracking-wide">
        H. Akram
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="group relative text-sm font-sans text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            {item.name}
            <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
          </button>
        ))}
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex items-center space-x-6">
        <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
        <SocialLink href="https://www.linkedin.com/in/hammad-akram-3809b43a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<Linkedin size={18} />} label="LinkedIn" />
        <SocialLink href="https://github.com/hammadakram70" icon={<Github size={18} />} label="GitHub" />
      </div>

      {/* Mobile Menu Toggle (Simplified for MVP) */}
      <div className="md:hidden text-muted-foreground">
        Menu
      </div>
    </motion.nav>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="text-muted-foreground hover:text-gold hover:scale-110 transition-all duration-300 relative group"
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] bg-secondary text-secondary-foreground px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </a>
  );
}
