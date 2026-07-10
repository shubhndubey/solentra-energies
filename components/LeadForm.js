"use client";

import { useState } from "react";

export default function LeadForm({ defaultPropertyType, defaultCity }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-8 px-2.5">
        <h3 className="font-display text-xl font-bold mb-2">Request received ✓</h3>
        <p className="text-[#586378] text-sm">A Solentra consultant will call you shortly to schedule your free site visit.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-3.5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <input type="text" placeholder="Full name" required className="input-field" />
        <input type="tel" placeholder="Mobile number" required pattern="[0-9]{10}" className="input-field" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <input
          type="text"
          placeholder="City / district in MP"
          defaultValue={defaultCity || ""}
          required
          className="input-field"
        />
        <input type="text" placeholder="PIN code" required pattern="[0-9]{6}" maxLength={6} className="input-field" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <select required defaultValue={defaultPropertyType || ""} className="input-field">
          <option value="" disabled>Property type</option>
          <option value="Home">Home</option>
          <option value="Housing society / RWA">Housing society / RWA</option>
          <option value="Commercial / industrial">Commercial / industrial</option>
        </select>
        <select required defaultValue="" className="input-field">
          <option value="" disabled>Average monthly bill</option>
          <option value="<1500">Less than ₹1,500</option>
          <option value="1500-2500">₹1,500 – ₹2,500</option>
          <option value="2500-4000">₹2,500 – ₹4,000</option>
          <option value="4000-8000">₹4,000 – ₹8,000</option>
          <option value=">8000">More than ₹8,000</option>
        </select>
      </div>
      <label className="flex items-start gap-2.5 text-[12.5px] text-[#586378]">
        <input type="checkbox" required className="mt-0.5" />
        I agree to be contacted by Solentra Energies about my enquiry.
      </label>
      <button type="submit" className="btn-primary mt-1">
        Book My Free Site Visit
      </button>
      <div className="text-[11.5px] text-[#7a869a] text-center">
        Details submitted securely. Our team will call within 48 hours.
      </div>

      <style jsx>{`
        .input-field {
          padding: 12px 14px;
          border: 1.5px solid rgba(11, 31, 58, 0.12);
          border-radius: 4px;
          font-size: 14px;
          background: var(--color-paper);
          color: var(--color-ink);
        }
        .input-field:focus {
          outline: 2px solid var(--color-azure);
          outline-offset: 1px;
          border-color: var(--color-azure);
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 26px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          background: var(--color-sun);
          color: var(--color-ink);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(245, 166, 35, 0.35);
        }
      `}</style>
    </form>
  );
}
