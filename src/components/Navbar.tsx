import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const categories = [
  {
    title: "Bridal Makeup",
    path: "/bridal-makeup",
    items: [
      { name: "HD Makeup", price: "₹20,000" },
      { name: "Hair Brush Makeup", price: "₹30,000" },
      { name: "Water Resistant Makeup", price: "₹20,000" },
      { name: "Sweat Proof Makeup", price: "₹20,000" },
      { name: "Glossy Makeup", price: "₹20,000" },
    ],
  },
  {
    title: "Party Makeup",
    path: "/party-makeup",
    items: [
      { name: "Reception", price: "₹15,000" },
      { name: "Sangeeth", price: "₹12,000" },
      { name: "Cocktail", price: "₹10,000" },
    ],
  },
  {
    title: "Simple Makeup",
    path: "/simple-makeup",
    items: [
      { name: "Bride Maids", price: "₹8,000" },
    ],
  },
  {
    title: "Bridal Premium",
    path: "/bridal-premium",
    items: [
      { name: "Hair Brush Makeup", price: "₹30,000" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<number | null>(null);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [mobileActiveCat, setMobileActiveCat] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatOpen(false);
        setActiveCat(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const NavAnchor = ({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) => {
    if (href.startsWith("/#") && isHome) {
      return <a href={href.replace("/", "")} className={className} onClick={onClick}>{children}</a>;
    }
    return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="font-display text-2xl font-bold text-primary tracking-tight">
          Glamour<span className="text-gold">Academy</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 2).map((l) => (
            <NavAnchor key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              {l.label}
            </NavAnchor>
          ))}

          {/* Categories Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => { setCatOpen(!catOpen); setActiveCat(null); }}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Categories <ChevronDown size={14} className={`transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`} />
            </button>

            {catOpen && (
              <div className="absolute top-full left-0 mt-3 bg-popover border border-border rounded-xl shadow-xl min-w-[240px] animate-fade-up overflow-hidden">
                {categories.map((cat, i) => (
                  <div
                    key={cat.title}
                    className="relative"
                    onMouseEnter={() => setActiveCat(i)}
                  >
                    <Link
                      to={cat.path}
                      onClick={() => setCatOpen(false)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors duration-150 ${activeCat === i ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}`}
                    >
                      {cat.title}
                      <ChevronRight size={14} className="text-muted-foreground" />
                    </Link>

                    {activeCat === i && (
                      <div className="absolute left-full top-0 ml-1 bg-popover border border-border rounded-xl shadow-xl min-w-[280px] p-4 animate-fade-up">
                        <h4 className="font-display text-base font-semibold text-foreground mb-3">{cat.title}</h4>
                        <div className="space-y-2">
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              to={cat.path}
                              onClick={() => setCatOpen(false)}
                              className="block p-3 rounded-lg bg-muted/50 hover:bg-primary/5 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-sm text-foreground">{item.name}</span>
                                <span className="font-display font-bold text-primary text-sm">{item.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link
                          to={cat.path}
                          onClick={() => setCatOpen(false)}
                          className="mt-3 block text-center text-xs font-medium text-primary hover:text-gold transition-colors"
                        >
                          View All Details →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((l) => (
            <NavAnchor key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              {l.label}
            </NavAnchor>
          ))}
          <NavAnchor href="/contact" className="btn-primary-glow text-sm">Book Consultation</NavAnchor>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 animate-fade-up max-h-[80vh] overflow-y-auto">
          {navLinks.slice(0, 2).map((l) => (
            <NavAnchor key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border/50">
              {l.label}
            </NavAnchor>
          ))}

          <button
            onClick={() => setMobileCatOpen(!mobileCatOpen)}
            className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground border-b border-border/50"
          >
            Categories
            <ChevronDown size={16} className={`transition-transform duration-200 ${mobileCatOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileCatOpen && (
            <div className="pl-3 border-b border-border/50">
              {categories.map((cat, i) => (
                <div key={cat.title}>
                  <button
                    onClick={() => setMobileActiveCat(mobileActiveCat === i ? null : i)}
                    className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-muted-foreground"
                  >
                    {cat.title}
                    <ChevronRight size={14} className={`transition-transform duration-200 ${mobileActiveCat === i ? "rotate-90" : ""}`} />
                  </button>
                  {mobileActiveCat === i && (
                    <div className="pl-3 pb-2 space-y-2">
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          to={cat.path}
                          onClick={() => setOpen(false)}
                          className="block p-2.5 rounded-lg bg-muted/50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-xs text-foreground">{item.name}</span>
                            <span className="font-display font-bold text-primary text-xs">{item.price}</span>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to={cat.path}
                        onClick={() => setOpen(false)}
                        className="block text-center text-xs font-medium text-primary py-1"
                      >
                        View All Details →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {navLinks.slice(2).map((l) => (
            <NavAnchor key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-foreground border-b border-border/50">
              {l.label}
            </NavAnchor>
          ))}
          <NavAnchor href="/contact" onClick={() => setOpen(false)} className="btn-primary-glow text-sm mt-4 block text-center">
            Book Consultation
          </NavAnchor>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
