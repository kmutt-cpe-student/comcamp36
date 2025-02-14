"use client";

import RequirementItem from "@/components/landing/components/requirement-box";

import { InView } from "@/components/animation/in-view";

const requirements = [
  {
    imageSrc: "/static/image/placeholder/main-char.png",
    text: `นักเรียนที่กำลังศึกษาอยู่ในระดับชั้น\nมัธยมศึกษาปีที่ 4-5 หรือเทียบเท่า\nในปีการศึกษา 2567 (GPAX 3.00 ขึ้นไป)`,
  },
  {
    imageSrc: "/static/image/placeholder/frontman-yellow.png",
    text: `ม.ปลาย ศึกษาในสายวิทยาศาสตร์ คณิตศาสตร์ หรือคอมพิวเตอร์,\nปวช. สาขาคอมพิวเตอร์ธุรกิจ,\nสาขาช่างไฟฟ้ากำลัง (อิเล็กทรอนิกส์),\nสาขาเมคคาทรอนิกส์และหุ่นยนต์\n(หรือสายอื่น ๆ ที่เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยี)`,
  },
  {
    imageSrc: "/static/image/placeholder/vip.png",
    text: `มีความสนใจในด้านคอมพิวเตอร์\nหรือภาควิชาคอมพิวเตอร์\nโดยไม่จำเป็นต้องมีพื้นฐาน\nการเขียนโปรแกรม`,
  },
  {
    imageSrc: "/static/image/free-duck.svg",
    text: `ผู้ปกครองอนุญาตให้เข้าร่วมกิจกรรม\nและมีความสะดวกที่จะพักค้างคืน\nเป็นระยะเวลา 5 วัน 4 คืน`,
  },
];

export default function StudentReq() {
  return (
    <div
      className="font-prompt bg-charcoal-1 bg-cover bg-fixed bg-center bg-no-repeat py-[10rem] text-white xl:scroll-mt-20"
      id="requirements"
    >
      <InView
        viewOptions={{ once: true }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
        <h3 className="font-game-of-squid text-center text-4xl text-[#FFC94A] lg:text-5xl">
          Requirements
        </h3>
      </InView>

      <InView
        viewOptions={{ once: true }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.09,
            },
          },
        }}
      >
        <div className="flex w-full flex-wrap justify-center gap-10 py-20">
          {requirements.map((requirement, index) => (
            <RequirementItem
              key={index}
              imageSrc={requirement.imageSrc}
              text={requirement.text}
            />
          ))}
        </div>
      </InView>
    </div>
  );
}
