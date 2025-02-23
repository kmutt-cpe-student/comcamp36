"use client";

import { formatThaiBuddhist } from "@/libs/date";
import { fetchQuery } from "@/libs/server/client";
import { toast } from "sonner";
import { Magnetic } from "../animation/magnetics";
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
      <Button
        className="rounded-4xl font-prompt mt-12 h-[4rem] w-fit px-20 text-2xl"
        variant="destructive"
        onClick={() => {
          mutate({});
        }}
        disabled={isPending || isSuccess}
      >
        ส่งใบสมัคร! 🎉
      </Button>
    </Magnetic>
  );
}
