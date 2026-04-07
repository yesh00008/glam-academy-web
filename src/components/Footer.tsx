import { Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="footer-dark py-16 px-4 sm:px-6 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold text-cream mb-2">
            Glamour<span className="text-gold">Academy</span>
          </h3>
          <p className="text-cream/50 text-sm leading-relaxed">
            Crafting beauty professionals since 2016. Your journey to artistry starts here.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Courses", "Reviews", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-cream/60 text-sm hover:text-gold transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Courses</h4>
          <div className="space-y-2">
            {["Bridal Makeup", "HD Airbrush", "Nail Art", "Hairstyling", "Skincare"].map((c) => (
              <a key={c} href="#courses" className="block text-cream/60 text-sm hover:text-gold transition-colors">
                {c}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Contact</h4>
          <p className="text-cream/60 text-sm mb-1">+91 98765 43210</p>
          <p className="text-cream/60 text-sm mb-4">hello@glamouracademy.com</p>
          <div className="flex gap-3">
            {[Instagram, Youtube, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Icon size={18} className="text-cream" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 pt-6 text-center">
        <p className="text-cream/40 text-sm">© 2026 Glamour Academy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
