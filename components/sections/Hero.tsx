import React from "react";
import { landingPageData } from "@/data/landing-page";
import { Button } from "@/components/ui/Button";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import Image from "next/image";
import { Images } from "@/utils/Images";


export const Hero: React.FC = () => {
  const { hero } = landingPageData;

  return (
    <Section id="hero" spacing="sm" className="mt-24" >
      {/* <Reveal direction="up" delay={0}>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4 ">
            <Image src={Images.heroTriple} alt="hero's triple " width={100} height={100} />
          </div>
          <span className="text-zinc-900 font-bold uppercase tracking-widest text-sm">{hero.date}</span>
        </div>
      </Reveal> */}
      <Reveal direction="up" delay={120}>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-black leading-[1.05] my-5">
          {hero.title}
        </h1>
      </Reveal>
      <Reveal direction="up" delay={240}>
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed font-medium">
          {hero.subtitle}
        </p>
      </Reveal>
      <Reveal direction="up" delay={360}>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="https://app.precisionplaysoccer.com/register" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 h-10 px-8  text-xs font-bold uppercase tracking-widest shadow-lg shadow-red-200">
              {hero.ctaPrimary.label}
            </Button>
          </a>
          {/* <a href={hero.ctaSecondary.href}>
            <Button variant="outline" size="lg" className="h-10 px-8 text-xs font-bold uppercase tracking-widest border-2 border-black">
              {hero.ctaSecondary.label}
            </Button>
          </a> */}
        </div>
      </Reveal>
    </Section>
  );
};
