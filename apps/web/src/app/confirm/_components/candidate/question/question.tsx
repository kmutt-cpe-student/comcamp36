/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

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

function formatCodeBlocks(text: string) {
  if (!text.includes("```")) {
    return <>{text}</>;
  }

  const segments = [];
  let lastIndex = 0;
  let inCodeBlock = false;
  let currentCode = "";
  let currentLanguage = "javascript";

  // Find all instances of ```
  const codeBlockMarkers = [...text.matchAll(/```/g)];

  for (let i = 0; i < codeBlockMarkers.length; i++) {
    const marker = codeBlockMarkers[i];
    const index = marker.index!;

    if (!inCodeBlock) {
      // Add text before code block
      if (index > lastIndex) {
        segments.push(
          <span
            key={`text-${i}`}
            dangerouslySetInnerHTML={{
              __html: text.substring(lastIndex, index),
            }}
          />,
        );
      }
      inCodeBlock = true;
      // Check for language specifier
      const languageMatch = text.substring(index + 3).match(/^\s*([a-zA-Z]+)/);

      if (languageMatch) {
        currentLanguage = languageMatch[1];
        lastIndex = index + 3 + languageMatch[0].length;
      } else {
        lastIndex = index + 3;
      }
    } else {
      // Add the code block
      currentCode = text.substring(lastIndex, index).trim();
      segments.push(
        <div key={`code-${i}`} className="my-2 flex w-full justify-center">
          <SyntaxHighlighter
            language={currentLanguage}
            style={dracula}
            className="w-auto max-w-full rounded-md"
            customStyle={{
              fontWeight: "normal",
              padding: "1rem",
              borderRadius: "0.375rem",
              textAlign: "left",
            }}
          >
            {currentCode.replace(/^\s*[a-zA-Z]+\n/, "")}
          </SyntaxHighlighter>
        </div>,
      );
      inCodeBlock = false;
      currentLanguage = "javascript";
    }
    lastIndex = index + 3; // Skip past the ```
  }

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push(
      <span
        key={`text-end`}
        dangerouslySetInnerHTML={{ __html: text.substring(lastIndex) }}
      />,
    );
  }

  return segments;
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
        <h2 className="text-2xl font-semibold normal-case">
          {formatCodeBlocks(
            typeof question === "string" ? question : question.content,
          )}
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
            className="h-auto min-h-14 w-full flex-1 shrink-0 justify-start whitespace-normal py-3 text-left text-lg normal-case"
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
              formatCodeBlocks(
                typeof choice === "string" ? choice : choice.content,
              )
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}
