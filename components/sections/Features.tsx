import React from "react";
import { landingPageData } from "@/data/landing-page";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import Image from "next/image";

export const Features: React.FC = () => {
  const { features } = landingPageData;

  return (
    <div className="bg-[#f4f4f4] divide-y divide-zinc-200">
      {features.map((feature) => (
        <Section key={feature.id} id={feature.id} spacing="sm">
          <div className={`flex flex-col lg:flex-row gap-6 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
            <Reveal direction={feature.reverse ? 'left' : 'right'} delay={0} className="flex-1 w-full">
              <div className="aspect-[4/3] bg-zinc-200 rounded-sm overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-black/5" />
                <Image src={feature.image} alt="" fill />
              </div>
            </Reveal>
            <Reveal direction={feature.reverse ? 'right' : 'left'} delay={150} className="flex-1 flex flex-col gap-6">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs">{feature.badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black max-w-lg leading-tight">
                {feature.title}
              </h2>
              {feature.description && (
                <p className="text-zinc-600 text-lg leading-relaxed max-w-md">
                  {feature.description}
                </p>
              )}
              {feature.items && (
                <ul className="space-y-4">
                  {feature.items.map((item, i: number) => (
                    <li key={i} className="flex gap-3 items-center text-zinc-800 font-medium">
                      <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      {typeof item === 'string' ? item : item.label}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </Section>
      ))}
    </div>
  );
};
