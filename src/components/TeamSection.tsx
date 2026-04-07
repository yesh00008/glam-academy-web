import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import founderImg from "@/assets/founder.jpg";
import editorialImg from "@/assets/course-editorial.jpg";
import hairImg from "@/assets/course-hair.jpg";

const team = [
  { name: "Aria Sharma", role: "Founder & Lead Artist", image: founderImg, bio: "15+ years in celebrity makeup" },
  { name: "Meera Patel", role: "Senior Hair Stylist", image: hairImg, bio: "Bollywood & fashion week specialist" },
  { name: "Zara Khan", role: "Nail Art Expert", image: editorialImg, bio: "International certification in nail design" },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Our Experts</p>
          <h2 className="heading-display">Meet the <span className="text-primary italic">Team</span></h2>
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {team.map((member) => (
            <div key={member.name} className="group relative rounded-2xl overflow-hidden shadow-elegant aspect-[3/4] cursor-pointer">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-xl font-bold text-cream">{member.name}</h3>
                <p className="text-gold text-sm font-medium">{member.role}</p>
                <p className="text-cream/70 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
