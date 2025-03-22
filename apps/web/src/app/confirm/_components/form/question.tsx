"use client";

import { Button } from "@/components/ui/button";

interface QuestionProps {
  question: string;
  choices: string[];
  selected: string | null;
  onSelect: (choice: string) => void;
}

export function Question({
  question,
  choices,
  selected,
  onSelect,
}: QuestionProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">{question}</h2>
      <div className="grid w-full grid-cols-1 gap-3">
        {choices.map((choice, index) => (
          <Button
            key={index}
            variant={selected === choice ? "default" : "secondary"}
            onClick={() => onSelect(choice)}
            aria-pressed={selected === choice}
            className="h-auto min-h-14 w-full flex-1 shrink-0 justify-start whitespace-normal py-3 text-left text-lg"
          >
            {choice}
          </Button>
        ))}
      </div>
    </div>
  );
}
