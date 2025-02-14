import FaqAccordion, { faqsProps } from "@/components/faq-accordion";
import Navbar from "@/components/Navbar";

import { TextShimmer } from "@/components/text/text-shimmer";
import { Accordion } from "@/components/ui/accordion";

export const faqs: faqsProps[] = [
  {
    id: "1",
    title: "ค่ายเปิดรับสมัครถึงวันไหนคะ",
    content:
      "ค่ายเปิดรับสมัครตั้งแต่วันที่ 24 กุมภาพันธ์ - 13 มีนาคม 2568 ค่ะ ",
  },
  {
    id: "2",
    title: "ถ้าเรียนเตรียมวิศวะอยู่ สมัครค่ายนี้ได้ไหมครับ",
    content: "สมัครได้ค่ะ",
  },
  {
    id: "3",
    title: "กรณีเป็นเด็กต่างจังหวัด พอจะมีคำแนะนำในการเดินทางมาค่ายไหมครับ",
    content:
      "หากน้อง ๆ เดินทางมาจากต่างจังหวัด สามารถเดินทางมาตามจุดนัดพบที่ระบุไว้ในใบสมัครได้เลยค่ะ และในวันเข้าร่วมโครงการ จะมีพี่ ๆ ไปดูแลและอำนวยความสะดวกในการเดินทางค่ะ",
  },
  {
    id: "4",
    title: "รูปแบบการจัดค่ายเป็นแบบ Onsite หรือเปล่าคะ",
    content:
      "รูปแบบค่ายจัดแบบ Onsite ที่ภาควิชาวิศวกรรมคอมพิวเตอร์ อาคารวิศววัฒนะ (ตึกแดง) ชั้น 10 - 11 มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีค่ะ",
  },
  {
    id: "5",
    title: "ถ้าไม่มีพื้นฐานทางด้านคอมพิวเตอร์ สามารถสมัครได้ไหมครับ",
    content:
      "เพียงแค่มีความสนใจทางด้านคอมพิวเตอร์ ไม่จำเป็นต้องมีพื้นฐานมาก่อนก็สามารถสมัครได้ค่ะ",
  },
  {
    id: "6",
    title: "ต้องขอเอกสารจากทางโรงเรียนไหมคะ",
    content:
      "เอกสารที่ต้องขอกับทางโรงเรียน ได้แก่ ปพ.1 (ใบแสดงผลการเรียน) และ ปพ.7 (เอกสารรับรองการเป็นนักเรียน) ค่ะ",
  },
  {
    id: "7",
    title:
      "ในการกรอกเกรดเพื่อทำการสมัครค่าย จะต้องกรอกเกรดเทอมล่าสุด (GPA) หรือเกรดเฉลี่ยสะสม (GPAX) คะ",
    content: "กรอกเป็นเกรดเฉลี่ยสะสม (GPAX) ค่ะ ",
  },
  {
    id: "8",
    title: "ค่ายนี้รับจำนวนกี่คน และสมัครก่อนมีสิทธิ์ก่อนหรือเปล่าคะ",
    content:
      "100 คนค่ะ โดยจะมีการคัดเลือกจากข้อมูลและการตอบคำถามที่ให้น้อง ๆ ได้ทำการตอบเข้ามา ดังนั้นสมัครก่อนหรือหลังจึงไม่มีผลต่อการพิจารณาค่ะ",
  },
  {
    id: "9",
    title: "ค่ายนี้มีเรียนอะไรบ้างครับ",
    content:
      "ค่าย Comcamp 36 จะมีการสอนทั้งหมด 4 วิชา ได้แก่ C Programming, Web Development, AI Development  และ  Game Development อีกทั้งยังมีการทำมินิโปรเจกต์เพื่อให้น้อง ๆ ได้นำสิ่งที่น้อง ๆ เรียนรู้มาใช้แก้ไขปัญหาร่วมกันภายในค่ายค่ะ ",
  },
  {
    id: "10",
    title: "ค่ายนี้ต้องค้างคืนไหมคะ แล้วพักที่ไหนคะ",
    content:
      " ค่ายนี้จะมีการค้างคืนทั้งหมด 4 คืน โดยจะพักที่หอพักนักศึกษาชายและหญิง (บ้านธรรมรักษา 1 และ 2) ของมหาวิทยาลัย ซึ่งจะมีพี่ ๆ CPE ดูแลตลอด 24 ชั่วโมงค่ะ",
  },
  {
    id: "11",
    title: "ในการเข้าค่ายนี้ จะได้รับเกียรติบัตรไหมครับ",
    content: "น้อง ๆ ที่เข้าร่วมค่ายนี้จะได้รับเกียรติบัตรจากค่ายค่ะ",
  },
  {
    id: "12",
    title: "ค่ายนี้มีเกณฑ์ในการรับคนอย่างไรบ้างคะ",
    content:
      " เกณฑ์ในการคัดเลือกจะพิจารณาจากข้อมูลและความถูกต้องในใบสมัคร ประกอบกับพิจารณาจากการตอบคำถามของน้อง ๆ ที่ส่งเข้ามาด้วยค่ะ",
  },
];

function FAQsPage() {
  return (
    <div className="bg-charcoal-1 absolute h-fit w-full overflow-x-hidden scroll-smooth">
      <div className="absolute z-[100]">
        <Navbar />
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
    </div>
  );
}
export default FAQsPage;
