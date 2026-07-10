// Shared, transparent pricing model for indicative city-page tables.
// These are Solentra's own indicative assumptions, not a specific quote —
// every place this is used on the site says so.

export const SYSTEM_SIZES = [2, 3, 4, 5, 10];

const BASE_TARIFF = 7; // ₹/unit, blended assumption for MP domestic tariff slabs
const YIELD_PER_KW = 1400; // kWh generated per kW per year, MP average
const TARIFF_ESCALATION = 0.03; // annual grid tariff increase assumption
const PANEL_DEGRADATION = 0.01; // annual panel output degradation assumption

export function ratePerKw(kw) {
  if (kw <= 2) return 62000;
  if (kw <= 3) return 58000;
  if (kw <= 5) return 54000;
  return 50000;
}

export function systemCost(kw) {
  return kw * ratePerKw(kw);
}

export function subsidyFor(kw) {
  if (kw <= 1) return 30000 * kw;
  if (kw <= 2) return 30000 + 30000 * (kw - 1);
  return 78000; // capped for 3kW and above, residential
}

export function priceWithSubsidy(kw) {
  return systemCost(kw) - subsidyFor(kw);
}

export function annualGeneration(kw) {
  return Math.round(kw * YIELD_PER_KW);
}

export function savingsOver25Years(kw) {
  let total = 0;
  let gen = annualGeneration(kw);
  let tariff = BASE_TARIFF;
  for (let year = 1; year <= 25; year++) {
    total += gen * tariff;
    gen *= 1 - PANEL_DEGRADATION;
    tariff *= 1 + TARIFF_ESCALATION;
  }
  return Math.round(total);
}

export function inr(n) {
  const absN = Math.abs(n);
  if (absN >= 100000) {
    return "₹" + (n / 100000).toFixed(2).replace(/\.00$/, "") + " lakh";
  }
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export function pricingTable() {
  return SYSTEM_SIZES.map((kw) => ({
    kw,
    withoutSubsidy: systemCost(kw),
    subsidy: subsidyFor(kw),
    withSubsidy: priceWithSubsidy(kw),
    savings25: savingsOver25Years(kw),
    annualGeneration: annualGeneration(kw),
  }));
}
