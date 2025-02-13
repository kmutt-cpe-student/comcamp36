import Image from "next/image";

function Footer() {
  return (
    <div className="bg-charcoal-1 font-noto-sans-thai-looped h-fit w-full border-t border-t-white/10 bg-fixed bg-no-repeat p-10">
      <div className="flex h-fit w-full flex-col gap-4">
        <div className="flex w-[10rem] justify-center">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={550}
            height={288}
            src="/static/image/logo.svg"
            alt="ComCamp36Logo"
            priority
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[1rem]">ComCamp36 All right reserved.</p>
          <p className="text-[1rem]">
            ©2025 Made with Love and Tear, CPE38 ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
