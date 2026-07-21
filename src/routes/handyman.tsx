import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Hammer, PaintBucket, DoorOpen, Lightbulb, Cog } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/hero-handyman.jpg";

export const Route = createFileRoute("/handyman")({
  head: () => ({
    meta: [
      { title: "Handyman — Trusted home repairs & installations · JetCo" },
      { name: "description", content: "Skilled handyman services from JetCo — repairs, installations, home maintenance and interior improvements. Background-checked pros. One-hour arrival windows." },
    ],
  }),
  component: () => (
    <SiteShell>
      <ServicePage
        cfg={{
          slug: "handyman",
          eyebrow: "Handyman",
          title: "The punch-list, punched.",
          lede: "Skilled, background-checked handymen for the projects that never quite get done. From a leaky faucet to a full room refresh — JetCo shows up, on time, and gets it right.",
          heroImage: img,
          heroImageAlt: "JetCo handyman completing an interior home repair",
          services: [
            { title: "Home Repairs", desc: "Drywall, doors, trim, caulking and the dozen small things you've been meaning to fix.", icon: <Wrench className="h-5 w-5" /> },
            { title: "Installations", desc: "TVs, shelves, ceiling fans, faucets, hardware — mounted straight, wired safely.", icon: <Cog className="h-5 w-5" /> },
            { title: "Interior Painting", desc: "One wall, one room, or the whole interior — with careful prep and clean lines.", icon: <PaintBucket className="h-5 w-5" /> },
            { title: "Door & Lock Work", desc: "Sticking doors, new hardware, smart locks and weatherstripping.", icon: <DoorOpen className="h-5 w-5" /> },
            { title: "Lighting & Fixtures", desc: "Swap outdated fixtures, install dimmers, add can lights — no fuss.", icon: <Lightbulb className="h-5 w-5" /> },
            { title: "Home Maintenance", desc: "Seasonal tune-up visits so small issues don't become big ones.", icon: <Hammer className="h-5 w-5" /> },
          ],
          benefits: [
            { title: "One-hour windows", desc: "Not \"between 9 and 4\" — we arrive within a 60-minute window." },
            { title: "Vetted craftsmen", desc: "Background-checked, drug-tested, and continuously trained." },
            { title: "Flat-rate pricing", desc: "Know the cost before we start. No surprise clock-watching." },
            { title: "One-year warranty", desc: "Every task backed by the JetCo workmanship guarantee." },
          ],
          faq: [
            { q: "Is there a minimum charge?", a: "Our standard service visit covers up to 2 hours of work. We're happy to knock out several small tasks in one visit — more efficient for you." },
            { q: "What kinds of projects can you handle?", a: "If you can describe it, we can usually do it — from a squeaky hinge to a full mudroom build-out. If it's outside our lane, we'll tell you honestly." },
            { q: "Do you bring your own materials?", a: "For standard hardware and materials, yes. For specialty finishes we're happy to pick up specific items or install what you've already purchased." },
            { q: "Are your techs insured?", a: "Yes — every JetCo handyman is fully insured and bonded." },
          ],
        }}
      />
    </SiteShell>
  ),
});
