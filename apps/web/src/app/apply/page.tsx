"use client";
import FadeObserverDiv from "@/components/landing/fade-div";
import Footer from "@/components/navigate/footer";
import Navbar from "@/components/navigate/navbar";
import dynamic from "next/dynamic";
const ApplyForm = dynamic(() => import("@/components/applyformuser"));

function Apply() {
  return (
    <div className="font-prompt bg-charcoal-1 relative bg-cover bg-fixed bg-center bg-no-repeat py-10 text-white xl:scroll-mt-20">
      <Navbar />

      <div className="relative h-fit bg-[#0d0d0d] text-white">
        <div className="pb-20">
          <FadeObserverDiv className="mt-30 flex items-center justify-center px-5">
            <header>
              <h2 className="font-game-of-squid text-center text-4xl text-[#FFC94A] md:text-4xl lg:text-5xl">
                Apply For Comcamp36
              </h2>
            </header>
          </FadeObserverDiv>

          <ApplyForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Apply;
