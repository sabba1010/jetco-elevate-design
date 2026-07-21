import { createFileRoute } from "@tanstack/react-router";
import { Bug, Home, Building2, Leaf, ShieldCheck, Rat } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/hero-pest.jpg";

export const Route = createFileRoute("/pest")({
  head: () => ({
    meta: [
      { title: "Pest Control — Safe, targeted treatments · JetCo" },
      { name: "description", content: "Residential and commercial pest control from JetCo. Safe treatments, guaranteed results, same-week service across the Carolinas." },
    ],
  }),
  component: () => (
    <SiteShell>
      <ServicePage
        cfg={{
          slug: "pest",
          eyebrow: "Pest Control",
          title: "Pests handled. Family untouched.",
          lede: "JetCo's certified pest technicians use targeted, low-impact treatments to protect your home or business — with quarterly plans that keep problems from ever coming back.",
          heroImage: img,
          heroImageAlt: "JetCo pest control technician inspecting a home exterior",
          services: [
            { title: "Home Pest Plans", desc: "Quarterly perimeter treatments that stop ants, roaches, spiders and rodents before they get in.", icon: <Home className="h-5 w-5" /> },
            { title: "Commercial IPM", desc: "Integrated pest management for restaurants, offices and multifamily — with full documentation.", icon: <Building2 className="h-5 w-5" /> },
            { title: "Termite Protection", desc: "Sentricon® baiting systems and liquid treatments with 20-year renewable warranties.", icon: <ShieldCheck className="h-5 w-5" /> },
            { title: "Mosquito & Tick", desc: "Seasonal yard treatments that make outdoor spaces livable again — pet and pollinator safe.", icon: <Leaf className="h-5 w-5" /> },
            { title: "Rodent Exclusion", desc: "Inspection, removal, and sealing every access point so mice and rats stay out for good.", icon: <Rat className="h-5 w-5" /> },
            { title: "Bed Bug Treatment", desc: "Heat and chemical protocols proven to eliminate infestations in a single visit.", icon: <Bug className="h-5 w-5" /> },
          ],
          benefits: [
            { title: "Family & pet safe", desc: "Low-toxicity, EPA-approved products applied by trained professionals." },
            { title: "Guaranteed results", desc: "See pests between visits? We come back at no charge, same week." },
            { title: "Transparent pricing", desc: "Flat quarterly rates. No door-to-door upsells, ever." },
            { title: "Certified techs", desc: "Every JetCo pest pro is state-licensed and continuously trained." },
          ],
          faq: [
            { q: "Are your treatments safe for kids and pets?", a: "Yes. Our standard treatments are EPA-approved, low-toxicity formulations. Once dry (typically 30 minutes), treated areas are safe for children and pets." },
            { q: "How quickly will pests be gone?", a: "Most customers see dramatic reduction within 24–72 hours. For persistent infestations we include free follow-ups until you're pest-free." },
            { q: "Do I need to be home for service?", a: "For exterior treatments, no. For interior visits we'll coordinate a convenient window and text on the way." },
            { q: "Do you offer month-to-month plans?", a: "Our quarterly plans have no long-term contract. Cancel or pause anytime." },
          ],
        }}
      />
    </SiteShell>
  ),
});
