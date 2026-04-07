import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import bridalImg from "@/assets/course-bridal.jpg";
import hdImg from "@/assets/course-hd.jpg";
import nailsImg from "@/assets/course-nails.jpg";
import skincareImg from "@/assets/course-skincare.jpg";
import hairImg from "@/assets/course-hair.jpg";
import editorialImg from "@/assets/course-editorial.jpg";

const categories = ["All", "Makeup", "Beauty", "Hair"];

const courses = [
  { title: "Bridal Makeup Mastery", category: "Makeup", duration: "3 Months", level: "Advanced", price: "₹45,000", image: bridalImg },
  { title: "HD & Airbrush Techniques", category: "Makeup", duration: "2 Months", level: "Intermediate", price: "₹35,000", image: hdImg },
  { title: "Nail Art & Design", category: "Beauty", duration: "1 Month", level: "Beginner", price: "₹15,000", image: nailsImg },
  { title: "Skincare & Aesthetics", category: "Beauty", duration: "6 Weeks", level: "All Levels", price: "₹20,000", image: skincareImg },
  { title: "Hairstyling Pro", category: "Hair", duration: "2 Months", level: "Intermediate", price: "₹30,000", image: hairImg },
  { title: "Editorial & Fashion", category: "Makeup", duration: "3 Months", level: "Advanced", price: "₹50,000", image: editorialImg },
];

function CountdownTimer() {
  const [time, setTime] = useState({ d: 5, h: 12, m: 30, s: 0 });
  useEffect(() => {
    let total = time.d * 86400 + time.h * 3600 + time.m * 60 + time.s;
    const interval = setInterval(() => {
      total--;
      if (total <= 0) { clearInterval(interval); return; }
      setTime({
        d: Math.floor(total / 86400),
        h: Math.floor((total % 86400) / 3600),
        m: Math.floor((total % 3600) / 60),
        s: total % 60,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-3 justify-center">
      {Object.entries(time).map(([k, v]) => (
        <div key={k} className="text-center">
          <div className="bg-primary text-primary-foreground rounded-lg w-14 h-14 flex items-center justify-center text-xl font-bold font-display">
            {String(v).padStart(2, "0")}
          </div>
          <span className="text-xs text-muted-foreground mt-1 block uppercase">{k === "d" ? "Days" : k === "h" ? "Hrs" : k === "m" ? "Min" : "Sec"}</span>
        </div>
      ))}
    </div>
  );
}

const CoursesSection = () => {
  const [active, setActive] = useState("All");
  const { ref, isVisible } = useScrollAnimation();
  const filtered = active === "All" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="courses" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Our Programs</p>
          <h2 className="heading-display">Master the Art of <span className="text-primary italic">Beauty</span></h2>
        </div>

        <div className="gradient-rose rounded-2xl p-6 text-center mb-12">
          <p className="text-foreground font-display text-lg font-semibold mb-3">🔥 Next Batch Starting Soon</p>
          <CountdownTimer />
        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {filtered.map((course) => (
            <div key={course.title} className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="text-cream text-sm">{course.duration} · {course.level}</p>
                  <p className="text-gold font-bold text-xl font-display">{course.price}</p>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-gold uppercase tracking-wider">{course.category}</span>
                <h3 className="font-display text-lg font-semibold mt-1 text-foreground">{course.title}</h3>
                <a href="#contact" className="mt-3 inline-block text-sm font-medium text-primary hover:text-gold transition-colors">
                  Enroll Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
