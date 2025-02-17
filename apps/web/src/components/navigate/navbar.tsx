"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SignInButton from "../sign-in-button";

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
  {
    label: "ติดต่อ",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <div className="font-prompt fixed left-0 top-0 w-full px-5 py-5">
      <div className="backdrop-blur-xs h-18 flex items-center justify-between rounded-[20px] border-[1px] border-[#424242] bg-[#292929]/50 px-5 lg:px-9">
        <div className="flex w-20 items-center justify-center pt-1">
          <Link href="/#hero">
            <Image
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              width={550}
              height={288}
              src="/static/image/logo.svg"
              alt="ComCamp36Logo"
            />
          </Link>
        </div>
        <div className="flex h-full items-center gap-4">
          <div className="hidden flex-row gap-4 text-xl xl:flex">
            {NAVBARITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-vermilion text-white transition-colors"
              >
                <p className="text-[1.1rem]">{item.label}</p>
              </a>
            ))}
          </div>

          <Drawer>
            <DrawerTrigger asChild>
              <button className="block text-xl xl:hidden">
                <MenuIcon color="#d1d5dc" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-charcoal-1/10 backdrop-blur-3xl">
              <DrawerTitle className="sr-only">Navbar</DrawerTitle>
              <div className="mb-10 flex flex-col gap-y-5 overflow-auto p-6">
                {NAVBARITEMS.map((item) => (
                  <DrawerClose
                    key={item.href}
                    asChild
                    className="flex items-center justify-center"
                  >
                    <Link href={item.href}>
                      <button className="hover:text-vermilion cursor-pointer text-white transition-colors">
                        <span className="font-prompt text-[1.3rem] font-bold">
                          {item.label}
                        </span>
                      </button>
                    </Link>
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>

          <SignInButton />
        </div>
      </div>
    </div>
  );
}
