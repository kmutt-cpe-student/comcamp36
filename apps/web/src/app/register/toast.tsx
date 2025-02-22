import { formatThaiBuddhist } from "@/libs/date";
import { toast } from "sonner";

export const statusToast = {
  onSuccess() {
    toast.success("บันทึกสำเร็จ!", {
      description: `บันทึกสำเร็จ ณ​ เวลา ${formatThaiBuddhist(new Date())} กดปุ่มถัดไป เพื่อไปหน้าถัดไป`,
    });
  },
  onError() {
    toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!");
  },
};
