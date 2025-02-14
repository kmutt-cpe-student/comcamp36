import FadeObserverDiv from "@/components/landing/fade-div";
import Image from "next/image";
import { Tilt } from "../card/tilt-card";

function WhatIs() {
  return (
    <div className="flex h-[63rem] w-full flex-col place-items-center items-center justify-center 2xl:grid 2xl:grid-cols-[1fr_1.75fr]">
      <FadeObserverDiv className="w-[32rem]" id="whatis">
        <Tilt
          isRevese
          style={{
            transformOrigin: "center center",
          }}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        >
          <Image
            style={{ width: "100%", height: "auto" }}
            width={0}
            height={0}
            src="/static/image/what-is-duck.svg"
            alt="ComCamp36Logo"
            loading="lazy"
          />
        </Tilt>
      </FadeObserverDiv>
      <FadeObserverDiv className="flex flex-col items-center justify-center px-20 text-center">
        <h2 className="font-game-of-squid w-full pb-4 text-center lg:text-start">
          WHAT IS COMCAMP<span className="text-vermilion">36</span>?
        </h2>
        <div className="flex w-full items-center justify-center text-center md:text-start">
          <p className="font-noto-sans-tha">
            &emsp;โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น หรือ
            &quot;ComCamp&quot; คือค่ายที่ทางภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ.
            ได้จัดขึ้น โดยภายในค่ายจะมีทั้งการแนะแนวการศึกษาต่อ และกิจกรรมต่าง ๆ
            ที่ออกแบบมาเพื่อเปิดโลกการเรียนรู้ และสร้างแรงบันดาลใจ
            ด้านวิศวกรรมคอมพิวเตอร์ ซึ่งจะทำให้น้อง ๆ
            ได้รับทั้งความรู้พร้อมกับความสนุกสนาน
            อีกทั้งยังได้เข้ามารู้จักกับภาควิชาวิศวกรรมคอมพิวเตอร์มากขึ้นอีกด้วย
          </p>
        </div>
      </FadeObserverDiv>
    </div>
  );
}

export default WhatIs;
