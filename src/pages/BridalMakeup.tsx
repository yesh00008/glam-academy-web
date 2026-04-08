import ServicePageLayout from "@/components/ServicePageLayout";
import gallery1 from "@/assets/gallery-1.jpg";

const items = [
  {
    name: "HD Makeup",
    price: "₹20,000",
    includes: "Eye Lashes, Savaram, Hair Products, Makeup Products, Touch-up Kit",
    description: "High-definition makeup that looks flawless in photos and videos. Perfect for the modern bride who wants a stunning, camera-ready look.",
  },
  {
    name: "Water Resistant Makeup",
    price: "₹20,000",
    includes: "Eye Lashes, Savaram, Hair Products, Makeup Products",
    description: "Cry happy tears without worry! Our water-resistant formula stays perfect through every emotional moment.",
  },
  {
    name: "Sweat Proof Makeup",
    price: "₹20,000",
    includes: "Eye Lashes, Savaram, Hair Products, Makeup Products",
    description: "Designed for outdoor and summer weddings. Your makeup stays fresh and flawless no matter the temperature.",
  },
  {
    name: "Glossy Makeup",
    price: "₹20,000",
    includes: "Eye Lashes, Savaram, Hair Products, Makeup Products",
    description: "Achieve that coveted dewy, glass-skin bridal glow with our signature glossy makeup technique.",
  },
];

const BridalMakeup = () => (
  <ServicePageLayout
    title="Bridal Makeup"
    subtitle="Your Dream Bridal Look"
    description="Make your wedding day unforgettable with our expert bridal makeup services. From classic elegance to modern glam, we craft the perfect look for your special day."
    heroImage={gallery1}
    items={items}
  />
);

export default BridalMakeup;
