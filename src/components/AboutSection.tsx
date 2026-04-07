import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import founderImg from "@/assets/founder.jpg";

const stats = [
  { label: "Students Trained", value: 500, suffix: "+" },
  { label: "Years of Excellence", value: 8, suffix: "" },
  { label: "Makeup Courses", value: 20, suffix: "+" },
  { label: "Industry Awards", value: 15, suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-gold">{count}{suffix}</div>
    </div>
  );
}

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative">
            <img
              src={founderImg}
              alt="Academy Founder"
              className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]"
              loading="lazy"
              width={800}
              height={1000}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gold/20 blur-2xl" />
          </div>
          <div>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Our Story</p>
            <h2 className="heading-display mb-6">Where Passion Meets <span className="text-primary italic">Perfection</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2016, Glamour Academy was born from a simple belief — that every artist deserves world-class training. What started as a small studio has grown into one of India's most sought-after beauty academies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our founder, Aria Sharma, a celebrity makeup artist with over 15 years of experience, brings her vision of excellence to every student who walks through our doors.
            </p>
            <blockquote className="border-l-4 border-gold pl-4 italic text-foreground font-display text-lg">
              "Beauty is not about perfection — it's about expression."
            </blockquote>
            <p className="mt-2 text-gold font-display text-sm">— Aria Sharma, Founder</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
