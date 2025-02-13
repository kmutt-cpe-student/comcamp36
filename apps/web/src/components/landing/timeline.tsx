"use client";

import { InView } from "@/components/animation/in-view";
import TimelineBox from "@/components/landing/components/timeline-box";
import FadeObserverDiv from "@/components/landing/fade-div";

const TimelineItems = [
  {
    day: "1-10",
    month: "March",
    monthColor: "text-[#FFC94A]",
    year: "2025",
    title: "รับสมัคร",
    imageSrc: "/static/image/timeline/01register.svg",
    backgroundColor: "#006A71",
  },
  {
    day: "16",
    month: "March",
    year: "2025",
    title: "ประกาศผล",
    imageSrc: "/static/image/timeline/02release.svg",
    backgroundColor: "#FFC94A",
    textColor: "text-black",
  },
  {
    day: "16-18",
    month: "March",
    monthColor: "text-[#FFC94A]",
    year: "2025",
    title: "ยืนยันสิทธิ์",
    imageSrc: "/static/image/timeline/03confirm.svg",
    backgroundColor: "#006A71",
  },
  {
    day: "7-11",
    month: "April",
    year: "2025",
    title: "วันค่าย",
    imageSrc: "/static/image/timeline/04thatday.svg",
    backgroundColor: "#FFC94A",
    textColor: "text-black",
  },
];

export default function Timeline() {
  return (
    <div
      className="font-prompt bg-charcoal-1 relative bg-cover bg-fixed bg-center bg-no-repeat py-10 text-white"
      id="timeline"
    >
      <div className="pb-20">
        <FadeObserverDiv className="mt-10 flex items-center justify-center px-5">
          <h2 className="font-game-of-squid text-center text-4xl text-[#FFC94A] md:text-4xl lg:text-5xl">
            Timeline
          </h2>
        </FadeObserverDiv>

        <InView
          viewOptions={{ once: true }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="relative grid grid-cols-1 place-items-center justify-center gap-[2%] px-10 py-10 md:flex md:flex-row">
            <div className="top-15 absolute bottom-0 left-1/2 z-0 w-2 bg-white md:left-0 md:right-0 md:top-1/2 md:h-1 md:w-full md:-translate-y-1/2 md:transform"></div>

            {TimelineItems.map((box, index) => (
              <TimelineBox key={index} {...box} />
            ))}
          </div>
        </InView>
      </div>
    </div>
  );
}
