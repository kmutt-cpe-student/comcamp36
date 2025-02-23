import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-charcoal-1 font-noto-sans-thai-looped grid h-fit w-full grid-cols-1 gap-4 border-t border-t-white/10 bg-fixed bg-no-repeat p-4 sm:grid-cols-2 sm:gap-0 sm:p-10">
      <div className="flex h-fit w-full flex-col gap-4">
        <div className="flex w-[5rem] justify-center sm:w-[10rem]">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={550}
            height={288}
            src="/static/image/logo.png"
            alt="ComCamp36Logo"
            priority
          />
        </div>
        <div className="flex flex-col gap-1 text-sm text-white/30">
          <div>©2025 ComCamp36. All rights reserved.</div>
          <div>Made with Love and Tear by CPE38 ❤️</div>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
export default Footer;
