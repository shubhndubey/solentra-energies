"use client";

import { useState } from "react";

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-ink/10">
            <button
              className="w-full text-left bg-none border-none cursor-pointer py-5 flex justify-between items-center font-display text-base font-semibold text-ink"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.q}
              <span className={`font-mono text-xl text-azure transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "300px" : "0px" }}
            >
              <p className="pb-5 text-sm text-[#586378] max-w-xl">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
