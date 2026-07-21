import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { FAQ } from "./FAQ";
import type { ReactNode } from "react";

export interface ServiceConfig {
  slug: string;
  eyebrow: string;
  title: string;
  lede: string;
  heroImage: string;
  heroImageAlt: string;
  services: { title: string; desc: string; icon: ReactNode }[];
  benefits: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  areas?: string[];
  processTitle?: string;
  process?: { title: string; desc: string }[];
}

const DEFAULT_PROCESS = [
  { title: "Book a free visit", desc: "Pick a time online or call. No pressure, no obligation." },
  { title: "On-site assessment", desc: "A senior JetCo tech inspects and explains your options." },
  { title: "Transparent quote", desc: "Fixed, itemized pricing — no surprises, ever." },
  { title: "Workmanship guaranteed", desc: "Every project is backed by the JetCo Guarantee." },
];

export function ServicePage({ cfg }: { cfg: ServiceConfig }) {
  const process = cfg.process ?? DEFAULT_PROCESS;
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-10 md:pt-16 pb-16 md:pb-24 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> {cfg.eyebrow}</span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] text-ink">
              {cfg.title}
            </h1>
            <p className="mt-6 text-lg text-ink-soft max-w-xl">{cfg.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+18005385826" className="btn-primary">
                <Phone className="h-4 w-4" /> Call (800) 538-5826
              </a>
              <Link to="/contact" className="btn-gold">
                Request a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-ink-soft">
              <div><b className="text-ink text-base font-display">4.9★</b> · 3,200+ reviews</div>
              <div className="h-4 w-px bg-border" />
              <div>Licensed &amp; insured</div>
              <div className="h-4 w-px bg-border" />
              <div>Same-week service</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-hero border border-border">
              <img
                src={cfg.heroImage}
                alt={cfg.heroImageAlt}
                width={1600}
                height={1000}
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block card-soft p-5 max-w-[240px]">
              <div className="text-xs uppercase tracking-widest text-ink-soft">JetCo Guarantee</div>
              <div className="mt-1.5 font-display text-xl text-ink">If it's not right, we make it right.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual services grid */}
      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">
              Complete {cfg.eyebrow.toLowerCase()} under one roof
            </h2>
          </div>
          <Link to="/contact" className="btn-ghost">Talk to a specialist <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cfg.services.map((s) => (
            <article key={s.title} className="card-soft p-7 hover:-translate-y-0.5 transition-transform">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand mb-5">
                {s.icon}
              </div>
              <h3 className="font-display text-2xl text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits + why */}
      <section className="bg-ink text-cream py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="eyebrow !text-cream/60"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Why JetCo</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Premium craftsmanship. <em className="text-gold not-italic">Local accountability.</em>
            </h2>
            <p className="mt-5 text-cream/70 max-w-md">
              Every JetCo technician is background-checked, drug-tested and trained in-house. When
              we leave your property, you'll notice the difference.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cfg.benefits.map((b, i) => (
              <div key={i} className="rounded-3xl border border-cream/10 bg-cream/5 p-6">
                <div className="text-gold font-display text-3xl">0{i + 1}</div>
                <div className="mt-3 font-display text-2xl">{b.title}</div>
                <p className="mt-2 text-sm text-cream/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After feature */}
      <section className="container-x py-24">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="eyebrow">Real work, real homes</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">Before &amp; after</h2>
            <p className="mt-4 text-ink-soft max-w-md">
              Browse recent {cfg.eyebrow.toLowerCase()} projects completed by our local crews. Every job
              documented, every homeowner satisfied.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              See if you qualify <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative">
              <img src={cfg.heroImage} alt="Before" loading="lazy" className="w-full h-full object-cover grayscale contrast-95" />
              <div className="absolute top-3 left-3 bg-ink/80 text-cream text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full">Before</div>
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative mt-8">
              <img src={cfg.heroImage} alt="After" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-gold text-ink text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-semibold">After</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-brand-soft/60 py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">{cfg.processTitle ?? "How it works"}</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">Simple, predictable, done right.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={i} className="relative rounded-3xl bg-card border border-border p-7">
                <div className="text-gold font-display text-4xl">0{i + 1}</div>
                <div className="mt-2 font-display text-xl text-ink">{p.title}</div>
                <p className="mt-1.5 text-sm text-ink-soft">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="eyebrow">4.9★ · verified reviews</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">Homeowners who chose JetCo</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { name: "Marissa T.", city: "Charlotte, NC", text: `The JetCo team was on time, tidy, and clearly explained every step of our ${cfg.eyebrow.toLowerCase()} project. Best experience we've had with a home service company.` },
            { name: "David R.", city: "Raleigh, NC", text: "Fair quote, top-notch workmanship, and follow-up you don't expect anymore. They earned every one of these five stars." },
            { name: "Angela P.", city: "Greenville, SC", text: "We've now used JetCo across three different services. Same great crew energy every time — the standard is real." },
          ].map((r) => (
            <figure key={r.name} className="card-soft p-7">
              <div className="text-gold text-lg">★★★★★</div>
              <blockquote className="mt-4 text-ink text-[15px] leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border text-sm">
                <div className="font-medium text-ink">{r.name}</div>
                <div className="text-ink-soft">{r.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-card border border-border p-8 md:p-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="eyebrow">Service areas</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink">Local crews, close to home.</h2>
            <p className="mt-4 text-ink-soft">
              We serve homeowners and property managers across the Carolinas and Southeast.
              Not sure if you're covered? Give us a call — we probably are.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(cfg.areas ?? [
              "Charlotte", "Raleigh", "Durham", "Greensboro", "Winston-Salem", "Asheville",
              "Wilmington", "Fayetteville", "Cary", "Chapel Hill", "Concord", "High Point",
              "Greenville", "Columbia", "Charleston", "Rock Hill", "Spartanburg", "Myrtle Beach",
            ]).map((c) => (
              <div key={c} className="text-sm text-ink-soft px-3 py-2 rounded-full bg-muted">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">Answers</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink">Frequently asked questions</h2>
            <p className="mt-4 text-ink-soft max-w-sm">
              Still curious? Our team is one phone call away — and never charges for questions.
            </p>
            <a href="tel:+18005385826" className="btn-ghost mt-6">
              <Phone className="h-4 w-4" /> (800) 538-5826
            </a>
          </div>
          <FAQ items={cfg.faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <div className="rounded-3xl bg-ink text-cream p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <span className="eyebrow !text-cream/60"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Ready when you are</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Get a free {cfg.eyebrow.toLowerCase()} quote today.
              </h2>
              <p className="mt-4 text-cream/70 max-w-lg">
                Financing available. Same-week appointments in most areas. Trusted by 12,000+ households.
              </p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="tel:+18005385826" className="btn-ghost !text-cream !border-cream/25 hover:!bg-cream/10">
                <Phone className="h-4 w-4" /> Call
              </a>
              <Link to="/contact" className="btn-gold">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
