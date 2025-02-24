import { formatThaiBuddhist } from "@/libs/date";
import { toast } from "sonner";

export const formToastSuccess = () => {
  toast.success("บันทึกสำเร็จ!", {
    description: `บันทึกสำเร็จ ณ​ ${formatThaiBuddhist(new Date())} กดปุ่ม > เพื่อไปหน้าถัดไป ถ้ากรอกแบบฟอร์มครบแล้วอย่าลืมส่งใบสมัครที่หน้าหลักด้วย!`,
    duration: 5000,
  });
};
