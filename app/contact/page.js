import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Contact — Solentra Energies",
  description: "Get in touch with Solentra Energies for rooftop solar across Madhya Pradesh.",
};

export default function ContactPage() {
  return (
    <section className="bg-sky py-20 min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <div className="eyebrow mb-3.5">Get in touch</div>
          <h1 className="font-display font-bold text-[clamp(28px,3.6vw,40px)] leading-tight">
            Talk to a Solentra solar consultant
          </h1>
          <p className="text-[#48566e] text-base mt-3.5">
            Whether it&apos;s a home, a business, or a housing society — tell us about your property and we&apos;ll
            get back to you within 48 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="flex flex-col gap-6">
            <ContactCard label="Phone" value="+91-XXXXXXXXXX" />
            <ContactCard label="Email" value="hello@solentraenergies.in" />
            <ContactCard label="Office" value="Badnagar, Madhya Pradesh (HQ)" />
            <ContactCard label="Hours" value="Mon – Sat, 9:30 AM – 6:30 PM" />
          </div>

          <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(11,31,58,0.1)] p-8 md:p-11">
            <h2 className="font-display text-xl font-bold mb-1.5">Request a free site visit</h2>
            <p className="text-[#586378] text-sm mb-6">
              Fill this in and a consultant will call to confirm a convenient time.
            </p>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value }) {
  return (
    <div className="bg-white rounded-md border border-ink/10 p-6">
      <div className="text-[11px] uppercase tracking-wider text-azure font-mono font-semibold mb-2">{label}</div>
      <div className="text-lg font-display font-semibold text-sun">{value}</div>
    </div>
  );
}
