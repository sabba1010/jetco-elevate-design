import { createFileRoute } from "@tanstack/react-router";
import { Home, Wrench, Cloud, Layers, Droplets, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/hero-roofing.jpg";

export const Route = createFileRoute("/roofing")({
  head: () => ({
    meta: [
      { title: "Roofing & Gutters — Replacement, repair & storm restoration · JetCo" },
      { name: "description", content: "GAF Master Elite roofing, seamless gutters, and storm restoration. Financing available. Lifetime workmanship warranty from JetCo." },
    ],
  }),
  component: () => (
    <SiteShell>
      <ServicePage
        cfg={{
          slug: "roofing",
          eyebrow: "Roofing & Gutters",
          title: "A roof over your head, built to outlast.",
          lede: "JetCo is GAF Master Elite certified — the top 2% of roofers in North America. From full replacements to seamless gutters and storm restoration, we deliver work that stands up to decades of weather.",
          heroImage: img,
          heroImageAlt: "JetCo roofing crew installing new shingles",
          services: [
            { title: "Roof Replacement", desc: "Architectural shingle, metal, and synthetic slate systems from top manufacturers.", icon: <Home className="h-5 w-5" /> },
            { title: "Roof Repair", desc: "Leak diagnosis, flashing, and targeted repairs — done right the first time.", icon: <Wrench className="h-5 w-5" /> },
            { title: "Storm Restoration", desc: "Full insurance claim support for hail, wind and impact damage.", icon: <Cloud className="h-5 w-5" /> },
            { title: "Seamless Gutters", desc: "Custom on-site fabrication in aluminum and copper — no leaky seams.", icon: <Droplets className="h-5 w-5" /> },
            { title: "Gutter Guards", desc: "Micro-mesh protection that eliminates the twice-yearly ladder chore.", icon: <Layers className="h-5 w-5" /> },
            { title: "Roof Inspections", desc: "Free 21-point inspection with drone imagery and a written report.", icon: <ShieldCheck className="h-5 w-5" /> },
          ],
          benefits: [
            { title: "GAF Master Elite", desc: "Certification held by the top 2% of North American roofers." },
            { title: "50-year warranty", desc: "Golden Pledge coverage on qualifying GAF systems, transferable at sale." },
            { title: "Insurance experts", desc: "We handle adjusters, documentation and claim negotiation on your behalf." },
            { title: "Clean & fast", desc: "Most replacements complete in 1–2 days. Magnet sweep every job." },
          ],
          faq: [
            { q: "How long will my roof last?", a: "Architectural asphalt shingles typically last 25–30 years. Standing seam metal and synthetic slate systems can last 50+ years." },
            { q: "Will you help with my insurance claim?", a: "Absolutely. Our storm team meets your adjuster on-site, provides documentation, and negotiates so you get what you're owed." },
            { q: "Can you install during winter?", a: "Yes — with proper temperature-rated materials and techniques. We install year-round in the Carolinas." },
            { q: "Do you offer financing?", a: "Yes. 0% intro APR options available, plus terms up to 120 months on qualifying projects." },
          ],
        }}
      />
    </SiteShell>
  ),
});
