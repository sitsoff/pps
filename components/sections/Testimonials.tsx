"use client"
import React, { useState } from "react";
import { landingPageData } from "@/data/landing-page";
import { Section } from "@/components/ui/Section";
import { Icons } from "@/utils/Icons";
import Image from "next/image";
import RoundedButton from "../ui/RoundedButton";

export const Testimonials: React.FC = () => {
  const { testimonials } = landingPageData;
  const [current, setCurrent] = useState(0);

  // const prev = () =>
  //   setCurrent((c) => (c - 1 + testimonials.items.length) % testimonials.items.length);
  // const next = () =>
  //   setCurrent((c) => (c + 1) % testimonials.items.length);

  const item = testimonials.items[current];
  const nextItem = testimonials.items[(current + 1) % testimonials.items.length];

  return (
    <Section id="testimonials" spacing="sm" className="bg-white overflow-hidden">
      <div className="flex flex-col gap-6 md:gap-8">

        {/* Header row */}
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col gap-1 max-w-lg">
            <span className="text-red-600 font-bold uppercase text-xs tracking-wide">
              {testimonials.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              {testimonials.title}
            </h2>
            <p className="text-zinc-500 text-sm md:text-base mt-1">{testimonials.subtitle}</p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 ml-4">
            <RoundedButton size="md" variant="secondary" icon={Icons.LeftArrow} />
            <RoundedButton size="md" variant="secondary" icon={Icons.RightArrow} />
          </div>
        </div>

        {/* Cards row */}
        <div className="flex gap-4 md:gap-6 items-stretch">

          {/* ── Active card ── */}
          <div className="flex flex-col sm:flex-row gap-4 bg-gray-100 rounded-xl p-4 md:p-5 flex-1 min-w-0">

            {/* Photo — full width on mobile, fixed sidebar on sm+ */}
            <div className="relative w-full h-52 sm:h-auto sm:w-40 md:w-48 flex-shrink-0 rounded-xl overflow-hidden bg-zinc-200">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Quote + author */}
            <div className="flex flex-col justify-between gap-3 min-w-0">
              <div className="flex flex-col">
                <span className="text-black text-5xl md:text-7xl font-serif leading-none">“</span>
                <p className="text-base md:text-xl lg:text-3xl font-medium text-black leading-snug">
                  {item.text}
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-3 pt-2 border-t border-zinc-200">
                <p className="font-bold text-black text-sm">{item.name}</p>
                <span className="text-zinc-300 text-xs">|</span>
                <p className="text-zinc-400 text-xs">{item.role}</p>
              </div>
            </div>
          </div>

          {/* ── Peeking next card — hidden on mobile, visible md+ ── */}
          <div
            className="hidden md:block relative flex-shrink-0 w-44 lg:w-56 rounded-xl overflow-hidden bg-zinc-400 cursor-pointer"

          >
            {nextItem.image ? (
              <Image
                fill
                src={nextItem.image}
                alt={nextItem.name}
                className="object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-zinc-300" />
            )}
            <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors" />
          </div>

        </div>

        {/* Mobile dot indicators */}
        <div className="flex justify-center gap-2 md:hidden">
          {testimonials.items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-red-600" : "bg-zinc-300"
                }`}
            />
          ))}
        </div>

      </div>
    </Section>
  );
}