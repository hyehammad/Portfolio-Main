import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          
          {/* Info */}
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-8">
              Let's create something <br/><span className="text-gold italic">Timeless.</span>
            </h2>
            
            <div className="space-y-8 mt-16">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Location</h4>
                <p className="text-xl text-foreground font-light">Lahore, Punjab, Pakistan</p>
              </div>
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Contact</h4>
                <p className="text-xl text-foreground font-light hover:text-gold transition-colors cursor-pointer">
                  hamad.akram70@gmail.com
                </p>
                <p className="text-xl text-foreground font-light mt-1">
                  +92 311 6251731
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Socials</h4>
                <div className="flex gap-4">
                  {/* Social Links would go here */}
                  <span className="text-foreground hover:text-gold cursor-pointer transition-colors">LinkedIn</span>
                  <span className="text-foreground hover:text-gold cursor-pointer transition-colors">Instagram</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/2 p-8 md:p-12 rounded-sm border border-white/5 backdrop-blur-sm">
            <form className="space-y-8">
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-gold transition-colors">Name</label>
                <Input className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold transition-colors text-lg py-6" placeholder="John Doe" />
              </div>
              
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-gold transition-colors">Email</label>
                <Input className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold transition-colors text-lg py-6" placeholder="john@example.com" />
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-gold transition-colors">Message</label>
                <Textarea className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold transition-colors text-lg min-h-[100px] resize-none" placeholder="Tell me about your project..." />
              </div>

              <Button className="w-full h-14 bg-foreground text-background hover:bg-gold hover:text-charcoal transition-all duration-500 font-sans tracking-wide text-sm uppercase">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
