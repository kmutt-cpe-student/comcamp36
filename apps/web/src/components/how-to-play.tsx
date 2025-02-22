import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/libs/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TileDescriptionProps {
  imageUrl: string;
  title: string;
  description: string;
}
const TileDescription = ({
  imageUrl,
  title,
  description,
}: TileDescriptionProps) => (
  <div className="flex w-full items-center gap-6 px-4 py-4">
    <div className="flex aspect-square w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl">
      <Image
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
    <div className="flex min-h-[5rem] flex-col justify-center gap-2">
      <p className="text-vermilion text-base font-bold sm:text-lg">{title}</p>
      <small className="text-sm text-gray-300 sm:text-base">
        {description}
      </small>
    </div>
  </div>
);

export default function HowToChess() {
  const [step, setStep] = useState(1);

  const stepContent = [
    {
      title: "บทนำ",
      description:
        "เกมการแข่งขันล่าแต้มบนตารางหมากรุกสุดพิเศษนี้ น้องเป็นห่านห้าวหาญและปราดเปรื่องผู้ปรารถนาเก็บแต้มให้ได้มากเพื่อก้าวขึ้นเป็นอันดับหนึ่งของการแข่งขัน",
    },
    {
      title: "บทนำ (ต่อ)",
      description:
        "พื่อแก้โจทย์ข้อนี้ น้องจำเป็นต้องทำความรู้จักรูปแบบการเดินของหมากรุกเบื้องต้น ในที่นี้จะแนะนำการเดินของหมากที่มีในโจทย์ ประกอบด้วย",
    },
    {
      title: "อัศวิน",
      imageSrc: "/static/image/how-to-play/house-move.svg",
      description:
        "เดินสองช่องไปทางใดทางหนึ่งและเดินอีกหนึ่งช่องในทิศทางตั้งฉาก คล้ายกับ 'L'",
    },
    {
      title: "เรือ",
      imageSrc: "/static/image/how-to-play/rook-move.svg",
      description:
        "เดินในแนวตรง (แนวตั้งหรือแนวนอน) ได้ไกลจนสุดขอบตาราง คล้ายกับ '+'",
    },
    {
      title: "บิชอป",
      imageSrc: "/static/image/how-to-play/bishop-move.svg",
      description: "เดินในแนวทแยงได้ไกลจนสุดของตาราง คล้ายกับ 'X'",
    },
    {
      title: "วิธีการเล่น (1)",
      description:
        "ออกแบบการเดินหมากห่านห้าวหาญ (อัศวิน) เริ่มต้นที่ช่อง b2 เพื่อเก็บแต้มให้มากที่สุด แต่ละช่องจะมีผลตามประเภทและค่าของช่องนั้น ๆ โดยในทุกการเดิน น้องจะถูกหักแต้มออก 10% ของแต้มที่น้องมีอยู่ และจะนับแต้มที่น้องได้ตามแต้มสุดท้ายที่น้องมีอยู่เมื่อเข้าสู่ช่องบ่อน้ำที่สิ้นสุด",
    },
    {
      title: "ประเภทผลของช่อง (1)",
      description: (
        <div className="space-y-4">
          <TileDescription
            imageUrl="/static/image/how-to-play/tressure-yellow.svg"
            title="ช่องขุมทรัพย์"
            description="น้องจะได้รับแต้มเพิ่มตามค่าที่แสดงบนช่อง"
          />
          <TileDescription
            imageUrl="/static/image/how-to-play/ask-orange.svg"
            title="ช่องคำอวยพร"
            description="น้องจะได้รับแต้มเพิ่มร้อยละตามค่าที่แสดงของแต้มที่น้องมีอยู่"
          />
        </div>
      ),
    },
    {
      title: "ประเภทผลของช่อง (2)",
      description: (
        <div className="space-y-4">
          <TileDescription
            imageUrl="/static/image/how-to-play/safe-green.svg"
            title="ช่องเขตปลอดภัย"
            description="การเดินหมากเข้าช่องนี้ น้องจะไม่ถูกหักแต้มออก 10%"
          />
          <TileDescription
            imageUrl="/static/image/how-to-play/arch-blue.svg"
            title="ช่องเกราะอัศวิน"
            description="การเดินหมากครั้งถัดไปตามค่าที่แสดง น้องจะไม่ถูกหักแต้มออก 10%"
          />
        </div>
      ),
    },
    {
      title: "ประเภทผลของช่อง (3)",
      description: (
        <div className="space-y-4">
          <TileDescription
            imageUrl="/static/image/how-to-play/magic-pink.svg"
            title="ช่องเวทมนตร์ทวีคูณ"
            description="หากการเดินหมากครั้งถัดเป็นช่องขุมทรัพย์ น้องจะได้แต้มเป็นจำนวนเท่าตามค่าที่แสดงของแต้มจากช่องขุมทรัพย์"
          />
          <TileDescription
            imageUrl="/static/image/how-to-play/arch2-mint.svg"
            title="ช่องวิญญาณนักรบ"
            description="การเดินหมากครั้งถัดไปจะเป็นรูปแบบของหมากตามสัญลักษณ์ที่แสดง"
          />
        </div>
      ),
    },
    {
      title: "ประเภทผลของช่อง (4)",
      description: (
        <div className="space-y-4">
          <TileDescription
            imageUrl="/static/image/how-to-play/x-green.svg"
            title="ช่องวิญญาณนักรบ"
            description="การเดินหมากครั้งถัดไปจะเป็นรูปแบบของหมากตามสัญลักษณ์ที่แสดง"
          />
          <TileDescription
            imageUrl="/static/image/how-to-play/pond-cyan.svg"
            title="ช่องบ่อน้ำที่สิ้นสุด"
            description="เกมจะจบลงเมื่อน้องเดินหมากเข้าช่องนี้ ซึ่งน้องจะไม่ถูกหักแต้มออก 10%"
          />
          <p className="mt-4 text-center text-sm italic text-gray-500">
            (หากน้องเดินหมากเข้าช่องขุมทรัพย์หรือช่องคำอวยพร ช่องนั้น ๆ
            จะไม่มีผลเป็นครั้งที่สอง)
          </p>
        </div>
      ),
    },
    {
      title: "วิธีการเล่น (2)",
      description:
        "น้องสามารถเดินหมากได้โดยเลือกช่องเป้าหมายหรือลากหมากของน้องไปยังช่องเป้าหมาย เมื่อเข้าช่องบ่อน้ำที่สิ้นสุดแล้ว น้องสามารถเลือกเริ่มเล่นใหม่หรือเลือกส่งคำตอบได้ (คะแนนของข้อนี้มาจากการจัดอันดับแต้มที่ได้ร่วมกับน้องคนอื่น ๆ)",
    },
  ];

  const totalSteps = stepContent.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) setStep(1);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          วิธีการเล่น!
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0 sm:max-w-[40rem] [&>button:last-child]:text-white">
        <div className="flex justify-center p-6">
          {stepContent[step - 1].imageSrc && (
            <Image
              src={stepContent[step - 1].imageSrc ?? "/"}
              alt={stepContent[step - 1].title}
              width={300}
              height={300}
            />
          )}
        </div>
        <div className="space-y-6 px-6 pb-6 pt-3">
          <DialogHeader>
            <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
            <DialogDescription className="pt-4 text-start text-white/70">
              {stepContent[step - 1].description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center gap-2 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <Button
                  variant="default"
                  size="icon"
                  key={index}
                  className={cn(
                    "size-2",
                    index + 1 === step ? "text-white" : "opacity-20",
                  )}
                  onClick={() => setStep(index + 1)}
                />
              ))}
            </div>
            <DialogFooter className="flex w-full flex-row-reverse">
              <DialogClose asChild>
                <Button type="button" variant="ghost">
                  ข้าม
                </Button>
              </DialogClose>
              {step < totalSteps ? (
                <Button
                  className="group"
                  type="button"
                  onClick={handleContinue}
                >
                  ถัดไป
                  <ArrowRightIcon
                    className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                <DialogClose asChild>
                  <Button type="button">เข้าใจแล้ว!</Button>
                </DialogClose>
              )}
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
