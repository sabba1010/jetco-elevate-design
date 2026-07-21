import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bug, Wind, Home as HomeIcon, Square, Layers, Wrench, Phone, Shield, Award, Clock, Sparkles, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { FAQ } from "@/components/site/FAQ";
import heroHome from "@/assets/hero-home.jpg";
import heroPest from "@/assets/hero-pest.jpg";
import heroHvac from "@/assets/hero-hvac.jpg";
import heroRoofing from "@/assets/hero-roofing.jpg";
import heroWindows from "@/assets/hero-windows.jpg";
import heroFlooring from "@/assets/hero-flooring.jpg";
import heroHandyman from "@/assets/hero-handyman.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JetCo Home & Commercial Services — Six trusted trades, one team." },
      { name: "description", content: "Pest control, HVAC, roofing, windows, flooring and handyman services from one trusted, local team. Licensed, insured and guaranteed." },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { to: "/pest", label: "Pest Control", tag: "Residential & Commercial", img: heroPest, icon: Bug, blurb: "Safe, targeted treatments that keep pests out and your family in." },
  { to: "/hvac", label: "HVAC", tag: "Heating · Cooling · Air Quality", img: heroHvac, icon: Wind, blurb: "Install, repair and tune-up services from certified HVAC technicians." },
  { to: "/roofing", label: "Roofing & Gutters", tag: "Replacement · Repair · Storm", img: heroRoofing, icon: HomeIcon, blurb: "Long-life roofing systems and seamless gutters, backed for decades." },
  { to: "/windows", label: "Windows", tag: "Energy-efficient replacement", img: heroWindows, icon: Square, blurb: "Beautiful, energy-saving windows engineered to lower your bills." },
  { to: "/flooring", label: "Flooring", tag: "Hardwood · Vinyl · Tile", img: heroFlooring, icon: Layers, blurb: "Design-led flooring installations that transform any room." },
  { to: "/handyman", label: "Handyman", tag: "Repairs · Installations", img: heroHandyman, icon: Wrench, blurb: "The trusted craftsman for the punch-list you've been meaning to finish." },
] as const;

function Home() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-8 md:pt-14 pb-20 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Home &amp; Commercial · Est. 2004
              </span>
              <h1 className="mt-6 font-display text-[3.25rem] md:text-[5.5rem] leading-[0.98] text-ink">
                Six trusted trades.<br />
                <em className="not-italic text-brand">One team you can call.</em>
              </h1>
              <p className="mt-7 max-w-xl text-lg text-ink-soft">
                JetCo brings pest control, HVAC, roofing, windows, flooring and handyman services under
                one roof — with the workmanship of a specialist and the accountability of a neighbor.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-gold">Get a free quote <ArrowRight className="h-4 w-4" /></Link>
                <a href="tel:+18005385826" className="btn-ghost">
                  <Phone className="h-4 w-4" /> (800) 538-5826
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-ink-soft">
                <div className="flex items-center gap-1.5"><span className="text-gold text-base">★★★★★</span> 4.9 · 3,200+ reviews</div>
                <div className="h-4 w-px bg-border" />
                <div>BBB A+ Accredited</div>
                <div className="h-4 w-px bg-border" />
                <div>Licensed &amp; insured</div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-hero border border-border">
                <img src={heroHome} alt="A modern home JetCo serves" width={1600} height={1100} className="w-full h-[460px] md:h-[600px] object-cover" />
              </div>
              <div className="absolute -left-4 -bottom-6 md:-left-8 card-soft p-5 max-w-[260px]">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold" />
                  <div className="text-xs uppercase tracking-widest text-ink-soft">JetCo Guarantee</div>
                </div>
                <div className="mt-2 font-display text-xl text-ink">If it's not right, we make it right — no questions asked.</div>
              </div>
              <div className="absolute -right-3 top-6 hidden lg:block card-soft p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand"><Award className="h-4 w-4" /></div>
                  <div className="text-xs">
                    <div className="font-medium text-ink">20+ years</div>
                    <div className="text-ink-soft">serving the Carolinas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border/70 bg-cream">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-y-3 gap-x-8 text-xs uppercase tracking-[0.18em] text-ink-soft">
          {["BBB A+ Accredited", "EPA Certified", "NATE-Certified Techs", "GAF Master Elite", "Google Guaranteed", "Angi Super Service"].map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="container-x py-24 grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
        <div className="sticky top-28">
          <span className="eyebrow">About JetCo</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-ink">
            A better standard for home &amp; commercial services.
          </h2>
        </div>
        <div className="space-y-6 text-ink-soft text-lg leading-relaxed">
          <p>
            For over two decades, JetCo has been the team homeowners and property managers call when they're
            done rolling the dice on one-off contractors. We built the company around a simple idea: hire the
            best trades, treat them well, back their work in writing.
          </p>
          <p>
            Today our 180+ technicians serve homeowners, HOAs, and commercial clients across the Southeast
            with the same standard on every job — whether it's a $150 pest treatment or a full roof replacement.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { n: "12k+", l: "Households served" },
              { n: "180+", l: "Trained technicians" },
              { n: "4.9★", l: "Average review" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-ink">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-ink-soft mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section id="services" className="container-x py-16 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-xl">
            <span className="eyebrow">Our divisions</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl text-ink">Every service, one standard.</h2>
          </div>
          <Link to="/contact" className="btn-ghost">Start a project <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.to}
                to={s.to}
                className="group card-soft overflow-hidden flex flex-col hover:-translate-y-0.5 transition-transform"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={s.img} alt={s.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-full bg-cream/90 backdrop-blur text-ink">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-cream/90">{s.tag}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl text-ink">{s.label}</h3>
                  <p className="mt-2 text-sm text-ink-soft flex-1">{s.blurb}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Explore {s.label} <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-ink text-cream py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow !text-cream/60"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Why JetCo</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              The last home service call you'll <em className="text-gold not-italic">ever have to make.</em>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Shield, t: "Backed in writing", d: "Every project protected by the JetCo Guarantee — parts, labor, and satisfaction." },
              { i: Award, t: "Certified craftsmen", d: "NATE, EPA, and manufacturer-certified specialists in every division." },
              { i: Clock, t: "On time, or it's free", d: "Miss your window? We credit your invoice. Simple." },
              { i: Sparkles, t: "Spotless when we leave", d: "Drop cloths, shoe covers, and full clean-up on every visit." },
            ].map((f, i) => {
              const I = f.i;
              return (
                <div key={i} className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gold text-ink"><I className="h-5 w-5" /></div>
                  <div className="mt-5 font-display text-2xl">{f.t}</div>
                  <p className="mt-2 text-sm text-cream/70">{f.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="container-x py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-center">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-3 font-display text-5xl text-ink">Before &amp; after, in real homes.</h2>
            <p className="mt-4 text-ink-soft max-w-md">
              A selection of recent projects across all six divisions. Real crews, real homes,
              documented start to finish.
            </p>
            <Link to="/contact" className="btn-primary mt-8">Start your project <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[heroWindows, heroFlooring, heroRoofing, heroHvac].map((img, i) => (
              <div key={i} className={`aspect-[4/5] rounded-3xl overflow-hidden bg-muted ${i % 2 ? "mt-10" : ""}`}>
                <img src={img} alt="Project" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-16">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">4.9★ · Verified reviews</span>
          <h2 className="mt-3 font-display text-5xl text-ink">Neighbors who chose JetCo.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { n: "Sarah K.", c: "Charlotte, NC", t: "We've used JetCo for pest, HVAC, and now new windows. Same great crew energy every visit. They set a new standard." },
            { n: "Marcus H.", c: "Raleigh, NC", t: "Roof replaced in two days, cleanup was immaculate. The project lead answered every question. Zero regrets." },
            { n: "Priya S.", c: "Greenville, SC", t: "Fair quote, on time, and my floors are stunning. JetCo is the only home services company we'll call now." },
          ].map((r) => (
            <figure key={r.n} className="card-soft p-7">
              <div className="text-gold text-lg">★★★★★</div>
              <blockquote className="mt-4 text-ink text-[15px] leading-relaxed">"{r.t}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border text-sm">
                <div className="font-medium text-ink">{r.n}</div>
                <div className="text-ink-soft">{r.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-soft/60 py-24 mt-16">
        <div className="container-x">
          <div className="max-w-xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-3 font-display text-5xl text-ink">Book us in under two minutes.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Tell us what you need", d: "Share a few details online or by phone. Real humans on the other end." },
              { t: "On-site assessment", d: "A senior tech visits within days, at no cost, to scope the work." },
              { t: "Transparent quote", d: "Line-item pricing, financing options, and a written scope." },
              { t: "Backed for years", d: "Workmanship and materials backed by the JetCo Guarantee." },
            ].map((p, i) => (
              <div key={i} className="rounded-3xl bg-card border border-border p-7">
                <div className="text-gold font-display text-4xl">0{i + 1}</div>
                <div className="mt-2 font-display text-xl text-ink">{p.t}</div>
                <p className="mt-1.5 text-sm text-ink-soft">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing / Warranty */}
      <section className="container-x py-24 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl bg-card border border-border p-10 relative overflow-hidden">
          <span className="eyebrow">0% financing available</span>
          <h3 className="mt-3 font-display text-3xl text-ink">Big project? Small monthly.</h3>
          <p className="mt-3 text-ink-soft">
            Approved in minutes with our lending partners. Get the roof, HVAC or windows you need
            now — pay comfortably over time.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {["0% intro APR options", "Terms up to 120 months", "No prepayment penalty"].map((b) => (
              <li key={b} className="flex items-center gap-2 text-ink"><Check className="h-4 w-4 text-brand" /> {b}</li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary mt-8">Check my rate <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="rounded-3xl bg-ink text-cream p-10 relative overflow-hidden">
          <div className="absolute -right-14 -top-14 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
          <span className="eyebrow !text-cream/60">The JetCo Guarantee</span>
          <h3 className="mt-3 font-display text-3xl">Workmanship warranty on every job.</h3>
          <p className="mt-3 text-cream/70">
            Materials backed by manufacturer warranties up to a lifetime, plus JetCo's labor guarantee.
            One number to call if anything ever needs attention.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {["Written scope every time", "Lifetime workmanship on installs", "One-call service support"].map((b) => (
              <li key={b} className="flex items-center gap-2 text-cream"><Check className="h-4 w-4 text-gold" /> {b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="eyebrow">Service areas</span>
            <h3 className="mt-3 font-display text-4xl text-ink">Serving 40+ cities across the Southeast.</h3>
            <p className="mt-3 text-ink-soft">Not sure if you're covered? We probably are. Call us.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Charlotte", "Raleigh", "Durham", "Greensboro", "Winston-Salem", "Asheville", "Wilmington", "Fayetteville", "Cary", "Chapel Hill", "Concord", "High Point", "Greenville", "Columbia", "Charleston", "Rock Hill", "Spartanburg", "Myrtle Beach"].map((c) => (
              <div key={c} className="text-sm text-ink-soft px-3 py-2 rounded-full bg-muted">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x pb-24 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="eyebrow">Answers</span>
          <h2 className="mt-3 font-display text-5xl text-ink">Frequently asked.</h2>
          <p className="mt-4 text-ink-soft max-w-sm">
            The most common questions we hear from new customers. Anything else? We're a phone call away.
          </p>
        </div>
        <FAQ items={[
          { q: "Are you licensed and insured?", a: "Yes — JetCo carries all required state licenses and $2M general liability coverage. We can send proof before any visit." },
          { q: "Do you offer free estimates?", a: "For most projects, yes. On-site estimates are complimentary and there's zero obligation to move forward." },
          { q: "How quickly can you come out?", a: "Same-week service in most areas. Emergency HVAC, roofing and pest calls are prioritized." },
          { q: "Do you finance larger projects?", a: "Yes. We offer 0% intro APR options and terms up to 120 months through our lending partners." },
          { q: "What areas do you serve?", a: "40+ cities across the Carolinas and Southeast — including Charlotte, Raleigh, Charleston, Columbia, and Greenville." },
        ]} />
      </section>

      {/* Quote form */}
      <section id="quote" className="container-x pb-24">
        <div className="rounded-3xl bg-ink text-cream p-8 md:p-14 grid gap-10 lg:grid-cols-[1fr_1fr] items-start relative overflow-hidden">
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <span className="eyebrow !text-cream/60"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Request a quote</span>
            <h2 className="mt-3 font-display text-5xl">A better contractor, one form away.</h2>
            <p className="mt-4 text-cream/70 max-w-md">
              Tell us what you need. A local JetCo specialist will call within one business hour with
              next steps and a time that works for you.
            </p>
            <div className="mt-8 space-y-3 text-sm text-cream/70">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Free, no-obligation quote</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Same-week appointments</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Licensed &amp; insured pros</div>
            </div>
          </div>
          <form className="relative bg-cream text-ink rounded-3xl p-6 md:p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="first" placeholder="Jamie" />
              <Field label="Last name" name="last" placeholder="Rivera" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" type="email" name="email" placeholder="you@email.com" />
              <Field label="Phone" name="phone" placeholder="(704) 555-0143" />
            </div>
            <label className="block">
              <div className="text-xs uppercase tracking-widest text-ink-soft mb-1.5">Service needed</div>
              <select className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand/30">
                {SERVICES.map((s) => <option key={s.to}>{s.label}</option>)}
              </select>
            </label>
            <label className="block">
              <div className="text-xs uppercase tracking-widest text-ink-soft mb-1.5">Tell us about the project</div>
              <textarea rows={3} placeholder="A few sentences about what you need..." className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand/30" />
            </label>
            <button className="btn-gold w-full !py-3.5">Get my free quote <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, placeholder, type = "text" }: { label: string; name: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-widest text-ink-soft mb-1.5">{label}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </label>
  );
}
