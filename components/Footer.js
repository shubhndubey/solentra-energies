import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-14 pb-7 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-11">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 font-display font-bold text-lg text-white mb-3.5">
              <span className="w-7 h-7 rounded-sm bg-gradient-to-br from-sun to-azure shrink-0" />
              Solentra Energies
            </div>
            <p className="max-w-xs text-white/55">
              Rooftop solar design and installation for homes, societies, and businesses across Madhya Pradesh.
            </p>
          </div>
          <div>
            <h5 className="font-display text-xs uppercase tracking-wider text-white mb-4">Offerings</h5>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/residential" className="hover:text-sun transition-colors">Residential Solar</Link></li>
              <li><Link href="/commercial" className="hover:text-sun transition-colors">Commercial & Industrial</Link></li>
              <li><Link href="/housing-societies" className="hover:text-sun transition-colors">Housing Societies</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-display text-xs uppercase tracking-wider text-white mb-4">Company</h5>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/" className="hover:text-sun transition-colors">Home</Link></li>
              <li><Link href="/cities" className="hover:text-sun transition-colors">Cities We Serve</Link></li>
              <li><Link href="/contact" className="hover:text-sun transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-display text-xs uppercase tracking-wider text-white mb-4">Contact</h5>
            <ul className="flex flex-col gap-2.5">
              <li className="text-sun font-medium">+91-XXXXXXXXXX</li>
              <li className="text-sun font-medium">hello@solentraenergies.in</li>
              <li className="text-sun font-medium">Badnagar, Madhya Pradesh (Head Office)</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-2.5 text-xs text-white/50">
          <span>© 2026 Solentra Energies. All rights reserved.</span>
          <span>MNRE-empanelled installer · PM Surya Ghar registered vendor</span>
        </div>
      </div>
    </footer>
  );
}
