"use client";

import RequirementItem from "@/components/landing/components/requirement-box";

import { InView } from "@/components/animation/in-view";
import FadeObserverDiv from "@/components/landing/fade-div";

const requirements = [
  {
    imageSrc: "/static/image/free-duck.svg",
    text: `นักเรียนที่กำลังศึกษาอยู่ในระดับชั้น\nมัธยมศึกษาปีที่ 4-5 หรือเทียบเท่า\nในปีการศึกษา 2567 (GPAX 3.00 ขึ้นไป)`,
  },
  {
    imageSrc: "/static/image/free-duck.svg",
    text: `ศึกษาเกี่ยวกับสายวิทยาศาสตร์ คณิตศาสตร์ หรือคอมพิวเตอร์\n(หรือสายอื่น ๆ ที่เกี่ยวข้องกับ\nคอมพิวเตอร์และเทคโนโลยี)`,
  },
  {
    imageSrc: "/static/image/free-duck.svg",
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
      className="font-prompt py-15 bg-charcoal-1 bg-cover bg-fixed bg-center bg-no-repeat text-white"
      id="requirements"
    >
      <FadeObserverDiv className="flex items-center justify-center px-5">
        <h3 className="font-game-of-squid text-center text-4xl text-[#FFC94A] lg:text-5xl">
          Requirements
        </h3>
      </FadeObserverDiv>

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
        <div className="mb-10 grid grid-cols-1 place-items-center justify-center gap-[5%] px-10 py-10 md:flex md:flex-row">
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
