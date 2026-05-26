import React from "react";
import { landingPageData } from "@/data/landing-page";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import RoundedButton from "../ui/RoundedButton";
import { Icons } from "@/utils/Icons";
import Image from "next/image";

export const Promise: React.FC = () => {
  const { promise } = landingPageData;

  return (
    <Section id="promise" className="bg-white" spacing="sm">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-4">
        <Reveal direction="right" delay={0} className="max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black ">
            &quot;{promise.title}&quot;
          </h2>
        </Reveal>
        <Reveal direction="up" delay={150} className="max-w-md flex flex-col gap-6">
          <p className="text-black text-sm leading-relaxed">
            {promise.description}
          </p>
          <a href={promise.moreLink.href} className="text-red-500 underline font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all">
            {promise.moreLink.label}
          </a>
        </Reveal>
        {/* <Reveal direction="left" delay={100}>
          <div className="grid grid-cols-2 gap-6">
            <RoundedButton size="md" variant="secondary" icon={Icons.LeftArrow} />
            <RoundedButton size="md" variant="secondary" icon={Icons.RightArrow} />
          </div>
        </Reveal> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promise.gallery.map((item, index) => (
          <Reveal key={index} direction="up" delay={index * 120}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-white/10 group-hover:bg-black/20 transition-all duration-300 z-10" />
              <Image src={item.image} alt={item.title} fill />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {item.description}
                </p>
              </div>
              <div className="absolute top-8 right-8 z-20 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-red-600" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </Section>
  );
};
