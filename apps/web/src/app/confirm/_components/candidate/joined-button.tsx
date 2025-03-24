import { GradientButton } from "@/components/gradient-button";
import Spinner from "@/components/spinner";
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CircleCheckBigIcon } from "lucide-react";

interface JoinedButtonProps {
  isInfoDone: string | null;
  isAnswerDone: string | null;
  disabled?: boolean;
  isConfirmLoading: boolean;
  confirmJoin: () => void;
}

function JoinedButton({
  disabled,
  isAnswerDone,
  isInfoDone,
  confirmJoin,
  isConfirmLoading,
}: JoinedButtonProps) {
  if (!isAnswerDone || !isInfoDone) {
    return (
      <>
        <HoverCard openDelay={0} closeDelay={20}>
          <HoverCardTrigger>
            <Button type="button" disabled>
              เข้าร่วม! และ ยืนยันสิทธิ์ <CircleCheckBigIcon />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            sideOffset={10}
            className="font-noto-sans-thai-looped"
            align="center"
          >
            น้อง ๆ จำเป็นต้องกรอกข้อมูลให้เสร็จ และ ตอบคำถามให้ครบ! ตอนนี้น้อง
            {isInfoDone
              ? "ตอบคำถามไม่ครบ!"
              : isAnswerDone
                ? "กรอกข้อมูลไม่ครบ!"
                : "กรอกข้อมูลและตอบคำถามจากฝ่ายวิชาการไม่ครบ!"}
          </HoverCardContent>
        </HoverCard>
      </>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <GradientButton
          type="button"
          disabled={disabled}
          className="flex gap-2"
        >
          <p className="text-lg">เข้าร่วม! และ ยืนยันสิทธิ์</p>{" "}
          <CircleCheckBigIcon />
        </GradientButton>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>ยืนยันการเข้าร่วมค่าย Comcamp36 !</AlertDialogTitle>
          <AlertDialogDescription className="text-white/70">
            เมื่อน้อง ๆ กดยืนยันแล้ว จะไม่สามารถแก้ไขข้อมูลได้อีก
            กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนยืนยันนะ
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="px-5 py-6">ยกเลิก</AlertDialogCancel>
          <GradientButton
            onClick={confirmJoin}
            type="button"
            disabled={disabled || isConfirmLoading}
            className="flex gap-2 rounded-lg px-2 py-3 text-sm"
          >
            {!isConfirmLoading ? "ยืนยันการเข้าร่วม" : <Spinner />}
          </GradientButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default JoinedButton;
