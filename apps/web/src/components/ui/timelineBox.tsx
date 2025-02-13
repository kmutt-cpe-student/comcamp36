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
    <div
      className="w-[80vw] md:w-[60vw] max-w-[300px] min-h-[280px] h-auto rounded-tl-[40vw] rounded-tr-[40vw] md:rounded-tl-[30vw] md:rounded-tr-[30vw] lg:rounded-tl-[30vw] lg:rounded-tr-[30vw] rounded-br-[5vw] rounded-bl-[5vw] flex flex-col justify-center items-center z-10"
      style={{
        backgroundColor,
        borderTopColor: backgroundColor,
        borderBottomColor: backgroundColor,
      }}
    >
      <div className="mt-[8%] md:mt-[3%] lg:mt-[8%] w-[87%] h-auto max-h-[87%]">
        <Image width={300} height={300} src={imageSrc} alt="Timeline Icon" />
        <div
          className={`flex flex-col items-center text-center p-4 ${textColor}`}
        >
          <p className="drop-shadow-lg font-bold text-xl md:text-sm lg:text-lg">
            {day} <span className={monthColor}>{month}</span> {year}
          </p>
          <h1 className="text-3xl md:text-2xl lg:text-3xl drop-shadow-lg pt-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
