import Navbar from "@/components/Navbar";
import Timer from "@/components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-prompt text-white h-screen bg-[#1C1919]">
      <div className="pt-5 px-5">
        <Navbar />
      </div>
      <div className="px-5">
        <section className="flex items-center justify-center">
          <div className="w-[35rem] flex justify-center">
            <Image
              style={{ width: "100%", height: "auto" }}
              width={869}
              height={450}
              src="/Logo.png"
              alt="ComCamp36Logo"
            />
          </div>
        </section>
        <section>
          <h1 className="text-center font-GameOfSquid">Coming Soon</h1>
        </section>
        <section>
          <p className="font-light text-center">
            เปิดรับสมัครผู้เข้าแข่งขันอีก
          </p>
        </section>
        <section className="mt-5 flex justify-center">
          <Timer />
        </section>
      </div>
    </div>
  );
}
