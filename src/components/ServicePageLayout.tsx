import { ArrowLeft, Check, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface ServiceItem {
  name: string;
  price: string;
  includes: string;
  description?: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  items: ServiceItem[];
  accentColor?: string;
}

const ServicePageLayout = ({ title, subtitle, description, heroImage, items }: ServicePageLayoutProps) => {
  return (
    <div className="scroll-smooth">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">{subtitle}</p>
          <h1 className="heading-display text-4xl md:text-6xl mb-4">{title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="mx-auto text-gold mb-3" size={28} />
            <h2 className="heading-display text-2xl md:text-4xl">Our Packages</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={item.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="gradient-rose p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground">{item.name}</h3>
                  <div className="mt-3">
                    <span className="font-display text-3xl font-bold text-primary">{item.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  )}

                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-medium text-gold uppercase tracking-wider">What's Included</p>
                    {item.includes.split(", ").map((inc) => (
                      <div key={inc} className="flex items-start gap-2">
                        <Check size={14} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{inc}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/919440496063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-glow w-full text-center text-sm flex items-center justify-center gap-2"
                  >
                    <Phone size={14} /> Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="heading-display text-2xl md:text-4xl mb-10">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💎", title: "Premium Products", desc: "Only top-tier, branded makeup products used" },
              { icon: "🎨", title: "Expert Artists", desc: "Trained professionals with 10+ years experience" },
              { icon: "✨", title: "Flawless Finish", desc: "Long-lasting, camera-ready results guaranteed" },
              { icon: "💖", title: "Personalized", desc: "Customized looks tailored to your style & occasion" },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-background shadow-elegant text-center group hover:-translate-y-1 transition-transform duration-300">
                <span className="text-3xl block mb-3">{f.icon}</span>
                <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center gradient-rose rounded-3xl p-10 md:p-16">
          <h2 className="heading-display text-2xl md:text-4xl mb-4">Ready to Look Your Best?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Book your appointment today and let our expert artists create the perfect look for your special day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919440496063" target="_blank" rel="noopener noreferrer" className="btn-primary-glow text-sm">
              Book on WhatsApp
            </a>
            <Link to="/#contact" className="btn-gold text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePageLayout;
