import FadeObserverDiv from "@/components/landing/fade-div";
import { MagicCard } from "@/components/magic-card";

interface LearnProps {
  title: string;
  seconday: string;
  description: string;
}

const LEARNS: LearnProps[] = [
  {
    title: "เรียนรู้การเขียนโปรแกรมด้วยภาษา C",
    seconday: "C Programming",
    description:
      `น้อง ๆ จะได้เรียนรู้และฝึกเขียนโปรแกรมด้วย "ภาษา C"  ` +
      "ซึ่งเป็นหนึ่งในภาษาการเขียนโปรแกรมที่ทรงพลังและได้รับความนิยมมาอย่างยาวนาน" +
      " พร้อมทั้งลงมือปฏิบัติจริง แม้ไม่มีพื้นฐานการเขียนโปรแกรมมาก่อนก็สามารถเข้าใจได้อย่างง่ายดาย",
  },
  {
    title: "เรียนรู้การพัฒนาเว็บไซต์",
    seconday: "Web Development",
    description:
      "น้อง ๆ จะได้เรียนรู้และลงมือปฏิบัติพื้นฐานของการพัฒนาเว็บไซต์  " +
      "ตั้งแต่การเข้าใจการทำงานของอินเทอร์เน็ต โครงสร้างเว็บสถาปัตยกรรม (Front-end, Back-end, API, Database)" +
      " การออกแบบและจัดวางด้วย HTML, CSS (Tailwind CSS)  รวมถึงการใช้ JavaScript เบื้องต้น" +
      " พร้อมทั้งทำความรู้จักกับ Middleware และ Frameworks อย่าง React/NextJS" +
      " ที่ช่วยให้น้อง ๆ สามารถสร้างเว็บไซต์ที่ทันสมัยและตอบโจทย์ผู้ใช้งานได้อย่างมืออาชีพ",
  },
  {
    title: "เรียนรู้การพัฒนาเกม",
    seconday: "Game Development",
    description:
      "น้อง ๆ จะได้ก้าวเข้าสู่โลกของการสร้างเกมด้วยการทำความเข้าใจพื้นฐานของ Game Development และการใช้งาน Unity Engine ที่เป็นที่นิยม " +
      "พร้อมทั้งสำรวจเครื่องมือต่าง ๆ ภายใน Unity เช่น Scene, Hierarchy, Game View และ Inspector" +
      ` พร้อมทั้งเรียนรู้การเขียนสคริปต์ควบคุมการทำงานของเกม จากนั้นลงมือปฏิบัติจริงผ่านการทดลองสร้างมินิโปรเจกต์ "Goose Game" ` +
      ` ที่จะทำให้ทุกขั้นตอนการพัฒนาเกมเป็นเรื่องสนุกและเข้าใจได้ง่าย`,
  },
  {
    title: "เรียนรู้วิทยาการข้อมูลและปัญญาประดิษฐ์",
    seconday: "AI Development",
    description:
      "น้อง ๆ จะได้เปิดประสบการณ์ใหม่กับโลกของ Data Science และ AI ผ่านการทำความเข้าใจความสำคัญของข้อมูล" +
      "การใช้งาน Google Colab และเครื่องมือยอดนิยมใน Python เช่น Numpy, Pandas, Matplotlib และ Scikit-Learn" +
      " พร้อมทั้งเรียนรู้พื้นฐานของ Machine Learning ที่ช่วยให้ AI สามารถ “มองเห็น” และจำแนกข้อมูลภาพได้" +
      " นอกจากนี้ ยังมีการแนะนำแนวคิดของ Prompt Engineering และ LLM " +
      " มาพร้อมกับกิจกรรมแข่งขันสนุก ๆ ที่จะช่วยให้น้อง ๆ ได้ลงมือปฏิบัติจริงในโลกของ AI",
  },
];

function Learn() {
  return (
    <div className="flex w-full flex-col items-center gap-2.5 py-20" id="learn">
      <FadeObserverDiv className="font-game-of-squid text-center">
        <h3 className="pb-6 lowercase">WHAT YOU&apos;LL LEARN</h3>
      </FadeObserverDiv>
      <div className="mx-10 flex flex-col gap-8">
        {LEARNS.map((learn) => (
          <FadeObserverDiv key={learn.title}>
            <MagicCard className="w-fit max-w-[65rem] md:w-full">
              <div className="grid gap-4 px-4 py-4 md:grid-cols-[1fr_4fr] md:gap-0">
                <div className="flex h-full w-full items-center justify-center px-4 pt-4 md:p-0">
                  <div className="aspect-square w-full rounded-xl bg-white md:h-[12rem] md:w-fit md:px-0"></div>
                </div>
                <div className="flex w-full flex-col justify-center gap-2 px-4 pb-4 md:pb-0">
                  <h5 className="w-full break-words font-bold">
                    {learn.title}
                  </h5>
                  <p className="text-vermilion w-full break-words font-bold">
                    {learn.seconday}
                  </p>
                  <small className="break-words text-gray-300">
                    {learn.description}
                  </small>
                </div>
              </div>
            </MagicCard>
          </FadeObserverDiv>
        ))}
      </div>
    </div>
  );
}
export default Learn;
