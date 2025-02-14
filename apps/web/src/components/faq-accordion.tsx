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
      className="border-b-dimgray-special/20 flex w-full max-w-[80rem] flex-col border-b"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <AccordionItem key={id} value={id} className="border-0 py-4">
        <AccordionTrigger className="group w-full text-left text-zinc-50 group-hover:text-red-500">
          <div className="flex cursor-pointer items-center justify-between text-xl">
            <TextShimmer
              duration={1.5}
              className="text-xl font-medium transition-colors [--base-color:var(--color-white)] [--base-gradient-color:var(--color-white)] group-hover:[--base-color:var(--color-vermilion)] group-hover:[--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-white)] dark:[--base-gradient-color:var(--color-white)]"
            >
              {title}
            </TextShimmer>
            <Minus className="group-data-expanded:inline-block group-data-expanded:-rotate-180 text-dimgray-special hidden size-5 rotate-90 cursor-pointer transition-transform duration-200" />
            <Plus className="group-data-expanded:hidden text-dimgray-special/20 size-5 cursor-pointer transition-transform duration-200" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-dimgray-special/80 px-16 pl-5 pt-1">• {content}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default FaqAccordion;
