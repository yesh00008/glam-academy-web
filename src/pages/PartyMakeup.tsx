import ServicePageLayout from "@/components/ServicePageLayout";
import gallery2 from "@/assets/gallery-2.jpg";

const items = [
  {
    name: "Reception Makeup",
    price: "₹15,000",
    includes: "Eye Lashes, Savaram, Hair Styling, Makeup Products, Touch-up Kit",
    description: "Stunning reception-ready glam that transitions beautifully from day to night. Stand out as the star of the evening.",
  },
  {
    name: "Sangeeth Makeup",
    price: "₹12,000",
    includes: "Eye Lashes, Savaram, Hair Styling, Makeup Products",
    description: "Vibrant, dance-proof makeup perfect for the Sangeeth celebrations. Look gorgeous while you dance the night away.",
  },
  {
    name: "Cocktail Party Makeup",
    price: "₹10,000",
    includes: "Eye Lashes, Savaram, Hair Styling, Makeup Products",
    description: "Chic and sophisticated cocktail party looks. From smoky eyes to bold lips, we create the perfect party vibe.",
  },
];

const PartyMakeup = () => (
  <ServicePageLayout
    title="Party Makeup"
    subtitle="Glamour for Every Celebration"
    description="From receptions to sangeet nights, look stunning at every wedding celebration with our expert party makeup services."
    heroImage={gallery2}
    items={items}
  />
);

export default PartyMakeup;
