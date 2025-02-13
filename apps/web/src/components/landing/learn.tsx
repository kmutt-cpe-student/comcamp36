import FadeObserverDiv from "@/components/landing/fade-div";
import { MagicCard } from "@/components/magic-card";

interface LearnProps {
  title: string;
  seconday: string;
  description: string;
}

const LEARNS: LearnProps[] = [
  {
    title: "เรียนรู้การเขียนภาษา C จากพี่ๆ หน้าตาดีและมีผีมือ",
    seconday: "Learn C programming with the smart and good-looking senpai.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" +
      " exercitation ullamco laboris nisi ut aliquip ex",
  },
  {
    title:
      "เรียนรู้วิทยาการข้อมูลและปัญญาประดิษฐ์ จากพี่ๆ ที่ใช้ปัญญาประดิษฐ์สร้างปัญญาประดิษฐ์",
    seconday: "Data Science and AI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" +
      " exercitation ullamco laboris nisi ut aliquip ex",
  },
  {
    title: "เรียนรู้การสร้างเว็บไซต์เบื้องต้น จากพี่ๆ สาย Dev",
    seconday: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" +
      " exercitation ullamco laboris nisi ut aliquip ex",
  },
  {
    title: "เรียนรู้การออกแบบและพัฒนาเกมเบื้องต้น จากพี่ๆ ผู้สร้างเกมที่ติดเกม",
    seconday: "Game Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" +
      " exercitation ullamco laboris nisi ut aliquip ex",
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
