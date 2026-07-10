import Link from "next/link";
import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";
import Faq from "@/components/Faq";

export const metadata = {
  title: "Solar for Housing Societies & RWAs — Solentra Energies",
  description: "Rooftop solar for housing societies and RWAs across Madhya Pradesh, with committee-ready proposals and subsidy support.",
};

const FAQ_ITEMS = [
  {
    q: "Who decides for the whole society?",
    a: "We prepare a proposal with sizing, cost, subsidy, and projected common-area savings that your managing committee can present and vote on at a general body meeting.",
  },
  {
    q: "Can individual flat owners install their own systems too?",
    a: "Yes, subject to society approval and available terrace space allocation — some societies run a combined common-area system alongside individually owned balcony or terrace systems.",
  },
  {
    q: "What does the society actually save on?",
    a: "Typically common-area loads such as lifts, corridor and compound lighting, water pumps, and clubhouse consumption — billed separately from individual flat meters.",
  },
  {
    q: "How is subsidy handled for group housing societies?",
    a: "Group Housing Societies/RWAs can access a separate subsidy component for common facilities under the PM Surya Ghar scheme, distinct from the individual residential slab. We calculate your society's exact eligibility during the site visit.",
  },
];

export default function HousingSocietiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink to-[#14284a] text-white pt-16 pb-14 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-sun/15 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center relative">
          <div>
            <div className="eyebrow mb-3.5">Housing Societies & RWAs</div>
            <h1 className="font-display font-bold text-[clamp(30px,4vw,46px)] leading-[1.1] mb-5">
              A proposal your committee can actually approve.
            </h1>
            <p className="text-[17px] text-white/78 max-w-md mb-7">
              Getting a housing society to agree on anything is hard. We present the sizing, cost, and subsidy math
              directly to your managing committee, in plain numbers.
            </p>
            <Link href="#lead-form" className="inline-flex items-center justify-center font-semibold text-[15px] px-6.5 py-3.5 rounded bg-sun text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(245,166,35,0.35)] transition-all">
              Request a Committee Proposal
            </Link>
          </div>
          <div>
            <Calculator lockSegment="society" title="Society Savings Meter" defaultBill={12000} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="eyebrow mb-3.5">Built for MP societies</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">
              What makes society projects different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-md overflow-hidden">
            {[
              ["Committee-ready proposal", "A single document with sizing, cost, subsidy, and savings your managing committee can present at a general body meeting."],
              ["Common-area focus", "Sized around lifts, lighting, pumps, and clubhouse load — the consumption a society actually controls directly."],
              ["Terrace space planning", "We map available terrace area against every stakeholder's expectations, including future EV charging points if relevant."],
              ["Single point of contact", "One Solentra coordinator manages the project from committee approval through to commissioning."],
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
            <h2 className="font-display font-bold text-[26px] mb-4">Subsidy for group housing societies</h2>
            <p className="text-[#48566e] text-[15px] mb-3.5">
              PM Surya Ghar includes a separate incentive component for Group Housing Societies and Resident Welfare
              Associations covering common facilities, in addition to what individual flat owners can claim on their
              own meters.
            </p>
            <p className="text-sm text-[#48566e]">
              Exact eligibility depends on your society&apos;s size and common-load metering setup.{" "}
              <Link href="#lead-form" className="text-azure font-semibold">Get your society&apos;s number →</Link>
            </p>
          </div>
          <div className="bg-white rounded-md p-7 border border-ink/10 shadow-[0_6px_24px_rgba(11,31,58,0.08)]">
            <h4 className="font-display font-semibold text-base mb-4">What we bring to the committee meeting</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#48566e]">
              {[
                "Common-load audit with 12 months of billing data",
                "Recommended system size and terrace layout",
                "Subsidy eligibility and net-metering process, explained plainly",
                "Payback period and projected savings per flat's maintenance share",
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

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="eyebrow mb-3.5">Common questions</div>
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] leading-tight">Housing Society FAQs</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="bg-sky py-20" id="lead-form">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(11,31,58,0.1)] p-8 md:p-11 grid md:grid-cols-2 gap-11">
            <div>
              <div className="eyebrow mb-3.5">Free, no-obligation</div>
              <h2 className="font-display text-2xl font-bold mb-3.5">Request a proposal for your society</h2>
              <p className="text-[#586378] text-sm">
                Share your details and we&apos;ll prepare a committee-ready proposal for your next general body meeting.
              </p>
            </div>
            <LeadForm defaultPropertyType="Housing society / RWA" />
          </div>
        </div>
      </section>
    </>
  );
}
