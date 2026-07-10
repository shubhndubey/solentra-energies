import Link from "next/link";
import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Commercial & Industrial Solar — Solentra Energies",
  description: "Rooftop and ground-mount solar for businesses and industrial units across Madhya Pradesh, sized to your load curve.",
};

const FAQ_ITEMS = [
  {
    q: "Does commercial rooftop solar qualify for a government subsidy?",
    a: "The PM Surya Ghar central subsidy applies to residential rooftop systems, not commercial or industrial ones. Commercial savings instead come from accelerated depreciation, GST input tax credit, and reduced power cost over the system's life.",
  },
  {
    q: "Can we go beyond our own rooftop capacity?",
    a: "Where roof area is limiting, we assess options like ground-mount on unused land, or open-access/group-captive solar depending on your load size and location.",
  },
  {
    q: "How is a commercial system sized differently from a home system?",
    a: "We size to your actual load curve — including shift patterns, daytime-heavy usage, and sanctioned demand — rather than average monthly consumption alone.",
  },
  {
    q: "What financing options are typically available?",
    a: "Options generally include upfront capex purchase, term loans against the asset, or third-party OPEX/PPA models where a developer owns the system and you pay for the power used. We can walk through which fits your balance sheet at the site visit.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink to-[#14284a] text-white pt-16 pb-14 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-sun/15 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center relative">
          <div>
            <div className="eyebrow mb-3.5">Commercial & Industrial Solar</div>
            <h1 className="font-display font-bold text-[clamp(30px,4vw,46px)] leading-[1.1] mb-5">
              Cut your business&apos;s power cost, not its uptime.
            </h1>
            <p className="text-[17px] text-white/78 max-w-md mb-7">
              We size systems to your actual load curve — shift patterns, sanctioned demand, and daytime usage — and
              model the ROI, depreciation, and payback before you commit.
            </p>
            <Link href="#lead-form" className="inline-flex items-center justify-center font-semibold text-[15px] px-6.5 py-3.5 rounded bg-sun text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(245,166,35,0.35)] transition-all">
              Request a Load Assessment
            </Link>
          </div>
          <div>
            <Calculator lockSegment="commercial" title="Commercial Savings Meter" defaultBill={25000} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="eyebrow mb-3.5">Built for MP businesses</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">
              What we model before you sign anything
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
            {[
              ["Load curve analysis", "We study your actual consumption pattern, not just the monthly total, to size a system that matches when you use power."],
              ["Financing fit", "Capex, term loan, or OPEX/PPA — we lay out the trade-offs against your cash flow before recommending one."],
              ["Depreciation modelling", "Accelerated depreciation and GST input credit are factored into your real payback period, not just system cost."],
              ["Uptime-first installation", "Work scheduled around your production hours, with minimal disruption to operations."],
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-4">
            <div className="eyebrow mb-3.5">Where the savings come from</div>
            <h2 className="font-display font-bold text-[26px] mb-4">
              Commercial solar economics, without the residential subsidy
            </h2>
          </div>
          <p className="text-[#48566e] text-[15px] max-w-2xl mb-8">
            Commercial and industrial rooftop systems don&apos;t qualify for the PM Surya Ghar residential subsidy —
            but they typically benefit from three other levers instead:
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              ["Accelerated depreciation", "Solar assets qualify for accelerated depreciation under the Income Tax Act, reducing taxable income in early years."],
              ["GST input credit", "Input tax credit on the system cost can be claimed against your output GST liability, subject to your tax advisor's confirmation."],
              ["Lower cost of power", "Displacing grid or diesel-backup power with self-generated solar typically lowers your effective per-unit cost over the system's life."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white rounded-md p-6 border border-ink/10">
                <h4 className="text-base font-semibold mb-2">{title}</h4>
                <p className="text-sm text-[#586378]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5">Common questions</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">Commercial FAQs</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="bg-sky py-20" id="lead-form">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(11,31,58,0.1)] p-8 md:p-11 grid md:grid-cols-2 gap-11">
            <div>
              <div className="eyebrow mb-3.5">Free, no-obligation</div>
              <h2 className="font-display text-2xl font-bold mb-3.5">Request a commercial load assessment</h2>
              <p className="text-[#586378] text-sm">
                Share your details and a consultant will follow up to understand your facility and load pattern.
              </p>
            </div>
            <LeadForm defaultPropertyType="Commercial / industrial" />
          </div>
        </div>
      </section>
    </>
  );
}
