import React from "react";
import { Section } from "@/components/ui/Section";
import { landingPageData } from "@/data/landing-page";

export const Registration: React.FC = () => {
  const { badge, title, points, footnote, form } = landingPageData.registration;

  return (
    <Section id="registration" className="text-white" spacing="md">
      <div className=" bg-black  p-10 flex flex-col lg:flex-row gap-0 items-stretch min-h-[360px]">
        {/* ── Left: info side ── */}
        <div className="flex-1 flex flex-col gap-8 pr-0 lg:pr-12 py-6">
          {/* Badge + Title */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-400 text-sm">{badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-sm">
              {title}
            </h2>
          </div>

          {/* Feature points */}
          <div className="flex flex-col gap-6">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                {/* Icon circle */}
                <div className="flex-shrink-0 p-2 rounded-full bg-zinc-700 flex items-center justify-center text-white text-sm font-bold">
                  <point.icon className="text-xl" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-white text-base">{point.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="text-zinc-500 text-xs italic leading-relaxed max-w-xs mt-auto">
            {footnote}
          </p>
        </div>

        {/* ── Right: form card ── */}
        <div className="flex-1 flex items-stretch">
          <div className="bg-white w-full rounded-sm shadow-xl flex flex-col gap-5 p-8 text-black justify-center">

            {/* Form header */}
            <div className="flex flex-col items-center gap-1 mb-1">
              <h3 className="text-xl font-bold text-black">{form.title}</h3>
              <p className="text-zinc-500 text-sm">
                {form.signinText}{" "}
                <a href="#" className="font-semibold text-black underline underline-offset-2">
                  {form.signinLink}
                </a>
              </p>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-3">
              {form.fields.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border border-zinc-300 rounded-sm px-4 py-3 text-sm text-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all bg-white"
                />
              ))}
            </div>

            {/* Terms */}
            <p className="text-zinc-500 text-xs text-center leading-relaxed">
              {form.terms.prefix}
              <span className="font-semibold text-black">{form.terms.termsLink}</span>
              {form.terms.separator}
              <span className="font-semibold text-black">{form.terms.privacyLink}</span>
            </p>

            {/* CTA */}
            <button className="w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-bold py-4 text-sm tracking-wide rounded-sm">
              {form.cta}
            </button>
          </div>
        </div>

      </div>
    </Section>
  );
};