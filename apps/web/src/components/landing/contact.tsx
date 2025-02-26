import { MagicCard } from "@/components/card/magic-card";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";

const CONTACT_LIST = [
  {
    label: "พี่เจแปน",
    tel: "0944938131",
  },
  {
    label: "พี่อินทร์",
    tel: "0950724699",
  },
  {
    label: "พี่พอร์ช",
    tel: "0838864827",
  },
  {
    label: "พี่เจอร์รี่",
    tel: "0818020250",
  },
];

const Contact = () => {
  return (
    <div
      className="grid h-fit w-full grid-cols-1 place-items-end p-5 lg:grid-cols-[2.5fr_1fr]"
      id="contact"
    >
      <div className="grid h-fit grid-cols-1 gap-4 md:grid-cols-[1.5fr_1fr]">
        <div className="grid h-full grid-rows-[auto_1fr] gap-4">
          <MagicCard className="p-10">
            <h3 className="font-game-of-squid">Address</h3>
            <p className="text-white/75">
              ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ชั้น 10 อาคารวิศววัฒนะ
              เลขที่ 126 ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
            </p>
          </MagicCard>
          <MagicCard className="flex h-full flex-col p-10">
            <h3 className="font-game-of-squid">Social Media</h3>
            <div className="mt-4 flex flex-col gap-y-6">
              <div className="flex gap-x-3">
                {/** please don't update lucide to newer version as brands icon are being deprecated! */}
                <FacebookIcon size={32} className="text-white/75" />
                <p className="text-white/75 hover:underline">
                  <a
                    href="https://facebook.com/kmuttcomcamp"
                    target="_blank"
                    rel="noopener,noreferrer"
                  >
                    Comcamp KMUTT
                  </a>
                </p>
              </div>
              <div className="flex gap-x-3">
                <InstagramIcon size={32} className="text-white/75" />
                <p className="text-white/75 hover:underline">
                  <a
                    href="https://instagram.com/comcamp.kmutt"
                    target="_blank"
                    rel="noopener,noreferrer"
                  >
                    @comcamp.kmutt
                  </a>
                </p>
              </div>
              <div className="flex gap-x-3">
                <svg
                  className="size-8"
                  stroke="#c8c8c8"
                  fill="transparent"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                <p className="text-white/75 hover:underline">
                  <a
                    href="https://tiktok.com/@comcamp.kmutt"
                    target="_blank"
                    rel="noopener,noreferrer"
                  >
                    @comcamp.kmutt
                  </a>
                </p>
              </div>
            </div>
          </MagicCard>
        </div>
        <MagicCard className="flex h-full flex-col p-10 2xl:h-fit">
          <h3 className="font-game-of-squid pb-0 lg:pb-4 xl:pb-4 2xl:pb-4">
            CONTACT
          </h3>
          <div className="flex h-full flex-col justify-center gap-10 pb-8 lg:pb-0 2xl:pb-0">
            {CONTACT_LIST.map((contact, index) => (
              <div key={index} className="flex flex-col">
                <h5 className="font-bold">{contact.label}</h5>
                <p className="text-white/75">{`${contact.tel.slice(0, 3)}-${contact.tel.slice(3, 6)}-${contact.tel.slice(6)}`}</p>
              </div>
            ))}
          </div>
        </MagicCard>
      </div>
      <div className="hidden h-[40rem] w-full justify-center lg:flex">
        <Image
          className="h-full w-auto"
          width={550}
          height={288}
          src="/static/image/contact-goose.svg"
          alt="ComCamp36Logo"
          priority
        />
      </div>
    </div>
  );
};

export default Contact;
