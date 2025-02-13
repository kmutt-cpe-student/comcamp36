import FadeObserverDiv from "@/components/landing/fade-div";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";

const faqs = [
  {
    id: "1",
    title: "ค่ายเปิดรับสมัครถึงวันไหน???",
    content: "ค่ายเปิดรับสมัครตั้งแต่วันที่ 1-10 มีนาคม 2568 ค่ะ",
  },
  {
    id: "2",
    title: "ไม่มีพื้นฐานทางด้านคอมพิวเตอร์ สามารถสมัครได้มั้ยครับ???",
    content: "เพียงแค่มีความสนใจทางด้านคอมพิวเตอร์ ก็สามารถสมัครได้ค่ะ",
  },
  {
    id: "3",
    title: "ในการรับสมัครต้องใช้เอกสารอะไรบ้าง",
    content: "ใบปพ..something",
  },
  {
    id: "4",
    title: "ค่ายพักค้างคืน จะได้พักค้างคืนที่ไหนคะ?",
    content:
      "ทางค่ายได้จัดให้น้องๆ พักที่ห้องพักที่หอพักของทางมหาวิทยาลัยโดยตรงค่ะ",
  },
  {
    id: "5",
    title: "ใช้อะไรเป็นเกณฑ์การรับสมัครครับ?",
    content: "พี่ก็ยังไม่รู้เลยค่ะ",
  },
];

function Faq() {
  return (
    <FadeObserverDiv
      className="flex h-fit w-full flex-col items-center justify-center py-[20rem]"
      id="faq"
    >
      <h1 className="text-vermilion">FAQ</h1>
      <Accordion type="multiple" className="w-full max-w-[80rem] px-10">
        {faqs.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="border-vermilion border-[1px] px-4 py-4 last:border-b-[1px]"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex h-fit flex-1 items-center justify-between py-2 text-left font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                <h5 className="font-bold">Q : {item.title}</h5>
                <Plus
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground">
              <p className="font-noto-sans-thai-looped text-dimgray-special">
                {item.content}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FadeObserverDiv>
  );
}
export default Faq;
