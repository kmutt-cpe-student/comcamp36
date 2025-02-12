import TimelineBox from "./ui/timelineBox";

export default function Timeline() {
  return (
    <div className="font-prompt text-white bg-[#231F20] bg-cover bg-no-repeat bg-fixed bg-center py-10 relative">
      <div className="pb-20">
        {/* Title */}
        <div className="px-5 flex justify-center items-center mt-10">
          <h2 className="text-4xl md:text-4xl lg:text-5xl text-center font-game-of-squid text-[#FFC94A]">
            Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="grid grid-cols-1 place-items-center md:flex md:flex-row justify-center gap-[2%] px-10 py-10 relative">
          {/* Timeline Line */}
          <div className="absolute bg-white z-0 w-2 left-1/2 top-15 bottom-0 md:w-full md:h-1 md:left-0 md:right-0 md:top-1/2 md:transform md:-translate-y-1/2"></div>

          {/* Box 1 */}
          <TimelineBox
            day="1-10"
            month="March"
            monthColor="text-[#FFC94A]"
            year="2025"
            title="รับสมัคร"
            imageSrc="./timeline/01register.svg"
            backgroundColor="#006A71"
          />

          {/* Box 2 */}
          <TimelineBox
            day="16"
            month="March"
            year="2025"
            title="ประกาศผล"
            imageSrc="./timeline/02release.svg"
            backgroundColor="#FFC94A"
            textColor="text-black"
          />

          {/* Box 3 */}
          <TimelineBox
            day="16-18"
            month="March"
            monthColor="text-[#FFC94A]"
            year="2025"
            title="ยืนยันสิทธิ์"
            imageSrc="./timeline/03confirm.svg"
            backgroundColor="#006A71"
          />

          {/* Box 4 */}
          <TimelineBox
            day="7-11"
            month="April"
            year="2025"
            title="วันค่าย"
            imageSrc="./timeline/04thatday.svg"
            backgroundColor="#FFC94A"
            textColor="text-black"
          />
        </div>
      </div>
    </div>
  );
}
