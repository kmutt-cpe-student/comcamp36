"use client";

import { formatThaiBuddhist } from "@/libs/date";
import { fetchClient } from "@/libs/server/client";
import { toast } from "sonner";

export default function SubmitAnswerBtn() {
  async function submitAnswer() {
    try {
      await fetchClient.POST("/answer/submit-answer");
      toast.success("ส่งคำตอบสำเร็จ!", {
        description: `ส่งคำตอบสำเร็จ ณ​ ${formatThaiBuddhist(new Date())}`,
      });
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!");
      console.error(error);
    }
  }

  return (
    <button
      onClick={() => submitAnswer()}
      className="bg-vermilion border-vermilion-special hover:bg-vermilion-1 hover:border-vermilion cursor-pointer rounded-lg border-2 px-10 transition-all duration-500"
    >
      ส่งใบสมัคร
    </button>
  );
}
