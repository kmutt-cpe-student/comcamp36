import RequirementItem from "@/components/landing/components/requirement-box";

import FadeObserverDiv from "@/components/landing/fade-div";

const requirements = [
  {
    imageSrc: "/static/image/free-duck.svg",
    text: `นักเรียนที่กำลังศึกษาอยู่ในระดับชั้น\nมัธยมศึกษาปีที่ 4-5 หรือเทียบเท่า\nในปีการศึกษา 2567`,
  },
  {
    imageSrc: "/static/image/free-duck.svg",
    text: `มีความสนใจในด้านคอมพิวเตอร์หรือ\nภาควิชาคอมพิวเตอร์\nโดยไม่จำเป็นต้องมีพื้นฐานมาก่อน`,
  },
  {
    imageSrc: "/static/image/free-duck.svg",
    text: `ผู้ปกครองอนุญาตให้เข้าร่วมกิจกรรม\nและมีความสะดวกที่จะพักค้างคืน\nเป็นระยะเวลา 5 วัน 4 คืน`,
  },
];

export default function StudentReq() {
  return (
    <div
      className="font-prompt py-15 bg-[#231F20] bg-cover bg-fixed bg-center bg-no-repeat text-white"
      id="requirements"
    >
      <FadeObserverDiv className="flex items-center justify-center px-5">
        <h3 className="font-game-of-squid text-center text-4xl text-[#FFC94A] lg:text-5xl">
          Requirements
        </h3>
      </FadeObserverDiv>

      <FadeObserverDiv className="mb-10 grid grid-cols-1 place-items-center justify-center gap-[5%] px-10 py-10 md:flex md:flex-row">
        {requirements.map((requirement, index) => (
          <RequirementItem
            key={index}
            imageSrc={requirement.imageSrc}
            text={requirement.text}
          />
        ))}
      </FadeObserverDiv>
    </div>
  );
}
