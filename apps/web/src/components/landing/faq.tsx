import { faqs } from "@/app/faq/faq";
import FaqAccordion from "@/components/faq-accordion";
import FadeObserverDiv from "@/components/landing/fade-div";
import { TextShimmer } from "@/components/text/text-shimmer";
import Link from "next/link";

function Faq() {
  return (
    <FadeObserverDiv
      className="flex h-fit w-full flex-col items-center justify-center py-[20rem] xl:scroll-mt-[-150px]"
      id="faq"
    >
      <h2 className="font-game-of-squid text-vermilion-1 capitalize">FAQs</h2>
      <div className="flex w-full max-w-[80rem] flex-col px-16">
        {faqs.slice(0, 12).map((faq) => (
          <FaqAccordion key={faq.id} {...faq} />
        ))}
      </div>
      <Link
        href="/faq"
        className="hover:text-vermilion pt-10 transition-colors"
      >
        <TextShimmer
          duration={1.2}
          className="cursor-pointer text-xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
        >
          FAQs เพิ่มเติม
        </TextShimmer>
      </Link>
    </FadeObserverDiv>
  );
}

export default Faq;
