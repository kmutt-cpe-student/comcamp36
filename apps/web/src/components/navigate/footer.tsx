import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-charcoal-1 font-noto-sans-thai-looped grid h-fit w-full grid-cols-2 border-t border-t-white/10 bg-fixed bg-no-repeat p-10">
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
        <div className="flex flex-col gap-1 text-white/30">
          <p className="text-[1rem]">©2025 ComCamp36. All rights reserved.</p>
          <p className="text-[1rem]">Made with Love and Tear by CPE38 ❤️</p>
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
