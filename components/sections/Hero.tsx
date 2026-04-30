import React from "react";
import { landingPageData } from "@/data/landing-page";
import { Button } from "@/components/ui/Button";
import { Section } from "../ui/Section";
import Image from "next/image";
import { Images } from "@/utils/Images";


export const Hero: React.FC = () => {
  const { hero } = landingPageData;

  return (
    <Section id="hero" spacing="sm" className="mt-28" >
      <div className="flex items-center gap-4">
        <div className="flex -space-x-4 ">
          {/* {hero.profiles.map((p, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white overflow-hidden shadow-sm" />
          ))} */}
          <Image src={Images.heroTriple} alt="hero's triple " width={100} height={100} />
        </div>
        <span className="text-zinc-900 font-bold uppercase tracking-widest text-sm">{hero.date}</span>
      </div>
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-black leading-[1.05] my-10">
        {hero.title}
      </h1>
      <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed font-medium">
        {hero.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Button size="lg" className="bg-red-600 hover:bg-red-700 h-10 px-8  text-xs font-bold uppercase tracking-widest shadow-lg shadow-red-200">
          {hero.ctaPrimary.label}
        </Button>
        <Button variant="outline" size="lg" className="h-10 px-8 text-xs font-bold uppercase tracking-widest border-2 border-black">
          {hero.ctaSecondary.label}
        </Button>
      </div>
    </Section>
  );
};
