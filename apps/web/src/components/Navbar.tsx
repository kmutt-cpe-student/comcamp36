import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between rounded-[20px] border-[1px] border-[#424242] bg-[#292929]/50 backdrop-blur-lg px-5 py-1">
      <div className="w-30 flex items-center justify-center">
        <Image
          style={{ width: "100%", height: "auto" }}
          width={869}
          height={449}
          src="/Logo.png"
          alt="ComCamp36Logo"
        />
      </div>
      <div className="mr-5">
        <button className="text-xl">หน้าหลัก</button>
      </div>
    </div>
  );
}
