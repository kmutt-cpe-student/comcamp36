import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-prompt text-white w-screen h-screen xl:bg-[url(/bg-desktop.jpg)] bg-[url(/bg-mobile.jpg)] bg-cover bg-no-repeat bg-fixed bg-center">
      <Navbar />
      <ComingSoon />
    </div>
  );
}
