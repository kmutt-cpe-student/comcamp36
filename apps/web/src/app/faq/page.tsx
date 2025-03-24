import FaqAccordion from "@/components/faq-accordion";
import Navbar from "@/components/navigate/navbar";

import Footer from "@/components/navigate/footer";
import { TextShimmer } from "@/components/text/text-shimmer";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "./faq";

function FAQsPage() {
  return (
    <div className="bg-charcoal-1 absolute min-h-screen w-full overflow-x-hidden scroll-smooth">
      <div className="absolute z-[100]">
        <Navbar items={[{ label: "หน้าหลัก", href: "/" }]} />
      </div>
      <div className="font-prompt relative flex h-fit w-screen flex-col items-center bg-[#0d0d0d] bg-cover bg-center bg-no-repeat py-[8rem] text-white">
        <TextShimmer
          duration={4}
          className="cursor-pointer text-5xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
        >
          FAQs
        </TextShimmer>
        <Accordion
          className="divide-dimgray-1 flex w-full max-w-[80rem] flex-col divide-y"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {faqs.map((faq) => (
            <FaqAccordion key={faq.id} {...faq} />
          ))}
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
export default FAQsPage;
