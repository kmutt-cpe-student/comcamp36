"use client";

import { ArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { TextShimmerWave } from "../text/text-shimmer-wave";
import { Banner } from "../ui/banner";

interface NavbarProps {
  items: {
    label: string;
    href: string;
  }[];
  extra?: ReactNode;
}

export default function Navbar({ items, extra }: NavbarProps) {
  const renderDrawer = () => (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="block text-xl xl:hidden">
          <MenuIcon color="#d1d5dc" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-charcoal-1/10 backdrop-blur-3xl">
        <DrawerTitle className="sr-only">Navbar</DrawerTitle>
        <div className="mb-10 flex flex-col gap-y-5 overflow-auto p-6">
          {items.map((item) => (
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
  );

  return (
    <div className="font-prompt fixed left-0 top-0 w-full">
      <Banner>
        <div className="w-full font-bold text-white">
          <div className="flex text-sm sm:justify-center">
            <a
              href="/register"
              className="group flex items-center justify-center text-base"
            >
              <span className="me-1 leading-none">✨</span>
              <TextShimmerWave
                duration={2}
                className="cursor-pointer text-base font-medium transition-colors [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
              >
                {(() => {
                  const daysLeft = Math.floor(
                    (new Date("2025-03-14T00:00:00+07:00").getTime() -
                      Date.now()) /
                      (1000 * 60 * 60 * 24),
                  );
                  return daysLeft > 0
                    ? `เหลืออีก ${daysLeft.toString()} วันจะหมดเขตรับแล้วน่ะ รีบสมัครเลย!`
                    : "ไม่ถึงวันแล้วน่ะ รับสมัครเลย! เวลาสุดท้าย 23:59:59";
                })()}
              </TextShimmerWave>
              <ArrowRight
                className="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={18}
                strokeWidth={3}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </Banner>

      <div className="backdrop-blur-xs h-18 mx-0 my-5 flex items-center justify-between rounded-xl border-[1px] border-[#424242] bg-[#292929]/50 px-3 sm:mx-5 lg:px-9">
        <div className="flex w-20 items-center justify-center pt-1">
          <Link href="/#hero">
            <Image
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              width={550}
              height={288}
              src="/static/image/logo.png"
              alt="ComCamp36Logo"
            />
          </Link>
        </div>

        <div className="hidden flex-row gap-4 text-xl xl:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-vermilion text-white transition-colors"
            >
              <small className="text-[1rem]">{item.label}</small>
            </Link>
          ))}
        </div>

        {extra ? (
          <div className="flex gap-x-4">
            {extra}
            {renderDrawer()}
          </div>
        ) : (
          renderDrawer()
        )}
      </div>
    </div>
  );
}
