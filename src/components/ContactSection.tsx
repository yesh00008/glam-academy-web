import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const courseOptions = [
  "Bridal Makeup Mastery",
  "HD & Airbrush Techniques",
  "Nail Art & Design",
  "Skincare & Aesthetics",
  "Hairstyling Pro",
  "Editorial & Fashion",
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="heading-display">Start Your <span className="text-primary italic">Journey</span></h2>
        </div>
        <div className={`bg-card rounded-2xl p-6 md:p-10 shadow-elegant transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {submitted ? (
            <div className="text-center py-12 animate-fade-up">
              <p className="text-4xl mb-4">💄</p>
              <h3 className="font-display text-2xl font-bold text-foreground">Thank You!</h3>
              <p className="text-muted-foreground mt-2">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input required type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input required type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Course Interested In</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                  <option value="">Select a course</option>
                  {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Batch</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                  <option value="">Select timing</option>
                  <option>Morning (10 AM – 1 PM)</option>
                  <option>Afternoon (2 PM – 5 PM)</option>
                  <option>Weekend (Sat–Sun)</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your goals..." className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none" />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-glow w-full text-base disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : "Send Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
