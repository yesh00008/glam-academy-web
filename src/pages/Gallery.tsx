import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import courseBridal from "@/assets/course-bridal.jpg";
import courseEditorial from "@/assets/course-editorial.jpg";
import courseHair from "@/assets/course-hair.jpg";
import courseHd from "@/assets/course-hd.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  courseBridal,
  courseEditorial,
  courseHair,
  courseHd,
  hero1,
  hero2,
];

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="scroll-smooth min-h-screen flex flex-col bg-cream">
      <Navbar />
      <div className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Our Work</p>
            <h1 className="heading-display mb-4">Client <span className="text-primary italic">Gallery</span></h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A glimpse into the stunning transformations and beautiful moments we've created for our clients.
            </p>
          </div>

          <div
            ref={ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {galleryImages.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-elegant group relative aspect-[4/5]">
                <img
                  src={src}
                  alt={`Client work ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;