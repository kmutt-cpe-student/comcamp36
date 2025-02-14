import { TextShimmer } from "@/components/text/text-shimmer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

export interface faqsProps {
  id: string;
  title: string;
  content: string;
}

const FaqAccordion = ({ id, title, content }: faqsProps) => {
  return (
    <Accordion
      className="divide-dimgray-1 flex w-full max-w-[80rem] flex-col divide-y"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <AccordionItem
        key={id}
        value={id}
        className="border-b-dimgray-1 py-4 last:border-b-[1px]"
      >
        <AccordionTrigger className="group w-full text-left text-zinc-50 group-hover:text-red-500">
          <div className="flex items-center justify-between text-xl">
            <TextShimmer
              duration={1.5}
              className="cursor-pointer text-xl font-medium transition-colors [--base-color:var(--color-white)] [--base-gradient-color:var(--color-white)] group-hover:[--base-color:var(--color-vermilion)] group-hover:[--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-white)] dark:[--base-gradient-color:var(--color-white)]"
            >
              {title}
            </TextShimmer>
            <Minus className="group-data-expanded:inline-block group-data-expanded:-rotate-180 hidden h-4 w-4 rotate-90 cursor-pointer text-zinc-50 transition-transform duration-200" />
            <Plus className="group-data-expanded:hidden h-4 w-4 cursor-pointer text-zinc-50 transition-transform duration-200" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-dimgray-special pl-5 pt-1">• {content}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default FaqAccordion;
