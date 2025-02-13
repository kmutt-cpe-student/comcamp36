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
    <FadeObserverDiv className="flex w-full flex-col items-center gap-2.5 py-20">
      <h2 className="font-game-of-squid">WHAT YOU&apos;LL LEARN</h2>
      <div className="mx-10 flex flex-col gap-8">
        {LEARNS.map((learn) => (
          <MagicCard key={learn.title} className="max-w-[65rem]">
            <div className="grid grid-cols-[1fr_4fr] place-content-center place-items-center px-4 py-4">
              <div className="aspect-square h-[16rem] rounded-xl bg-white"></div>
              <div className="flex w-full flex-col justify-center px-10">
                <h5 className="w-full break-words font-bold">{learn.title}</h5>
                <h5 className="text-vermilion w-full break-words font-bold">
                  {learn.seconday}
                </h5>
                <small className="break-words text-gray-300">
                  {learn.description}
                </small>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </FadeObserverDiv>
  );
}
export default Learn;
