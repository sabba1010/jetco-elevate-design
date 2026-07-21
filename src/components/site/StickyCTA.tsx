import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 inset-x-0 z-40 pointer-events-none md:bottom-6">
      <div className="container-x flex justify-end">
        <div className="pointer-events-auto flex gap-2 rounded-full bg-ink/95 backdrop-blur p-1.5 shadow-hero border border-white/10">
          <a href="tel:+18005385826" className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-cream hover:bg-white/10">
            <Phone className="h-4 w-4 text-gold" /> Call
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-ink hover:brightness-105">
            Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
