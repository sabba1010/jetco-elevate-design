import { createFileRoute } from "@tanstack/react-router";
import { Square, Sun, Snowflake, Volume2, Palette, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/hero-windows.jpg";

export const Route = createFileRoute("/windows")({
  head: () => ({
    meta: [
      { title: "Windows — Energy-efficient replacement · JetCo" },
      { name: "description", content: "Premium replacement windows engineered for beauty, energy savings and comfort. Lifetime warranty. Free in-home consultation from JetCo." },
    ],
  }),
  component: () => (
    <SiteShell>
      <ServicePage
        cfg={{
          slug: "windows",
          eyebrow: "Windows",
          title: "Windows that pay you back.",
          lede: "Premium replacement windows engineered for beauty, comfort and long-term energy savings — professionally installed by JetCo craftsmen with a lifetime workmanship warranty.",
          heroImage: img,
          heroImageAlt: "Bright modern living room with floor-to-ceiling replacement windows",
          services: [
            { title: "Double-hung Windows", desc: "Classic style with modern tilt-in sashes for effortless cleaning.", icon: <Square className="h-5 w-5" /> },
            { title: "Casement & Awning", desc: "Full-view designs that seal tight and open wide for maximum airflow.", icon: <Sun className="h-5 w-5" /> },
            { title: "Bay & Bow Windows", desc: "Architectural statements that add square footage and natural light.", icon: <Palette className="h-5 w-5" /> },
            { title: "Sliding Windows", desc: "Contemporary lines with smooth, ball-bearing operation.", icon: <Snowflake className="h-5 w-5" /> },
            { title: "Soundproof Options", desc: "Laminated glass packages that quiet even the busiest streets.", icon: <Volume2 className="h-5 w-5" /> },
            { title: "Impact-Rated Glass", desc: "Storm-tested performance for coastal and severe-weather zones.", icon: <ShieldCheck className="h-5 w-5" /> },
          ],
          benefits: [
            { title: "Up to 30% savings", desc: "ENERGY STAR® rated glass packages measurably reduce heating and cooling bills." },
            { title: "Lifetime warranty", desc: "Frame, glass, hardware and labor — fully covered, transferable at sale." },
            { title: "Custom made", desc: "Every window built to your exact opening. No filler strips. No compromises." },
            { title: "White-glove install", desc: "Interior trim protected, cleanup included, old windows hauled away." },
          ],
          faq: [
            { q: "How long does a full window replacement take?", a: "Most homes are completed in 1–2 days. Individual windows install in about 45 minutes each." },
            { q: "Will my walls be damaged?", a: "No. Our craftsmen use full-frame installation techniques that preserve interior trim and drywall." },
            { q: "What's the payback period?", a: "Most homeowners see full energy-savings payback in 5–8 years, plus immediate comfort improvements." },
            { q: "Do you offer financing?", a: "Yes — 0% intro APR options and terms up to 120 months make whole-home projects manageable." },
          ],
        }}
      />
    </SiteShell>
  ),
});
