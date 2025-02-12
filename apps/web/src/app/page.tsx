import StudentReq from "@/components/Requirement";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="font-prompt text-white w-screen h-screen xl:bg-[url(/bg-desktop.jpg)] bg-[url(/bg-mobile.jpg)] bg-cover bg-no-repeat bg-fixed bg-center">
      <div className="flex items-center justify-center h-screen"></div>
      <StudentReq></StudentReq>
      <Timeline></Timeline>
    </div>
  );
}
