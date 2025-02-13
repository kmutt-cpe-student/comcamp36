import { MagicCard } from "@/components/magic-card";
import Image from "next/image";

const CONTACT_LIST = [
  {
    label: "พี่น้ำ (ประธาน)",
    tel: "0632700413",
  },
  {
    label: "พี่กันต์ (รองประธาน)",
    tel: "0957178730",
  },
  {
    label: "พี่ต้นน้ำ (ฝ่ายพยาบาล)",
    tel: "0632700413",
  },
  {
    label: "พี่ผักหวาน (ฝ่ายทะเบียน)",
    tel: "0957957684",
  },
];

const Contact = () => {
  return (
    <div className="grid h-fit w-full grid-cols-1 place-items-end p-5 lg:grid-cols-[2.5fr_1fr]">
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
          </MagicCard>
        </div>
        <MagicCard className="flex h-fit flex-col p-10">
          <h3 className="font-game-of-squid pb-4">CONTACT</h3>
          <div className="flex h-full flex-col justify-center gap-10">
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
