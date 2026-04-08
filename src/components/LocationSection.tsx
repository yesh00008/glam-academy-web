import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const LocationSection = () => (
  <section className="section-padding bg-cream">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Visit Us</p>
        <h2 className="heading-display">Find Our <span className="text-primary italic">Academy</span></h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden shadow-elegant h-80 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 300 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Academy Location"
          />
        </div>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground">Address</h4>
              <p className="text-muted-foreground text-sm">Studio 301, Rose Tower, Linking Road, Bandra West, Mumbai — 400050</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground">Phone</h4>
              <p className="text-muted-foreground text-sm">+91 94404 96063</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground">Working Hours</h4>
              <p className="text-muted-foreground text-sm">Mon – Sat: 10:00 AM – 7:00 PM</p>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow text-sm"
            >
              Get Directions
            </a>
            <a
              href="https://wa.me/919440496063"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-green-500 text-green-600 font-medium text-sm hover:bg-green-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.031 0C5.385 0 0 5.383 0 12.029c0 2.124.553 4.195 1.604 6.012L.495 24l6.115-1.604A11.972 11.972 0 0 0 12.03 24c6.646 0 12.03-5.383 12.03-12.03S18.677 0 12.031 0zm0 21.996a9.953 9.953 0 0 1-5.083-1.391l-.364-.216-3.774.989.999-3.68-.236-.376A9.95 9.95 0 0 1 2.003 12.03C2.003 6.497 6.499 2 12.032 2c2.684 0 5.205 1.045 7.102 2.943a10.021 10.021 0 0 1 2.934 7.086c-.001 5.534-4.498 10.03-10.036 10.03zm5.492-7.502c-.301-.151-1.782-.879-2.059-.979-.276-.1-.478-.151-.679.151-.202.302-.78 1.002-.956 1.205-.176.202-.353.226-.654.076-1.503-.757-2.617-1.442-3.619-2.909-.234-.343.23-.318.82-1.498.075-.152.038-.284-.038-.435-.075-.151-.679-1.636-.93-2.241-.243-.591-.49-.51-.679-.519-.176-.008-.378-.008-.579-.008s-.528.075-.804.376c-.276.301-1.055 1.03-1.055 2.511s1.08 2.909 1.231 3.111c.151.202 2.122 3.235 5.137 4.536 1.954.843 2.7.925 3.659.782.721-.108 2.059-.841 2.348-1.653.289-.813.289-1.51.202-1.653-.089-.151-.303-.227-.604-.378z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
