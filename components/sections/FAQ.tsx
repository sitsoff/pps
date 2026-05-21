"use client";
import React, { useState } from "react";
import { landingPageData } from "@/data/landing-page";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AccordionItem } from "@/components/ui/Accordion";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  const { faq } = landingPageData
  // Split items into two columns: left [0, 2], right [1, 3, 4]
  const leftItems = [faq.items[0], faq.items[2]];
  const rightItems = [faq.items[1], faq.items[3], faq.items[4]];

  // Map back to original indices for open state tracking
  const leftIndices = [0, 2];
  const rightIndices = [1, 3, 4];

  return (
    <Section id="faq" spacing="md" className="bg-white">
      {/* Header */}
      <Reveal direction="up" delay={0}>
        <div className="flex flex-col items-center gap-2 mb-10">
          <span className="text-red-600 text-sm font-medium">{faq.badge}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
            {faq.title}
          </h2>
        </div>
      </Reveal>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-5xl mx-auto">
        {/* Left column */}
        <Reveal direction="right" delay={100} className="flex flex-col gap-3">
          {leftItems.map((item, i) => (
            <AccordionItem
              key={leftIndices[i]}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === leftIndices[i]}
              onToggle={() => toggle(leftIndices[i])}
            />
          ))}
        </Reveal>

        {/* Right column */}
        <Reveal direction="left" delay={200} className="flex flex-col gap-3">
          {rightItems.map((item, i) => (
            <AccordionItem
              key={rightIndices[i]}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === rightIndices[i]}
              onToggle={() => toggle(rightIndices[i])}
            />
          ))}
        </Reveal>
      </div>

      {/* More Questions CTA */}
      <Reveal direction="up" delay={300}>
        <div className="flex justify-center mt-10">
          <a href="/pending" className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-8 py-3 text-sm rounded-sm">
            More Questions
          </a>
        </div>
      </Reveal>
    </Section>
  );
};