import ServicePageLayout from "@/components/ServicePageLayout";
import gallery4 from "@/assets/gallery-4.jpg";

const items = [
  {
    name: "Premium Hair Brush Makeup",
    price: "₹30,000",
    includes: "Eye Lashes, Savaram, Complete Hair Styling, All Premium Products, Touch-up Kit, Draping Assistance, Pre-bridal Consultation",
    description: "Our most luxurious bridal package. Includes a pre-bridal consultation, premium international products, expert hair brush technique, and complete styling assistance for a truly royal look.",
  },
];

const BridalPremium = () => (
  <ServicePageLayout
    title="Bridal Premium"
    subtitle="The Ultimate Luxury Experience"
    description="Indulge in our premium bridal experience with the finest products, expert techniques, and personalized attention for a truly regal look."
    heroImage={gallery4}
    items={items}
  />
);

export default BridalPremium;
