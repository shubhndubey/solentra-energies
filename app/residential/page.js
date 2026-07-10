import Link from "next/link";
import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Residential Rooftop Solar — Solentra Energies",
  description: "Rooftop solar for homes across Madhya Pradesh, sized to your family's usage with subsidy handled end-to-end.",
};

const FAQ_ITEMS = [
  {
    q: "How much roof space does a 3kW system need?",
    a: "Roughly 300–330 sq. ft. of shadow-free roof area, depending on the panel wattage used and the roof orientation.",
  },
  {
    q: "Will it work on my tin or Mangalore-tile roof?",
    a: "Yes — we use roof-specific mounting structures for RCC, tin/metal sheet, and tiled roofs common across MP homes. Our site visit confirms the right mounting approach for your roof.",
  },
  {
    q: "How long does installation take?",
    a: "Physical installation is usually completed in 1–2 days. The full process, including subsidy filing and DISCOM inspection, typically takes 30–45 days end to end.",
  },
  {
    q: "What if my sanctioned load is too low for the system size I need?",
    a: "We check your sanctioned load during the site visit and can guide you on applying for a load enhancement with your DISCOM if needed, before finalising your system size.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink to-[#14284a] text-white pt-16 pb-14 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-sun/15 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center relative">
          <div>
            <div className="eyebrow mb-3.5">Residential Solar</div>
            <h1 className="font-display font-bold text-[clamp(30px,4vw,46px)] leading-[1.1] mb-5">
              Solar sized for how your household actually uses power.
            </h1>
            <p className="text-[17px] text-white/78 max-w-md mb-7">
              A free site visit measures your roof, your shading, and your bill history — so the system we quote is
              the one your home actually needs, not a generic package.
            </p>
            <Link href="#lead-form" className="inline-flex items-center justify-center font-semibold text-[15px] px-6.5 py-3.5 rounded bg-sun text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(245,166,35,0.35)] transition-all">
              Get My Free Site Visit
            </Link>
          </div>
          <div>
            <Calculator lockSegment="home" title="Home Savings Meter" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="eyebrow mb-3.5">Built for MP homes</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">
              What makes residential rooftops different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
            {[
              ["Roof survey first", "We check structural load, shading from neighbouring buildings and trees, and roof type before quoting anything."],
              ["Family-sized systems", "Most MP homes need between 2kW and 5kW — we size to your last 6 months of bills, not a flat package."],
              ["Subsidy filed for you", "Your PM Surya Ghar application and DISCOM net-metering request are submitted and tracked by our team."],
              ["25-year outlook", "Tier-1 panels with long manufacturer warranties, plus our own 10-year workmanship cover."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white p-7">
                <h4 className="text-base font-semibold mb-2">{title}</h4>
                <p className="text-sm text-[#586378]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="eyebrow mb-3.5">Government Subsidy</div>
            <h2 className="font-display font-bold text-[26px] mb-4">What PM Surya Ghar pays for a home system</h2>
            <p className="text-[#48566e] text-[15px] mb-3.5">
              The central subsidy is disbursed directly to your bank account after installation and net-metering
              approval — Solentra never touches the subsidy amount.
            </p>
            <p className="text-sm text-[#48566e]">
              Rates shown are the published central slab as of early 2026.{" "}
              <Link href="#lead-form" className="text-azure font-semibold">Confirm your exact number →</Link>
            </p>
          </div>
          <table className="w-full border-collapse bg-white rounded-md overflow-hidden shadow-[0_6px_24px_rgba(11,31,58,0.08)]">
            <tbody>
              <tr className="bg-ink text-white text-xs uppercase tracking-wider">
                <th className="p-3.5 text-left font-semibold">System size</th>
                <th className="p-3.5 text-left font-semibold">Central subsidy</th>
              </tr>
              {[
                ["Up to 1 kW", "₹30,000"],
                ["Up to 2 kW", "₹60,000"],
                ["3 kW & above", "₹78,000 (capped)"],
              ].map(([size, amt]) => (
                <tr key={size} className="border-b border-ink/10 last:border-b-0">
                  <td className="p-3.5 text-sm">{size}</td>
                  <td className="p-3.5 text-sm font-mono text-azure font-semibold">{amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5">Common questions</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">Residential FAQs</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="bg-sky py-20" id="lead-form">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(11,31,58,0.1)] p-8 md:p-11 grid md:grid-cols-2 gap-11">
            <div>
              <div className="eyebrow mb-3.5">Free, no-obligation</div>
              <h2 className="font-display text-2xl font-bold mb-3.5">Get your home rooftop survey booked</h2>
              <p className="text-[#586378] text-sm">
                One of our MP-based solar consultants will call within 48 hours to confirm your free site visit.
              </p>
            </div>
            <LeadForm defaultPropertyType="Home" />
          </div>
        </div>
      </section>
    </>
  );
}
