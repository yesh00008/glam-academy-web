import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";

const Contact = () => {
  return (
    <div className="scroll-smooth min-h-screen flex flex-col bg-cream">
      <Navbar />
      <div className="flex-grow pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="heading-display mb-4">Contact <span className="text-primary italic">Us</span></h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to begin your journey? Reach out to us for course inquiries, bookings, or consultations.
            </p>
          </div>
          <ContactSection />
          <div className="mt-16">
            <LocationSection />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;