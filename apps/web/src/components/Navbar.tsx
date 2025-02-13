import { MenuIcon } from "lucide-react";
import Image from "next/image";

const NAVBARITEMS = [
  {
    label: "เนื้อหาที่เรียน",
    href: "#learn",
  },
  {
    label: "คุณสมบัติ",
    href: "#requirements",
  },
  {
    label: "ช่วงเวลา",
    href: "#timeline",
  },
  {
    label: "คำถามที่พบบ่อย",
    href: "#faq",
  },
];

export default function Navbar() {
  return (
    <div className="font-prompt fixed left-0 top-0 w-full px-5 py-5">
      <div className="backdrop-blur-xs h-18 flex items-center justify-between rounded-[20px] border-[1px] border-[#424242] bg-[#292929]/50 px-5 lg:px-9">
        <div className="flex w-20 items-center justify-center">
          <Image
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            width={550}
            height={288}
            src="/static/image/logo.svg"
            alt="ComCamp36Logo"
          />
        </div>
        <div className="flex h-full items-center">
          <div className="hidden flex-row gap-4 text-xl xl:flex">
            {NAVBARITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-white">
                <p className="text-[1rem]">{item.label}</p>
              </a>
            ))}
          </div>
          <button className="block text-xl xl:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
