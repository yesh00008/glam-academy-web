import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What are the eligibility requirements?", a: "No prior experience is needed! Our courses cater to beginners, intermediates, and advanced artists. You just need a passion for beauty." },
  { q: "Do you provide certification?", a: "Yes! All our courses come with an industry-recognized certification upon completion. We also provide portfolio building support." },
  { q: "What is the fee structure?", a: "Course fees range from ₹15,000 to ₹50,000 depending on the program. We offer flexible EMI options and early-bird discounts." },
  { q: "Do you provide placement assistance?", a: "Absolutely! We have tie-ups with leading salons, studios, and bridal agencies. Our placement rate is over 85%." },
  { q: "What products and tools are used in training?", a: "We use international professional-grade products from MAC, Bobbi Brown, NARS, and more. A starter kit is included with select courses." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">FAQ</p>
          <h2 className="heading-display">Common <span className="text-primary italic">Questions</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 pb-5 px-5" : "max-h-0"}`}
              >
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
