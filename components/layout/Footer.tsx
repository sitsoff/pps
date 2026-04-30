import React from "react";
import { landingPageData } from "@/data/landing-page";
import Image from "next/image";

export const Footer: React.FC = () => {
  const { footer } = landingPageData;
  const { tagline, sections, copyright } = footer
  return (
    <footer className="bg-[#111] text-white">
      <div className=" px-24 py-14">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="flex flex-col gap-4">
            <div className=" relative w-24 h-24  rounded-sm flex items-center justify-center overflow-hidden">
              <Image src={footer.logo} alt="Logo" fill className="w-full h-full object-contain" />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{tagline}</p>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="font-bold text-white text-sm">{section.title}</h4>
              <nav className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-zinc-800">
          <p className="text-zinc-500 text-xs">{copyright}</p>
        </div>
      </div>

    </footer>
  );
};
