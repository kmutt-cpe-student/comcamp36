import FadeObserverDiv from "@/components/landing/fade-div";
import Timer from "@/components/timer";
import Image from "next/image";
import { Tilt } from "../card/tilt-card";

function Hero() {
  return (
    <FadeObserverDiv
      className="grid h-screen grid-cols-1 place-items-center items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.5),rgba(13,13,13,0.05),rgba(13,13,13,0.1),rgba(13,13,13,1)),url('/static/image/hero-bg.svg')] 2xl:grid-cols-[1.1fr_1fr] 2xl:pt-0"
      id="hero"
    >
      <div className="mt-30 flex flex-col items-center px-2 sm:mt-0 md:px-0">
        <div className="flex w-[18rem] justify-center md:w-[24rem]">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={550}
            height={288}
            src="/static/image/logo.svg"
            alt="ComCamp36Logo"
            priority
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-game-of-squid w-full text-center">
            7-11 <span className="text-vermilion">APRIL</span> 2025
          </h3>
          <div className="flex max-w-[50rem] flex-col gap-4 text-balance px-4 text-center">
            <small>
              ขอเชิญชวนน้อง ๆ
              ที่มีความสนใจในด้านคอมพิวเตอร์มาเข้าร่วมการผจญภัยไปกับ
              <strong>“ComCamp ครั้งที่ 36”</strong> ที่จะพาน้อง ๆ
              ผู้มีพรสวรรค์ที่ซ่อนเร้นอยู่ไปทำภารกิจและผจญภัยไปพร้อมกับเพื่อน ๆ
              และ พี่ ๆ CPE แต่จะเกิดอะไรขึ้น !!
              เมื่อเหล่าเป็ดและห่านผู้ผดุงความยุติธรรมต้องรวมพลัง! 🦢✨
            </small>
            <small>
              ขอชวนน้อง ๆ มาร่วม &quot;ติดปีก&quot; ปลดล็อกสกิลวิศวะคอมฯ
              ในค่ายสุดเจ๋ง ที่เต็มไปด้วยความรู้และความสนุกสุดป่วน!
              พร้อมกับสัมผัสความเป็นนักศึกษาวิศวะคอมฯ ที่ไม่เหมือนใคร
              แล้วมาร่วมหาคำตอบได้ใน “ComCamp ครั้งที่ 36“ 🛠️🎮
            </small>
          </div>
          <div className="w-fit pt-6">
            <Timer deadline="February, 24, 2025" />
          </div>
        </div>
      </div>
      <div className="hidden 2xl:block">
        <Tilt isRevese>
          <div className="flex w-[35rem] justify-center">
            <Image
              style={{ width: "100%", height: "auto" }}
              width={0}
              height={0}
              src="/static/image/hero-circle.svg"
              alt="Hero card section"
              loading="lazy"
            />
          </div>
        </Tilt>
      </div>
    </FadeObserverDiv>
  );
}

export default Hero;
