import React from "react";
import { landingPageData } from "@/data/landing-page";
import { HiPlay } from "react-icons/hi";
import RoundedButton from "../ui/RoundedButton";
import { Icons } from "@/utils/Icons";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import Image from "next/image";

export const OfficialTryouts: React.FC = () => {
  const { officialTryouts } = landingPageData;

  return (
    <Section id="tryouts" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-8">
          <Reveal direction="right" delay={0}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
              {officialTryouts.title}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <p className="text-zinc-500 text-lg leading-relaxed">
              {officialTryouts.description}
            </p>
          </Reveal>
          <Reveal direction="up" delay={220}>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-black uppercase tracking-widest text-xl">Matches</h4>
              <div className="space-y-4">
                {officialTryouts.matches}
              </div>
            </div>
          </Reveal>
          <Reveal direction="up" delay={320}>
            <a href="/pending" className="text-red-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 self-start border-b-2 border-red-500 pb-1">
              Read more
            </a>
          </Reveal>
        </div>
        <Reveal direction="left" delay={150} className="flex-1 w-full relative group">
          <div className="w-full h-full flex items-center justify-end mb-16">
            <div className=" grid grid-cols-2  gap-6">
              <RoundedButton size="md" variant="secondary" icon={Icons.LeftArrow} />
              <RoundedButton size="md" variant="secondary" icon={Icons.RightArrow} />
            </div>
          </div>
          <div className="aspect-[5/3] bg-zinc-100 rounded-sm overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Image src={officialTryouts.videoPlaceholder} alt="" fill />
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <HiPlay className="h-8 w-8 text-black ml-1" />
              </div>
            </div>
            {/* Aspect ratio holder */}
          </div>
          <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-red-600 rounded-lg -z-10" />
        </Reveal>
      </div>
    </Section>
  );
};
