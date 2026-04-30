import React from "react";
import { landingPageData } from "@/data/landing-page";
import { Section } from "@/components/ui/Section";
import { TeamCard } from "@/components/ui/TeamCards";


export const Team: React.FC = () => {
  const { team } = landingPageData;

  return (
    <Section
      id="team"
      className="bg-white pb-32"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs uppercase">Scouts</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black max-w-2xl leading-[1.1]">
            {team.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member, index) => (
            <div key={index} className="flex flex-col bg-zinc-950  rounded-lg shadow-xl  cursor-pointer hover:-translate-y-1 transition-all duration-300">

              <TeamCard name={member.name} role={member.role} image={member.image} />

            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
