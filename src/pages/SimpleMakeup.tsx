import ServicePageLayout from "@/components/ServicePageLayout";
import gallery3 from "@/assets/gallery-3.jpg";

const items = [
  {
    name: "Bride Maids Makeup",
    price: "₹8,000",
    includes: "Eye Lashes, Savaram, Hair Styling, Makeup Products",
    description: "Elegant and complementary looks for the bride's squad. Beautiful makeup that enhances natural beauty without stealing the bride's spotlight.",
  },
];

const SimpleMakeup = () => (
  <ServicePageLayout
    title="Simple Makeup"
    subtitle="Elegant & Effortless"
    description="Beautiful, natural-looking makeup for bridesmaids and guests. Enhance your natural beauty with our expert touch."
    heroImage={gallery3}
    items={items}
  />
);

export default SimpleMakeup;
