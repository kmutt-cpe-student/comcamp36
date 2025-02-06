import Timer from "@/components/Timer";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="px-5 h-screen flex justify-center items-center">
      <div className="w-full">
        <section className="flex items-center justify-center">
          <div className="lg:w-[35rem] w-[20rem] flex justify-center">
            <Image
              style={{ width: "100%", height: "auto" }}
              width={550}
              height={288}
              src="/Logo.png"
              alt="ComCamp36Logo"
            />
          </div>
        </section>
        <section className="pt-6 pb-3">
          <h2 className="lg:text-7xl text-4xl text-center font-game-of-squid">
            Coming Soon
          </h2>
        </section>
        <section className="py-4">
          <p className="lg:text-2xl font-light text-center">
            เปิดรับสมัครผู้เข้าแข่งขันในอีก
          </p>
        </section>
        <section className="py-4 flex justify-center">
          <Timer deadline="February, 24, 2025" />
        </section>
      </div>
    </div>
  );
}
