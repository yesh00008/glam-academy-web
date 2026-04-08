import { useRef, useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const videos = [
  { name: "Bridal Glam Look", course: "Bridal Makeup", thumb: gallery5, video: "/videos/video-1.mp4" },
  { name: "Traditional Bride", course: "Bridal Mastery", thumb: gallery6, video: "/videos/video-2.mp4" },
  { name: "Engagement Look", course: "HD Makeup", thumb: gallery1, video: "/videos/video-3.mp4" },
  { name: "Reception Glam", course: "Party Makeup", thumb: gallery3, video: "/videos/video-4.mp4" },
];

const VideoTestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  const handlePlay = (idx: number) => {
    if (playingIdx !== null && videoRefs.current[playingIdx]) {
      videoRefs.current[playingIdx]!.pause();
    }
    setPlayingIdx(idx);
    setTimeout(() => {
      videoRefs.current[idx]?.play();
    }, 100);
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
            {videos.map((v, idx) => (
              <div key={v.name} className="snap-center shrink-0 w-64 md:w-72">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer" onClick={() => handlePlay(idx)}>
                  {playingIdx === idx ? (
                    <video
                      ref={(el) => { videoRefs.current[idx] = el; }}
                      src={v.video}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      playsInline
                      preload="none"
                    />
                  ) : (
                    <>
                      <img
                        src={v.thumb}
                        alt={v.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width={288}
                        height={384}
                      />
                      <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play size={24} className="text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </>
                  )}
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
