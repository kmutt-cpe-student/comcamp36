"use client";

import { formatThaiBuddhist } from "@/libs/date";
import { fetchQuery } from "@/libs/server/client";
import { toast } from "sonner";
import { Magnetic } from "../animation/magnetics";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

export default function SubmitAnswerBtn() {
  const { mutate, isPending, isSuccess } = fetchQuery.useMutation(
    "post",
    "/answer/submit-answer",
    {
      onSuccess() {
        toast.success("ส่งคำตอบสำเร็จ!", {
          description: `ส่งคำตอบสำเร็จ ณ​ ${formatThaiBuddhist(new Date())}`,
        });
      },
      onError() {
        toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!");
      },
    },
  );

  return (
    <Magnetic range={300} actionArea="global">
      <div className="my-4 flex flex-wrap justify-center gap-2 px-2 sm:gap-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="font-prompt mt-12 h-[4rem] w-fit rounded-3xl px-20 text-2xl"
              variant="destructive"
            >
              ส่งใบสมัคร! 🎉
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="border-vermilion/80">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-vermilion text-3xl">
                ส่งใบสมัคร!
              </AlertDialogTitle>
              <AlertDialogDescription className="text-lg text-white">
                หากส่งใบสมัครแล้วจะไม่สามารถแก้ไขได้
                โปรดตรวจสอบข้อมูลก่อนส่งให้ถูกต้องครบถ้วน
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  onClick={() => {
                    mutate({});
                  }}
                  disabled={isPending || isSuccess}
                  variant="destructive"
                >
                  ส่งใบสมัคร! 🎉
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Magnetic>
  );
}
