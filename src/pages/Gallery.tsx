import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Placeholder images for now, user will replace them later.
const galleryImages = [
  "https://images.unsplash.com/photo-1516975080661-46b008d24b61?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512496015851-a1fbaf698941?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop",
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