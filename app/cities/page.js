import Link from "next/link";
import { citiesByZone } from "@/lib/cities";

export const metadata = {
  title: "Cities We Serve — Solentra Energies",
  description: "Rooftop solar installation cities across Madhya Pradesh's Central and Western zones, served by Solentra Energies.",
};

export default function CitiesPage() {
  const zones = citiesByZone();

  return (
    <section className="bg-sky py-20 min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <div className="eyebrow mb-3.5">Coverage</div>
          <h1 className="font-display font-bold text-[clamp(28px,3.6vw,40px)] leading-tight">
            Rooftop solar across Madhya Pradesh
          </h1>
          <p className="text-[#48566e] text-base mt-3.5">
            Solentra Energies is organised into two operating zones across MP. Pick your city for local pricing,
            testimonials, and FAQs — or book a survey directly.
          </p>
        </div>

        {zones.map(({ zone, cities }) => (
          <div key={zone.code} className="mb-14 last:mb-0">
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="font-display text-xl font-bold">{zone.code}</h2>
              <span className="text-sm text-[#586378] font-mono uppercase tracking-wider">{zone.label}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/rooftop-solar-in-${city.slug}`}
                  className="group block bg-white border border-ink/10 rounded-md p-6 hover:border-azure hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-bold">{city.name}</h3>
                    {city.isHq && (
                      <span className="text-[11px] font-mono font-semibold text-sun border border-sun rounded-full px-2.5 py-0.5">
                        HQ
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#586378] mb-4">{city.tagline}</p>
                  <span className="text-sm font-semibold text-azure group-hover:translate-x-1 inline-block transition-transform">
                    View details →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
