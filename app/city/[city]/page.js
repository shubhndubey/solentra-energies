import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, ZONES, getCity } from "@/lib/cities";
import { pricingTable, inr } from "@/lib/pricing";
import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  return {
    title: `Rooftop Solar in ${city.name} — Prices, Subsidy & Savings | Solentra Energies`,
    description: `Rooftop solar installation, subsidy filing, and net metering for homes, businesses, and societies in ${city.name}, Madhya Pradesh. Get a free site visit.`,
  };
}

function faqItems(cityName, table) {
  const three = table.find((r) => r.kw === 3);
  const five = table.find((r) => r.kw === 5);
  return [
    {
      q: `What does a rooftop solar system cost in ${cityName}?`,
      a: `Indicative prices after the central subsidy range from around ${inr(table[0].withSubsidy)} for a 2kW system to around ${inr(table[table.length - 1].withSubsidy)} for a 10kW system. Your exact price depends on roof type, DISCOM charges, and the equipment you choose — confirmed after a free site visit.`,
    },
    {
      q: "What is the solar subsidy in Madhya Pradesh right now?",
      a: "Under the PM Surya Ghar Muft Bijli Yojana, residential systems get ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 (capped) for 3kW and above. Rates are set centrally and can change — we confirm the current figure before you commit.",
    },
    {
      q: "Can a 3kW system run a 1.5-ton AC without batteries?",
      a: `Yes. A 3kW on-grid system generates around ${three.annualGeneration.toLocaleString("en-IN")} units a year, comfortably enough to run a 1.5-ton AC alongside your other daytime loads, without needing a battery bank.`,
    },
    {
      q: "Can a 5kW system run two air conditioners?",
      a: `Generally yes. A 5kW system generates around ${five.annualGeneration.toLocaleString("en-IN")} units a year, which is typically enough for two 1.5-ton ACs plus regular household load — final sizing is confirmed against your actual usage.`,
    },
    {
      q: `Do you install directly in ${cityName}, or through a local partner?`,
      a: `Our own installation crews handle every project in ${cityName} and the surrounding area — we don't subcontract to third-party installers.`,
    },
  ];
}

export default async function CityPage({ params }) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const zone = ZONES[city.zone];
  const table = pricingTable();
  const otherCities = CITIES.filter((c) => c.slug !== city.slug && c.zone === city.zone)
    .concat(CITIES.filter((c) => c.slug !== city.slug && c.zone !== city.zone))
    .slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ink to-[#14284a] text-white pt-16 pb-14 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-sun/15 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center relative">
          <div>
            <div className="eyebrow mb-3.5">
              {zone.label} · {city.name}{city.isHq ? " · Head Office" : ""}
            </div>
            <h1 className="font-display font-bold text-[clamp(30px,4vw,46px)] leading-[1.1] mb-2">
              Namaste {city.name}!
            </h1>
            <p className="text-xl text-white/85 font-medium mb-5">
              Power your home with solar — at close to zero upfront investment.
            </p>
            <p className="text-[17px] text-white/78 max-w-md mb-7">{city.blurb}</p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="#lead-form" className="inline-flex items-center justify-center font-semibold text-[15px] px-6.5 py-3.5 rounded bg-sun text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(245,166,35,0.35)] transition-all">
                Get My Free Site Visit
              </Link>
              <a href="#calculator" className="inline-flex items-center justify-center font-semibold text-[15px] px-6.5 py-3.5 rounded border-[1.5px] border-white/50 text-white hover:border-white hover:bg-white/10 transition-colors">
                See My Savings ↓
              </a>
            </div>
          </div>
          <div id="calculator">
            <Calculator title={`${city.name} Savings Meter`} />
          </div>
        </div>
      </section>

      {/* Three offerings */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="eyebrow mb-3.5">All three, in {city.name}</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">
              Whichever kind of property you have
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <OfferingCard href="/residential" title="Residential" desc={`Rooftop solar sized to your household's usage in ${city.name}.`} />
            <OfferingCard href="/housing-societies" title="Housing Societies" desc={`Common-area solar proposals for RWAs in ${city.name}.`} />
            <OfferingCard href="/commercial" title="Commercial & Industrial" desc={`Load-curve sized systems for businesses in ${city.name}.`} />
          </div>
        </div>
      </section>

      {/* Why families trust Solentra */}
      <section className="bg-sky py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="eyebrow mb-3.5">Why {city.name} chooses Solentra</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">
              What we get right, project after project
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
            {[
              ["Engineered mounting", "Structures assessed against local wind and monsoon load for your specific roof, not a one-size-fits-all bracket."],
              ["Hassle-free subsidy", "We file your PM Surya Ghar application and DISCOM net-metering request — you sign, we chase the rest."],
              ["Tier-1 equipment only", "DCR-compliant, Tier-1 panels and IE-rated inverters, so your system qualifies for subsidy and lasts the distance."],
              ["Real after-sales service", `A local Solentra coordinator handles maintenance and warranty claims in ${city.name} — not a national call centre.`],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white p-7">
                <h4 className="text-base font-semibold mb-2">{title}</h4>
                <p className="text-sm text-[#586378]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <div className="eyebrow mb-3.5">Indicative pricing</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight mb-4">
              What solar costs in {city.name}, with and without subsidy
            </h2>
            <p className="text-[#586378] text-[15px]">
              These figures use Solentra's own indicative per-kW pricing and the published PM Surya Ghar subsidy
              slabs. They're a starting reference, not a quote — your exact price depends on roof type, DISCOM
              charges, and equipment chosen, confirmed at your free site visit.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-md overflow-hidden shadow-[0_6px_24px_rgba(11,31,58,0.08)] min-w-[560px]">
              <thead>
                <tr className="bg-ink text-white text-xs uppercase tracking-wider">
                  <th className="p-3.5 text-left font-semibold">System size</th>
                  <th className="p-3.5 text-left font-semibold">Price without subsidy</th>
                  <th className="p-3.5 text-left font-semibold">Subsidy</th>
                  <th className="p-3.5 text-left font-semibold">Price with subsidy</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row) => (
                  <tr key={row.kw} className="border-b border-ink/10 last:border-b-0">
                    <td className="p-3.5 text-sm font-semibold">{row.kw} kW</td>
                    <td className="p-3.5 text-sm">{inr(row.withoutSubsidy)}</td>
                    <td className="p-3.5 text-sm font-mono text-ok font-semibold">{inr(row.subsidy)}</td>
                    <td className="p-3.5 text-sm font-mono text-azure font-semibold">{inr(row.withSubsidy)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Savings table */}
      <section className="bg-sky py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <div className="eyebrow mb-3.5">25-year outlook</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight mb-4">
              Estimated savings over 25 years in {city.name}
            </h2>
            <p className="text-[#586378] text-[15px]">
              Assumes a 3% annual grid tariff increase and 1% annual panel output degradation — the two biggest
              swing factors over a system's life. Actual savings depend on your roof's sun exposure, shading, and
              how consistently the system is maintained.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-md overflow-hidden shadow-[0_6px_24px_rgba(11,31,58,0.08)] min-w-[420px]">
              <thead>
                <tr className="bg-ink text-white text-xs uppercase tracking-wider">
                  <th className="p-3.5 text-left font-semibold">System size</th>
                  <th className="p-3.5 text-left font-semibold">Estimated 25-year savings</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row) => (
                  <tr key={row.kw} className="border-b border-ink/10 last:border-b-0">
                    <td className="p-3.5 text-sm font-semibold">{row.kw} kW</td>
                    <td className="p-3.5 text-sm font-mono text-ok font-semibold">{inr(row.savings25)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="eyebrow mb-3.5">Financing</div>
            <h2 className="font-display font-bold text-[26px] mb-4">Near-zero upfront investment</h2>
            <p className="text-[#586378] text-[15px] mb-3.5">
              The central subsidy is designed to offset most or all of a typical down payment, and financing can be
              structured so your EMI tracks the electricity bill you're no longer paying.
            </p>
            <p className="text-sm text-[#586378]">
              We work with partner banks and NBFCs offering solar-specific loans, and can walk you through
              capex-versus-loan trade-offs at your site visit.
            </p>
          </div>
          <div className="bg-sky rounded-md p-7 border border-ink/10">
            <h4 className="font-display font-semibold text-base mb-4">How the numbers typically work</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#48566e]">
              {[
                "Subsidy is disbursed after installation and net-metering approval, reducing your effective down payment",
                "EMI tenures commonly range from 12 to 60 months depending on the lender",
                "Monthly EMI is often close to what your old electricity bill used to be",
                "Once the loan is paid off, the electricity is essentially free for the rest of the system's life",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="text-sun font-bold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sky py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5">The basics</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">How rooftop solar works</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              ["Sunlight becomes DC power", "Panels absorb sunlight and generate direct current electricity through photovoltaic cells."],
              ["Inverter converts it to AC", "A solar inverter converts that DC output into the alternating current your appliances actually use."],
              ["Net metering settles the difference", "A bi-directional meter tracks what you export to the grid versus what you draw — you're billed only for the net difference."],
            ].map(([title, desc], i) => (
              <div key={title} className="bg-white rounded-md p-6 border border-ink/10">
                <div className="font-mono text-sm text-azure font-semibold mb-2">0{i + 1}</div>
                <h4 className="text-base font-semibold mb-2">{title}</h4>
                <p className="text-sm text-[#586378]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-grid vs off-grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-8">
            <div className="eyebrow mb-3.5">Choosing a system</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">
              On-grid vs off-grid in {city.name}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-md overflow-hidden shadow-[0_6px_24px_rgba(11,31,58,0.08)] min-w-[640px]">
              <thead>
                <tr className="bg-ink text-white text-xs uppercase tracking-wider">
                  <th className="p-3.5 text-left font-semibold">Feature</th>
                  <th className="p-3.5 text-left font-semibold">On-grid</th>
                  <th className="p-3.5 text-left font-semibold">Off-grid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Central subsidy eligible", "Yes, up to ₹78,000 for 3kW+", "No"],
                  ["Connected to the grid", "Yes", "No"],
                  ["Battery bank needed", "Not required", "Required (usually lithium)"],
                  ["Best suited for", "Areas with reliable grid supply", "Areas with unreliable or no grid access"],
                ].map(([feature, a, b]) => (
                  <tr key={feature} className="border-b border-ink/10 last:border-b-0">
                    <td className="p-3.5 text-sm font-semibold">{feature}</td>
                    <td className="p-3.5 text-sm">{a}</td>
                    <td className="p-3.5 text-sm">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#586378] mt-5 max-w-2xl">
            Most homes and businesses in {city.name} are well served by the local grid, which is why on-grid systems
            — with their central subsidy eligibility and lower upfront cost — are what we recommend for the vast
            majority of installations here.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sky py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5">From {city.name}</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">
              What customers here say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {city.testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-md p-7 border border-ink/10">
                <div className="text-sun mb-2.5 tracking-widest text-sm">★★★★★</div>
                <p className="text-sm text-ink mb-5 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-full bg-azure text-white flex items-center justify-center font-display font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <b className="block">{t.name}</b>
                    <span className="text-[#7a869a] text-xs">{t.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="bg-ink text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5" style={{ color: "var(--color-sun)" }}>Also serving</div>
            <h2 className="font-display font-bold text-[clamp(22px,2.6vw,28px)] leading-tight">
              Solentra near {city.name}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/rooftop-solar-in-${c.slug}`}
                className="px-4.5 py-2.5 rounded-full text-[13.5px] font-medium font-mono border border-white/20 hover:border-sun hover:text-sun transition-colors"
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/cities"
              className="px-4.5 py-2.5 rounded-full text-[13.5px] font-medium font-mono border border-white/20 hover:border-sun hover:text-sun transition-colors"
            >
              View all cities →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5">Common questions</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">
              {city.name} FAQs
            </h2>
          </div>
          <Faq items={faqItems(city.name, table)} />
        </div>
      </section>

      {/* Lead form */}
      <section className="bg-sky py-20" id="lead-form">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(11,31,58,0.1)] p-8 md:p-11 grid md:grid-cols-2 gap-11">
            <div>
              <div className="eyebrow mb-3.5">Free, no-obligation</div>
              <h2 className="font-display text-2xl font-bold mb-3.5">Book a site visit in {city.name}</h2>
              <p className="text-[#586378] text-sm">
                A Solentra consultant will call within 48 hours to confirm a convenient time.
              </p>
            </div>
            <LeadForm defaultCity={city.name} />
          </div>
        </div>
      </section>
    </>
  );
}

function OfferingCard({ href, title, desc }) {
  return (
    <Link href={href} className="group block border border-ink/10 rounded-md p-6 hover:border-azure hover:shadow-lg transition-all bg-white">
      <h3 className="font-display text-base font-bold mb-2">{title}</h3>
      <p className="text-sm text-[#586378] mb-3">{desc}</p>
      <span className="text-sm font-semibold text-azure group-hover:translate-x-1 inline-block transition-transform">
        Explore →
      </span>
    </Link>
  );
}
