import Link from "next/link";
import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";
import { citiesByZone } from "@/lib/cities";

const FAQ_ITEMS = [
  {
    q: "Do I need to pay the subsidy amount upfront?",
    a: "No. You pay only your share of the system cost after subsidy is deducted, or the full cost upfront with the subsidy refunded to your account after installation, depending on which DISCOM process applies to your district.",
  },
  {
    q: "What happens on a cloudy or rainy day?",
    a: "Your system draws the shortfall from the grid automatically through net metering, and any surplus you generate on sunny days is credited against those units.",
  },
  {
    q: "Do you service areas outside Bhopal and Indore?",
    a: "Yes. We run scheduled installation crews to Gwalior, Ujjain, Indore, Dewas, and every district across our Central and Western zones — mention your city on the form and we'll confirm the next available slot.",
  },
  {
    q: "What warranty do I get?",
    a: "Panels typically carry a manufacturer performance warranty of up to 25 years, inverters 5–10 years depending on model, and Solentra covers installation workmanship separately for 10 years.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ink to-[#14284a] text-white pt-16 pb-14 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-sun/15 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center relative">
          <div>
            <div className="eyebrow mb-3.5">Rooftop Solar · Madhya Pradesh</div>
            <h1 className="font-display font-bold text-[clamp(32px,4.4vw,50px)] leading-[1.08] mb-5">
              Turn Madhya Pradesh&apos;s sunshine into <span className="text-sun">your</span> power bill going to zero.
            </h1>
            <p className="text-[17px] text-white/78 max-w-md mb-7">
              Solentra Energies designs, installs, and maintains rooftop solar systems for homes, businesses, and
              housing societies across MP — with subsidy paperwork, net metering, and 25-year performance handled
              for you.
            </p>
            <div className="flex gap-3.5 flex-wrap mb-9">
              <Link href="/contact" className="inline-flex items-center justify-center font-semibold text-[15px] px-6.5 py-3.5 rounded bg-sun text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(245,166,35,0.35)] transition-all">
                Get My Free Site Visit
              </Link>
              <a href="#calculator" className="inline-flex items-center justify-center font-semibold text-[15px] px-6.5 py-3.5 rounded border-[1.5px] border-white/50 text-white hover:border-white hover:bg-white/10 transition-colors">
                See My Savings ↓
              </a>
            </div>
            <div className="flex gap-7 flex-wrap border-t border-white/14 pt-5.5">
              {[
                ["4.5+ MW", "Installed across MP"],
                ["10 yr", "Workmanship warranty"],
                ["15", "MP cities served"],
                ["4.8/5", "Customer rating"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="font-mono font-semibold text-xl text-sun">{num}</div>
                  <div className="text-xs text-white/65 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div id="calculator">
            <Calculator />
          </div>
        </div>
      </section>

      {/* Three offerings */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="eyebrow mb-3.5">Choose your path</div>
            <h2 className="font-display font-bold text-[clamp(26px,3.2vw,36px)] leading-tight">
              One installer, three ways we work with you
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <OfferingCard
              href="/residential"
              tag="For your home"
              title="Residential Solar"
              desc="Sized to your family's actual usage, with subsidy paperwork filed for you."
            />
            <OfferingCard
              href="/housing-societies"
              tag="For your society"
              title="Housing Societies"
              desc="Common-area and rooftop solar for RWAs, presented directly to your committee."
            />
            <OfferingCard
              href="/commercial"
              tag="For your business"
              title="Commercial & Industrial"
              desc="Larger systems sized to your load curve, with depreciation and ROI modelled upfront."
            />
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-sky py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="eyebrow mb-3.5">Why Solentra</div>
            <h2 className="font-display font-bold text-[clamp(26px,3.2vw,36px)] leading-tight">
              Solar is simple math. Execution is where most installers fail.
            </h2>
            <p className="text-[#48566e] text-base mt-3.5">
              We handle the four things that actually determine whether your solar system performs for 25 years —
              not just the first 25 days.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
            {[
              ["01", "Engineered for MP's roofs", "Structural checks for tin, RCC, and Mangalore-tile roofs common across MP homes, before we quote a single rupee."],
              ["02", "Subsidy handled end-to-end", "We file your PM Surya Ghar application, DISCOM net-metering request, and inspection scheduling — you sign, we chase."],
              ["03", "Tier-1 panels only", "DCR-compliant, Tier-1 modules and IE-rated inverters, so your system qualifies for subsidy and lasts the distance."],
              ["04", "Local service, not a call centre", "MP-based technicians for annual cleaning, monitoring, and warranty claims — no waiting on a national helpline."],
            ].map(([num, title, desc]) => (
              <div key={num} className="bg-white p-7">
                <div className="w-9 h-9 rounded bg-sky text-azure flex items-center justify-center mb-4 font-bold font-mono text-sm">
                  {num}
                </div>
                <h4 className="text-base font-semibold mb-2">{title}</h4>
                <p className="text-sm text-[#586378]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="bg-ink text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5" style={{ color: "var(--color-sun)" }}>Coverage</div>
            <h2 className="font-display font-bold text-[clamp(26px,3.2vw,36px)] leading-tight">
              Installing across Madhya Pradesh
            </h2>
            <p className="text-white/65 text-base mt-3.5">
              Headquartered in Badnagar, with installation crews across our Central and Western operating zones.
            </p>
          </div>
          {citiesByZone().map(({ zone, cities }) => (
            <div key={zone.code} className="mb-8 last:mb-0">
              <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                {zone.code} · {zone.label}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/rooftop-solar-in-${c.slug}`}
                    className={`px-4.5 py-2.5 rounded-full text-[13.5px] font-medium font-mono border transition-colors ${
                      c.isHq ? "border-sun text-sun hover:bg-sun/10" : "border-white/20 hover:border-sun hover:text-sun"
                    }`}
                  >
                    {c.name}{c.isHq ? " · HQ" : ""}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5">Common questions</div>
            <h2 className="font-display font-bold text-[clamp(26px,3.2vw,36px)] leading-tight">
              Before you book a site visit
            </h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>


      {/* Lead form */}
      <section className="bg-sky py-20" id="lead-form">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(11,31,58,0.1)] p-8 md:p-11 grid md:grid-cols-2 gap-11">
            <div>
              <div className="eyebrow mb-3.5">Free, no-obligation</div>
              <h2 className="font-display text-2xl font-bold mb-3.5">Get your rooftop survey booked</h2>
              <p className="text-[#586378] text-sm mb-5">
                Tell us a little about your property and one of our MP-based solar consultants will call to confirm
                a visit within 48 hours.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm">
                {[
                  "No cost, no obligation site visit",
                  "Written quote with subsidy amount shown separately",
                  "We only recommend a system size your roof can actually support",
                ].map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="text-sun font-bold">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}

function OfferingCard({ href, tag, title, desc }) {
  return (
    <Link
      href={href}
      className="group block border border-ink/10 rounded-md p-7 hover:border-azure hover:shadow-lg transition-all bg-white"
    >
      <div className="font-mono text-[11px] uppercase tracking-wider text-azure mb-3">{tag}</div>
      <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-[#586378] mb-4">{desc}</p>
      <span className="text-sm font-semibold text-azure group-hover:translate-x-1 inline-block transition-transform">
        Explore →
      </span>
    </Link>
  );
}
