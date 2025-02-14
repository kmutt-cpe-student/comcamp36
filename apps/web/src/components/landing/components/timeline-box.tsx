import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineBoxProps {
  day: string;
  month: string;
  monthColor?: string;
  year: string;
  title: string;
  imageSrc: string;
  backgroundColor: string;
  textColor?: string;
}

export default function TimelineBox({
  day,
  month,
  monthColor,
  year,
  title,
  imageSrc,
  backgroundColor,
  textColor = "text-white",
}: TimelineBoxProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
      className="z-10 flex h-auto min-h-[280px] w-[80vw] max-w-[300px] flex-col items-center justify-center rounded-bl-[5vw] rounded-br-[5vw] rounded-tl-[40vw] rounded-tr-[40vw] md:w-[60vw] md:rounded-tl-[30vw] md:rounded-tr-[30vw] lg:rounded-tl-[30vw] lg:rounded-tr-[30vw]"
      style={{
        backgroundColor,
        borderTopColor: backgroundColor,
        borderBottomColor: backgroundColor,
      }}
    >
      <div className="mt-[8%] h-auto max-h-[87%] w-[87%] md:mt-[3%] lg:mt-[8%]">
        <Image width={300} height={300} src={imageSrc} alt="Timeline Icon" />
        <div
          className={`flex flex-col items-center p-4 text-center ${textColor}`}
        >
          <p className="text-xl font-bold drop-shadow-lg md:text-sm lg:text-lg">
            {day} <span className={monthColor}>{month}</span> {year}
          </p>
          <h1 className="pt-4 text-3xl drop-shadow-lg md:text-2xl lg:text-3xl">
            {title}
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
