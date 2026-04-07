import { useRef, useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import bridalImg from "@/assets/course-bridal.jpg";
import editorialImg from "@/assets/course-editorial.jpg";
import hairImg from "@/assets/course-hair.jpg";
import hero2 from "@/assets/hero-2.jpg";

const videos = [
  { name: "Priya's Transformation", course: "Bridal Mastery", thumb: bridalImg },
  { name: "Neha's Journey", course: "HD Makeup", thumb: editorialImg },
  { name: "Ananya's Story", course: "Hairstyling Pro", thumb: hairImg },
  { name: "Riya's Graduation", course: "Editorial", thumb: hero2 },
];

const VideoTestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || !scrollRef.current) return;
    const el = scrollRef.current;
    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 280, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="section-padding gradient-rose">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Student Stories</p>
          <h2 className="heading-display">Watch Their <span className="text-primary italic">Transformations</span></h2>
        </div>
        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-background transition-colors">
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-10 pb-4 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {videos.map((v) => (
              <div key={v.name} className="snap-center shrink-0 w-64 md:w-72">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer">
                  <img src={v.thumb} alt={v.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-display font-semibold text-foreground">{v.name}</p>
                <p className="text-sm text-muted-foreground">{v.course}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-background transition-colors">
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
