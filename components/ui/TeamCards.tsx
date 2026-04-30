import React from "react";
import { Card } from "./Card";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export const TeamCard: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-80 overflow-hidden p-0">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex flex-col items-start justify-center  h-full w-full text-zinc-400 font-medium">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-400 text-sm font-medium">{role}</p>
        </div>

      </div>
    </div>
  );
};

interface TestimonialProps {
  name: string;
  text: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, image }) => {
  return (
    <Card className="flex flex-col gap-6 !p-8 bg-zinc-50 border-none shadow-none">
      <div className="text-red-600 text-5xl font-serif">“</div>
      <p className="text-xl text-zinc-800 italic leading-relaxed">
        {text}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden" />
        <div>
          <p className="font-bold text-black">{name}</p>
          <p className="text-zinc-500 text-sm">Elite Participant</p>
        </div>
      </div>
    </Card>
  );
};
