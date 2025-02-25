import { Separator } from "@/components/ui/separator";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StatusProps {
  files_done: boolean;
  academic_done: boolean;
  regis_done: boolean;
  info_done: boolean;
}

const steps = [
  {
    image: "/static/image/regis/0.png",
    href: "/register/info",
    label: "ข้อมูลส่วนตัว",
    doneKey: "info_done",
  },
  {
    image: "/static/image/regis/1.png",
    href: "/register/answer-regis",
    label: "ปริศนาปัญญาชน",
    doneKey: "regis_done",
  },
  {
    image: "/static/image/regis/2.png",
    href: "/register/answer-academic",
    label: "ปริศนาสถาบันวิศวะ",
    doneKey: "academic_done",
  },
  {
    image: "/static/image/regis/3.png",
    href: "/register/files",
    label: "ไฟล์ที่ต้องอัพโหลด",
    doneKey: "files_done",
  },
];

function Status(props: StatusProps) {
  let done = 0;
  if (props.info_done) done++;
  if (props.regis_done) done++;
  if (props.academic_done) done++;
  if (props.files_done) done++;
  return (
    <div className="flex w-full flex-col gap-5 pt-4">
      <h4 className="w-full text-center font-medium text-white lg:text-start">
        การกรอกแบบฟอร์ม ({done}/4)
      </h4>
      <Separator />

      <div className="flex w-full flex-1 flex-wrap justify-center gap-8">
        {steps.map((step) => (
          <Link key={step.href} href={step.href}>
            <motion.div
              className={cn(
                "bg-charcoal-1 flex size-[16rem] flex-col items-center justify-center rounded-xl border border-white/20 p-6 px-10 py-12 text-white/80 shadow hover:cursor-pointer",
                props[step.doneKey as keyof StatusProps] && "bg-vermilion",
              )}
              whileHover={{ scale: 1.05 }}
            >
              <div className="size-27 relative flex">
                {props[step.doneKey as keyof StatusProps] && (
                  <CheckCircle className="z-1 absolute right-0 top-0 size-28 text-white" />
                )}
                <Image src={step.image} alt="" className="object-cover" fill />
              </div>
              <p className="mt-4 font-medium text-white">{step.label}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Status;
