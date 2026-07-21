import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="container-x py-20 grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink text-base font-semibold">
              J
            </span>
            <div className="leading-none">
              <div className="font-display text-2xl">JetCo</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-cream/60">
                Home &amp; Commercial
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-cream/70 max-w-sm">
            One trusted team for every service your home or business needs. Licensed,
            insured, and backed by the JetCo Guarantee.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 hover:bg-cream/10"
                aria-label="Social link"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-cream/50 mb-4">Services</div>
          <ul className="space-y-2.5 text-sm text-cream/85">
            {[
              ["/pest", "Pest Control"],
              ["/hvac", "HVAC"],
              ["/roofing", "Roofing & Gutters"],
              ["/windows", "Windows"],
              ["/flooring", "Flooring"],
              ["/handyman", "Handyman"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-cream">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-cream/50 mb-4">Company</div>
          <ul className="space-y-2.5 text-sm text-cream/85">
            <li><Link to="/" className="hover:text-cream">About JetCo</Link></li>
            <li><Link to="/" className="hover:text-cream">Careers</Link></li>
            <li><Link to="/" className="hover:text-cream">Financing</Link></li>
            <li><Link to="/" className="hover:text-cream">Warranty</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-cream/50 mb-4">Contact</div>
          <ul className="space-y-3 text-sm text-cream/85">
            <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-gold" /> (800) 538-5826</li>
            <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-gold" /> hello@jetcoservices.com</li>
            <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Serving 40+ cities across the Southeast</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} JetCo Home &amp; Commercial Services. Licensed &amp; insured.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Terms</a>
            <a href="#" className="hover:text-cream">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
