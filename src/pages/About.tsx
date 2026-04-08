import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";

const About = () => {
  return (
    <div className="scroll-smooth min-h-screen flex flex-col bg-cream">
      <Navbar />
      <div className="flex-grow pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Discover Glamour Academy</p>
            <h1 className="heading-display mb-4">About <span className="text-primary italic">Us</span></h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Learn about our journey, our founders, and the expert team that makes world-class training possible.
            </p>
          </div>
          <AboutSection />
          <TeamSection />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;