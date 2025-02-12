import RequirementItem from "./ui/requirementBox";

export default function StudentReq() {
  return (
    <div className="font-prompt text-white bg-[#231F20] bg-cover bg-no-repeat bg-fixed bg-center py-15 ">
      <div className="px-5 flex justify-center items-center">
        <h2 className="lg:text-5xl text-4xl text-center font-game-of-squid text-[#FFC94A]">
          Requirements
        </h2>
      </div>

      <div className="grid grid-cols-1 place-items-center md:flex md:flex-row justify-center gap-[5%] px-10 py-10 mb-10">
        <RequirementItem
          imageSrc="/free_mockup.svg"
          text={`นักเรียนที่กำลังศึกษาอยู่ในระดับชั้น\nมัธยมศึกษาปีที่ 4-5 หรือเทียบเท่า\nในปีการศึกษา 2567`}
        />

        <RequirementItem
          imageSrc="/free_mockup.svg"
          text={`มีความสนใจในด้านคอมพิวเตอร์หรือ\nภาควิชาคอมพิวเตอร์\nโดยไม่จำเป็นต้องมีพื้นฐานมาก่อน`}
        />

        <RequirementItem
          imageSrc="/free_mockup.svg"
          text={`ผู้ปกครองอนุญาตให้เข้าร่วมกิจกรรม\nและมีความสะดวกที่จะพักค้างคืน\nเป็นระยะเวลา 5 วัน 4 คืน`}
        />
      </div>
    </div>
  );
}
