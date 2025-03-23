/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";

interface ImageContent {
  type: "image";
  content: string;
  altText?: string;
  caption?: string;
}

interface TextContent {
  type: "text";
  content: string;
}

type ImageOrText = ImageContent | TextContent;

export interface QuestionProps {
  question: string | ImageOrText;
  choices: string[] | ImageOrText[];
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
      {typeof question !== "string" && question.type === "image" ? (
        <figure>
          <img
            src={question.content}
            alt={question.altText}
            className="h-auto w-full"
          />
          {question.caption && (
            <figcaption className="text-dimgray text-sm">
              {question.caption}
            </figcaption>
          )}
        </figure>
      ) : (
        <h2 className="text-2xl font-semibold">
          {typeof question === "string" ? question : question.content}
        </h2>
      )}
      <div className="grid w-full grid-cols-1 gap-3">
        {choices.map((choice, index) => (
          <Button
            key={index}
            variant={
              selected ===
              (typeof choice === "string" ? choice : choice.content)
                ? "default"
                : "secondary"
            }
            onClick={() =>
              onSelect(typeof choice === "string" ? choice : choice.content)
            }
            aria-pressed={
              selected ===
              (typeof choice === "string" ? choice : choice.content)
            }
            className="h-auto min-h-14 w-full flex-1 shrink-0 justify-start whitespace-normal py-3 text-left text-lg"
          >
            {typeof choice !== "string" && choice.type === "image" ? (
              <figure>
                <img
                  src={choice.content}
                  alt={choice.altText}
                  className="pointer-events-none h-auto w-full"
                />
                {choice.caption && (
                  <figcaption className="text-dimgray text-sm">
                    {choice.caption}
                  </figcaption>
                )}
              </figure>
            ) : (
              <>{typeof choice === "string" ? choice : choice.content}</>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}
