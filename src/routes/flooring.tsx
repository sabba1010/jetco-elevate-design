import { createFileRoute } from "@tanstack/react-router";
import { Layers, Grid3x3, Waves, Trees, Sparkles, Ruler } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/hero-flooring.jpg";

export const Route = createFileRoute("/flooring")({
  head: () => ({
    meta: [
      { title: "Flooring — Hardwood, vinyl, tile & more · JetCo" },
      { name: "description", content: "Design-led flooring installations from JetCo. Hardwood, luxury vinyl, laminate and tile — expertly installed with a lifetime workmanship warranty." },
    ],
  }),
  component: () => (
    <SiteShell>
      <ServicePage
        cfg={{
          slug: "flooring",
          eyebrow: "Flooring",
          title: "Floors worth walking on.",
          lede: "From wide-plank hardwoods to designer tile, JetCo's flooring specialists deliver installations you'll be proud of for decades — with a lifetime workmanship guarantee.",
          heroImage: img,
          heroImageAlt: "Luxury hardwood flooring in a bright open-concept home",
          services: [
            { title: "Hardwood Flooring", desc: "Solid and engineered planks in oak, walnut, hickory and maple — sanded, stained, sealed.", icon: <Trees className="h-5 w-5" /> },
            { title: "Luxury Vinyl", desc: "Waterproof LVP that looks and feels like real wood — perfect for kitchens and baths.", icon: <Layers className="h-5 w-5" /> },
            { title: "Laminate", desc: "Ultra-durable finishes over a premium core, installed with precision seams.", icon: <Ruler className="h-5 w-5" /> },
            { title: "Tile & Stone", desc: "Porcelain, ceramic and natural stone — set by experienced tile masters.", icon: <Grid3x3 className="h-5 w-5" /> },
            { title: "Refinishing", desc: "Bring existing hardwoods back to life with dust-contained sanding and new finish.", icon: <Sparkles className="h-5 w-5" /> },
            { title: "Waterproof Systems", desc: "Kitchens, baths and basements deserve floors engineered to handle real life.", icon: <Waves className="h-5 w-5" /> },
          ],
          benefits: [
            { title: "In-home samples", desc: "See real samples in your space, next to your walls and cabinets, before you decide." },
            { title: "Furniture handled", desc: "We move it, we protect it, we put it back. All included." },
            { title: "Lifetime workmanship", desc: "Installation backed for as long as you own your home." },
            { title: "Design guidance", desc: "Our project leads help you nail the right species, plank width and finish." },
          ],
          faq: [
            { q: "How long does installation take?", a: "Typical whole-floor projects run 3–5 days depending on size and material. Refinishing takes 3–4 days including cure time." },
            { q: "Can I stay in my home during install?", a: "Yes — we work room-by-room and use dust-containment systems for refinishing projects." },
            { q: "Do you move furniture?", a: "Absolutely. Furniture removal and reinstallation is included on all full-room projects." },
            { q: "Do you offer financing?", a: "Yes — 0% intro APR options are available on qualifying projects." },
          ],
        }}
      />
    </SiteShell>
  ),
});
