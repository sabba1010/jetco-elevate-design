import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/pest", label: "Pest Control" },
  { to: "/hvac", label: "HVAC" },
  { to: "/roofing", label: "Roofing & Gutters" },
  { to: "/windows", label: "Windows" },
  { to: "/flooring", label: "Flooring" },
  { to: "/handyman", label: "Handyman" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-background/85 border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3 gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream text-sm font-semibold">
            J
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl text-ink whitespace-nowrap">JetCo</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-soft whitespace-nowrap">
              Home &amp; Commercial
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0.5 shrink-0">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-2.5 py-2 text-sm text-ink-soft rounded-full hover:text-ink hover:bg-muted transition-colors whitespace-nowrap data-[status=active]:text-ink data-[status=active]:bg-muted"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a href="tel:+18005385826" className="btn-ghost text-sm !py-2 !px-3.5 whitespace-nowrap">
            <Phone className="h-4 w-4 shrink-0" />
            <span>(800) JET-CO26</span>
          </a>
          <Link to="/contact" className="btn-gold text-sm !py-2 !px-3.5 whitespace-nowrap">
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden grid place-items-center h-10 w-10 rounded-full border border-border shrink-0"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-ink hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3">
              <a href="tel:+18005385826" className="btn-ghost flex-1">
                <Phone className="h-4 w-4" /> (800) JET-CO26
              </a>
              <Link to="/contact" className="btn-gold flex-1" onClick={() => setOpen(false)}>
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
