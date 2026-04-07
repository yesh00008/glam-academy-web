import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Beauty academy slide ${i + 1}`}
            className="w-full h-full object-cover scale-105"
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-cream tracking-tight leading-tight animate-fade-up">
          Transform. Create. <span className="text-gold italic">Inspire.</span>
        </h1>
        <p className="mt-6 text-cream/80 text-lg md:text-xl max-w-2xl font-body animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Where artistry meets education — master the craft of beauty with India's premier makeup academy.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href="#courses" className="btn-gold text-base">Explore Courses</a>
          <a href="#contact" className="btn-primary-glow text-base border border-cream/30">Book Free Consultation</a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === i ? "bg-gold w-8" : "bg-cream/40"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
