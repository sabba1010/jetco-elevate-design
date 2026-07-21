import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JetCo — Free quotes, same-week appointments" },
      { name: "description", content: "Talk to a JetCo specialist about pest, HVAC, roofing, windows, flooring or handyman services. Free quotes and same-week appointments across the Southeast." },
    ],
  }),
  component: Contact,
});

const SERVICES = ["Pest Control", "HVAC", "Roofing & Gutters", "Windows", "Flooring", "Handyman", "Not sure yet"];

function Contact() {
  return (
    <SiteShell>
      <section className="container-x pt-14 md:pt-20 pb-10">
        <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Contact JetCo</span>
        <h1 className="mt-5 font-display text-6xl md:text-7xl leading-[1] text-ink max-w-4xl">
          Talk to a specialist — <em className="text-brand not-italic">not a call center.</em>
        </h1>
        <p className="mt-6 text-lg text-ink-soft max-w-2xl">
          Tell us about your project. A local JetCo lead will call within one business hour to
          schedule your free assessment.
        </p>
      </section>

      <section className="container-x pb-24 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <form className="card-soft p-8 md:p-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" placeholder="Jamie" />
            <Field label="Last name" placeholder="Rivera" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" type="email" placeholder="you@email.com" />
            <Field label="Phone" placeholder="(704) 555-0143" />
          </div>
          <Field label="Property address" placeholder="123 Main St, Charlotte, NC" />
          <label className="block">
            <div className="text-xs uppercase tracking-widest text-ink-soft mb-1.5">Service needed</div>
            <select className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand/30">
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label className="block">
            <div className="text-xs uppercase tracking-widest text-ink-soft mb-1.5">Tell us about the project</div>
            <textarea rows={5} placeholder="A few sentences about what you need..." className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand/30" />
          </label>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="btn-gold flex-1">Request my free quote <ArrowRight className="h-4 w-4" /></button>
            <a href="tel:+18005385826" className="btn-ghost"><Phone className="h-4 w-4" /> Call instead</a>
          </div>
          <p className="text-xs text-ink-soft pt-2">
            By submitting, you agree to be contacted by JetCo about your inquiry. We never sell your information.
          </p>
        </form>

        <aside className="space-y-5">
          <div className="rounded-3xl bg-ink text-cream p-8">
            <div className="text-xs uppercase tracking-widest text-cream/60">Reach us directly</div>
            <div className="mt-5 space-y-4">
              <Row icon={<Phone className="h-4 w-4" />} label="Call" value="(800) 538-5826" />
              <Row icon={<Mail className="h-4 w-4" />} label="Email" value="hello@jetcoservices.com" />
              <Row icon={<Clock className="h-4 w-4" />} label="Hours" value="Mon–Sat 7am–8pm · Emergency 24/7" />
              <Row icon={<MapPin className="h-4 w-4" />} label="Coverage" value="Charlotte · Raleigh · Charleston · Columbia · Greenville · +35 more" />
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-widest text-ink-soft">What happens next</div>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              {[
                "A local JetCo lead reviews your request within the hour.",
                "We'll call to confirm details and schedule a free assessment.",
                "You'll receive a written, itemized quote before any work begins.",
                "Financing and warranty options walked through in plain English.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5"><Check className="h-4 w-4 text-brand mt-0.5 shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-widest text-ink-soft mb-1.5">{label}</div>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand/30" />
    </label>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-gold shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-widest text-cream/50">{label}</div>
        <div className="text-cream text-[15px]">{value}</div>
      </div>
    </div>
  );
}
