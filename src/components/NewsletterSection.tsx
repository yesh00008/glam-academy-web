import { useState } from "react";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="section-padding gradient-mauve">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="mx-auto mb-4 text-gold" size={36} />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-3">
          Stay Glam ✨
        </h2>
        <p className="text-cream/70 mb-8">
          Get beauty tips, exclusive offers & early access to new courses delivered to your inbox.
        </p>
        {submitted ? (
          <p className="text-gold font-display text-lg font-semibold animate-fade-up">Thank you for subscribing! 💄</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-gold text-sm whitespace-nowrap">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
