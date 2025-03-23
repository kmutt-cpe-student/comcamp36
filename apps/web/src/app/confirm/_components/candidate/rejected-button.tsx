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

interface RejectedButtonProps {
  disabled?: boolean;
  confirmReject: () => void;
}

function RejectedButton({ disabled, confirmReject }: RejectedButtonProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" disabled={disabled}>
          สละสิทธิ์ <CircleXIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-vermilion-1">
            สละสิทธิ์การเข้าร่วม ค่าย Comcamp36 !
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white/70">
            หากกดสละสิทธิ์แล้วจะไม่สามารถย้อนกลับได้น่ะ
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
          <Button onClick={confirmReject} variant="destructive">
            ยืนยันที่จะสละสิทธิ์
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default RejectedButton;
