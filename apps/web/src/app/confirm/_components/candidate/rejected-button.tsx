import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CircleXIcon } from "lucide-react";

function RejectedButton({ disabled }: { disabled?: boolean }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" disabled={disabled}>
          สละสิทธิ์ <CircleXIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-vermilion">
            สละสิทธิ์การเข้าร่วมค่าย ComCamp36 !
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white/70">
            เมื่อน้อง ๆ กดยืนยันการสละสิทธิ์แล้ว จะไม่สามารถกลับมาแก้ไขได้อีก
            กรุณาตัดสินใจให้แน่ใจก่อนยืนยัน
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
          <Button variant="destructive">ยืนยันการสละสิทธิ์</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default RejectedButton;
