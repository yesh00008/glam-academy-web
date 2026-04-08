import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import InstagramSection from "@/components/InstagramSection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import LocationSection from "@/components/LocationSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <VideoTestimonialsSection />
    <ReviewsSection />
    <InstagramSection />
    <TeamSection />
    <FAQSection />
    <LocationSection />
    <NewsletterSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
