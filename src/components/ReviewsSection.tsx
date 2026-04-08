import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const stickyNotes = [
  { name: "Priya M.", text: "Best decision of my life! The bridal course completely transformed my career.", rating: 5, color: "bg-yellow-100", rotation: "-3deg" },
  { name: "Neha S.", text: "Amazing faculty and hands-on training. Loved every moment!", rating: 5, color: "bg-pink-100", rotation: "2deg" },
  { name: "Ananya K.", text: "The nail art course was so creative. I started my own business after!", rating: 4, color: "bg-green-100", rotation: "-1deg" },
  { name: "Riya P.", text: "Aria ma'am is the best mentor. Her eye for detail is incredible.", rating: 5, color: "bg-purple-100", rotation: "3deg" },
  { name: "Divya T.", text: "World-class facilities and incredible placement support.", rating: 5, color: "bg-orange-100", rotation: "-2deg" },
  { name: "Kavita R.", text: "I went from zero knowledge to doing celebrity makeup. Thank you GA!", rating: 5, color: "bg-blue-100", rotation: "1deg" },
  { name: "Sanya M.", text: "The skincare module was eye-opening. Learned so many professional techniques.", rating: 5, color: "bg-yellow-100", rotation: "-2deg" },
  { name: "Roshni D.", text: "Great atmosphere and supportive peers. Highly recommend to everyone!", rating: 4, color: "bg-pink-100", rotation: "1deg" },
  { name: "Ishita B.", text: "The editorial makeup sessions were a dream come true. So inspiring!", rating: 5, color: "bg-green-100", rotation: "-3deg" },
];

const chatMessages = [
  { name: "Sneha", text: "Just completed my HD makeup course! Can't believe how much I've learned 😍", side: "left" as const },
  { name: "Academy", text: "So proud of your journey Sneha! Your graduation look was stunning ✨", side: "right" as const },
  { name: "Meera", text: "The bridal workshop last weekend was AMAZING! When's the next one?", side: "left" as const },
  { name: "Academy", text: "Next batch starts in 2 weeks! DM us to reserve your spot 💄", side: "right" as const },
  { name: "Pooja", text: "Got my first freelance booking after just 2 months of training! 🎉", side: "left" as const },
  { name: "Karan", text: "Hi! Do you provide kits along with the professional course?", side: "left" as const },
  { name: "Academy", text: "Yes Karan! All professional courses include a comprehensive starter kit 🎒", side: "right" as const },
  { name: "Anjali", text: "Can't wait for my class tomorrow! We're doing airbrushing right?", side: "left" as const },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Testimonials</p>
          <h2 className="heading-display">What Our <span className="text-primary italic">Students</span> Say</h2>
        </div>

        {/* Sticky Notes */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {stickyNotes.map((note, i) => (
            <div
              key={note.name}
              className={`sticky-note ${note.color} p-6`}
              style={{
                "--rotation": note.rotation,
                animationDelay: `${i * 0.1}s`,
              } as React.CSSProperties}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: note.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed italic">"{note.text}"</p>
              <p className="mt-3 font-display font-semibold text-sm text-foreground">— {note.name}</p>
            </div>
          ))}
        </div>

        {/* Chat Bubbles */}
        <div className="max-w-lg mx-auto">
          <h3 className="font-display text-xl font-semibold text-center mb-8 text-foreground">Real Conversations 💬</h3>
          <div className="space-y-4">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"} ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.6 + i * 0.15}s` }}
              >
                <div className={msg.side === "left" ? "chat-bubble-left" : "chat-bubble-right"}>
                  <p className="text-xs font-semibold mb-1 opacity-70">{msg.name}</p>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
