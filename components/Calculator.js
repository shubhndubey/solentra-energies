"use client";

import { useMemo, useState } from "react";

const SEGMENTS = [
  { key: "home", label: "Home", yieldKwh: 1400, costPerKw: 58000 },
  { key: "society", label: "Society", yieldKwh: 1450, costPerKw: 52000 },
  { key: "commercial", label: "Commercial", yieldKwh: 1500, costPerKw: 47000 },
];

function inr(n) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export default function Calculator({ lockSegment, defaultBill = 4000, title = "Savings Meter" }) {
  const [segmentKey, setSegmentKey] = useState(lockSegment || "home");
  const [bill, setBill] = useState(defaultBill);

  const segment = SEGMENTS.find((s) => s.key === segmentKey) || SEGMENTS[0];

  const results = useMemo(() => {
    const tariff = 10; // ₹/unit, assumed average for MP domestic tariff slabs
    const monthlyUnits = bill / tariff;
    const yearlyUnits = monthlyUnits * 12;
    let sizeKw = yearlyUnits / segment.yieldKwh;
    sizeKw = Math.max(1, Math.round(sizeKw * 2) / 2);

    const systemCost = sizeKw * segment.costPerKw;

    let subsidy = 0;
    if (segmentKey === "commercial") {
      subsidy = 0; // commercial doesn't qualify for the residential central subsidy
    } else if (sizeKw <= 1) {
      subsidy = 30000 * sizeKw;
    } else if (sizeKw <= 2) {
      subsidy = 30000 + 30000 * (sizeKw - 1);
    } else {
      subsidy = 78000;
    }

    const netCost = systemCost - subsidy;
    const monthlySavings = bill * 0.9;
    const paybackYears = netCost / (monthlySavings * 12);

    return { sizeKw, subsidy, systemCost, monthlySavings, paybackYears };
  }, [bill, segment, segmentKey]);

  const min = 800;
  const max = 60000;
  const pct = ((bill - min) / (max - min)) * 100;

  return (
    <div className="bg-white text-ink rounded-md shadow-[0_30px_60px_rgba(0,0,0,0.35)] p-7 border border-white/5">
      <div className="flex justify-between items-baseline mb-1.5">
        <h3 className="text-sm uppercase tracking-wider font-semibold">{title}</h3>
        <span className="pulse-dot font-mono text-[11px] text-ok flex items-center gap-1.5">Live estimate</span>
      </div>
      <p className="text-[13px] text-[#5a6b84] mb-5">Move the slider to your average monthly bill.</p>

      {!lockSegment && (
        <div className="flex gap-2 mb-5">
          {SEGMENTS.map((s) => (
            <button
              key={s.key}
              onClick={() => setSegmentKey(s.key)}
              className={`flex-1 text-center text-[13px] font-semibold py-2.5 px-1 rounded border transition-colors ${
                segmentKey === s.key
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-ink border-ink/10 hover:border-ink/30"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      <div className="mb-5">
        <label className="flex justify-between text-[13px] font-semibold mb-2.5">
          Average monthly bill <b className="font-mono text-azure text-[15px]">{inr(bill)}</b>
        </label>
        <input
          type="range"
          min={min}
          max={max}
          step={200}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          style={{ "--fill": `${pct}%` }}
        />
      </div>

      <div className="bg-ink text-white rounded p-5 grid grid-cols-2 gap-x-2.5 gap-y-4">
        <div>
          <div className="text-[10.5px] uppercase tracking-wider text-white/55 mb-1">Suggested system</div>
          <div className="font-mono font-bold text-xl text-sun tabular-nums">{results.sizeKw} kW</div>
        </div>
        <div>
          <div className="text-[10.5px] uppercase tracking-wider text-white/55 mb-1">
            {segmentKey === "commercial" ? "Central subsidy" : "Central subsidy*"}
          </div>
          <div className="font-mono font-bold text-xl text-sun tabular-nums">
            {segmentKey === "commercial" ? "Not applicable" : inr(results.subsidy)}
          </div>
        </div>
        <div>
          <div className="text-[10.5px] uppercase tracking-wider text-white/55 mb-1">Est. system cost</div>
          <div className="font-mono font-bold text-xl text-sun tabular-nums">{inr(results.systemCost)}</div>
        </div>
        <div>
          <div className="text-[10.5px] uppercase tracking-wider text-white/55 mb-1">Payback period</div>
          <div className="font-mono font-bold text-xl text-sun tabular-nums">~{results.paybackYears.toFixed(1)} yrs</div>
        </div>
        <div className="col-span-2 border-t border-white/10 pt-3.5">
          <div className="text-[10.5px] uppercase tracking-wider text-white/55 mb-1">Estimated monthly savings</div>
          <div className="font-mono font-bold text-2xl text-ok tabular-nums">{inr(results.monthlySavings)} / month</div>
        </div>
      </div>
      <p className="text-[11.5px] text-[#8091a8] mt-3.5 leading-relaxed">
        {segmentKey === "commercial"
          ? "Commercial rooftop systems aren't covered by the residential PM Surya Ghar subsidy. Savings instead come from accelerated depreciation, GST input credit, and long-term tariff savings — confirmed at your site visit."
          : "Based on the PM Surya Ghar Muft Bijli Yojana slab structure. Figures are indicative — your exact quote is confirmed after a free rooftop survey and DISCOM feasibility check."}
      </p>
    </div>
  );
}
