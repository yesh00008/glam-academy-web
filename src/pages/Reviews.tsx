import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReviewsSection from "@/components/ReviewsSection";

const Reviews = () => {
  return (
    <div className="scroll-smooth min-h-screen flex flex-col bg-cream">
      <Navbar />
      <div className="flex-grow pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Student Feedback</p>
            <h1 className="heading-display mb-4">Reviews & <span className="text-primary italic">Testimonials</span></h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hear directly from our students about their transformative journey at Glamour Academy.
            </p>
          </div>
          {/* We reuse the existing ReviewsSection for the content, but could easily add more detailed reviews here later */}
          <ReviewsSection />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;