
import React from "react";

export const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => (
  <div
    className={`rounded-xl border border-zinc-200 px-5 py-4 cursor-pointer transition-all ${isOpen ? "bg-white shadow-sm" : "bg-zinc-50 hover:bg-zinc-100"
      }`}
    onClick={onToggle}
  >
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium text-black">{question}</span>
      <span className="flex-shrink-0 text-xl text-zinc-500 leading-none">
        {isOpen ? "−" : "+"}
      </span>
    </div>
    {isOpen && (
      <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{answer}</p>
    )}
  </div>
);

