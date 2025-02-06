import { MenuIcon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="py-5 px-5 fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between rounded-[20px] border-[1px] border-[#424242] bg-[#292929]/50 backdrop-blur-xs h-18 px-5 lg:px-9">
        <div className="w-20 flex items-center justify-center">
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={550}
            height={288}
            src="/Logo.png"
            alt="ComCamp36Logo"
          />
        </div>
        <div className="h-full flex items-center">
          <button className="text-xl xl:block hidden">หน้าหลัก</button>
          <button className="text-xl xl:hidden block">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
