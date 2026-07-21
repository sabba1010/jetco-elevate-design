import { createFileRoute } from "@tanstack/react-router";
import { Wind, Thermometer, Flame, Fan, Gauge, Wrench } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/hero-hvac.jpg";

export const Route = createFileRoute("/hvac")({
  head: () => ({
    meta: [
      { title: "HVAC — Heating, cooling & indoor air quality · JetCo" },
      { name: "description", content: "AC installation, furnace repair, heating, cooling and indoor air quality from NATE-certified HVAC technicians. Same-week service, honest pricing." },
    ],
  }),
  component: () => (
    <SiteShell>
      <ServicePage
        cfg={{
          slug: "hvac",
          eyebrow: "HVAC",
          title: "Comfort, engineered.",
          lede: "From emergency repairs to full high-efficiency installs, JetCo's NATE-certified HVAC team delivers the comfort — and the utility savings — your home deserves.",
          heroImage: img,
          heroImageAlt: "HVAC technician servicing a residential AC unit",
          services: [
            { title: "AC Installation", desc: "High-efficiency systems from Trane, Carrier and Lennox — sized right, installed right.", icon: <Wind className="h-5 w-5" /> },
            { title: "Furnace Repair", desc: "24/7 diagnostic and repair for gas, electric, and dual-fuel systems.", icon: <Flame className="h-5 w-5" /> },
            { title: "Heat Pumps", desc: "Modern, ultra-efficient heating and cooling in a single system.", icon: <Thermometer className="h-5 w-5" /> },
            { title: "Indoor Air Quality", desc: "Whole-home filtration, humidifiers and UV purification that make air noticeably cleaner.", icon: <Fan className="h-5 w-5" /> },
            { title: "Smart Thermostats", desc: "Ecobee and Nest installs paired with system optimization for maximum savings.", icon: <Gauge className="h-5 w-5" /> },
            { title: "Maintenance Plans", desc: "Twice-yearly tune-ups that extend equipment life and lock in priority service.", icon: <Wrench className="h-5 w-5" /> },
          ],
          benefits: [
            { title: "NATE-certified techs", desc: "The industry's gold standard for HVAC competence — on every truck." },
            { title: "10-year warranties", desc: "Parts and labor backed for a decade on qualifying installations." },
            { title: "Financing available", desc: "0% intro APR options make replacement affordable now." },
            { title: "Emergency service", desc: "24/7 dispatch when heat or cooling goes down." },
          ],
          faq: [
            { q: "How do I know if I need repair or replacement?", a: "If your system is 12+ years old, needs frequent repairs, or repair costs exceed 40% of replacement, we'll walk you through the honest math — with zero pressure." },
            { q: "How long does a full install take?", a: "Most single-system replacements are completed in one day. We arrive with everything needed and leave your home spotless." },
            { q: "Do you handle commercial HVAC?", a: "Yes — JetCo services light commercial buildings, offices, restaurants and multifamily properties." },
            { q: "What financing do you offer?", a: "0% intro APR for qualified buyers, plus terms up to 120 months through our lending partners." },
          ],
        }}
      />
    </SiteShell>
  ),
});
