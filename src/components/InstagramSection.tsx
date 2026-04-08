import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const posts = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const InstagramSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <Instagram className="mx-auto mb-4 text-primary" size={36} />
        <h2 className="heading-display mb-2">Follow Our <span className="text-primary italic">Artistry</span></h2>
        <p className="text-muted-foreground mb-2">@swapnamakeupartists</p>
        <a
          href="https://instagram.com/swapnamakeupartists"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-primary-glow text-sm mb-10"
        >
          Follow Us
        </a>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {posts.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/swapnamakeupartists"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={src}
                alt={`Swapna Makeup Artists - Look ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
