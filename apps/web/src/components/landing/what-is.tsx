import FadeObserverDiv from "@/components/landing/fade-div";
import Image from "next/image";

function WhatIs() {
  return (
    <div className="flex h-[63rem] w-full flex-col place-items-center items-center justify-center 2xl:grid 2xl:grid-cols-2">
      <FadeObserverDiv className="w-[32rem]" id="whatis">
        <Image
          style={{ width: "100%", height: "auto" }}
          width={0}
          height={0}
          src="/static/image/what-is-duck.svg"
          alt="ComCamp36Logo"
          loading="lazy"
        />
      </FadeObserverDiv>
      <FadeObserverDiv className="flex flex-col items-center justify-center text-center">
        <h2 className="font-game-of-squid w-full text-center md:text-start">
          WHAT IS COMCAMP<span className="text-vermilion">36</span>?
        </h2>
        <small className="font-noto-sans-thai max-w-[50rem] text-center md:pr-32 md:text-start">
          &emsp;โครงการฝึกอบรมเชิงปฏิบัติการคอมพิวเตอร์เบื้องต้น หรือ
          &quot;ComCamp&quot; คือค่ายที่ทางภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ.
          ได้จัดขึ้น โดยภายในค่ายจะมีทั้งการแนะแนวการศึกษาต่อ และกิจกรรมต่าง ๆ
          ที่ออกแบบมาเพื่อเปิดโลกการเรียนรู้ และสร้างแรงบันดาลใจ
          ด้านวิศวกรรมคอมพิวเตอร์ ซึ่งจะทำให้น้อง ๆ
          ได้รับทั้งความรู้พร้อมกับความสนุกสนาน
          อีกทั้งยังได้เข้ามารู้จักกับภาควิชาวิศวกรรมคอมพิวเตอร์มากขึ้นอีกด้วย
        </small>
      </FadeObserverDiv>
    </div>
  );
}

export default WhatIs;
