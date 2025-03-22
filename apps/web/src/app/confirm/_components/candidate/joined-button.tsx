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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CircleCheckBigIcon } from "lucide-react";

interface JoinedButtonProps {
  isInfoDone?: boolean;
  isAnswerDone?: boolean;
  disabled?: boolean;
}

function JoinedButton({
  disabled,
  isAnswerDone,
  isInfoDone,
}: JoinedButtonProps) {
  if (!isAnswerDone && !isInfoDone) {
    return (
      <>
        <HoverCard openDelay={0} closeDelay={20}>
          <HoverCardTrigger>
            <Button type="button" disabled>
              เข้าร่วม! <CircleCheckBigIcon />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            sideOffset={10}
            className="font-noto-sans-thai-looped"
            align="center"
          >
            น้อง ๆ จำเป็นต้องกรอกข้อมูลให้เสร็จ และ ตอบคำถามให้ครบ!
          </HoverCardContent>
        </HoverCard>
      </>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" disabled={disabled}>
          เข้าร่วม! <CircleCheckBigIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ยืนยันการเข้าร่วม ค่าย Comcamp36 !
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white/70">
            หากกดเข้าร่วมแล้วจะไม่สามารถย้อนกลับได้น่ะ
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
          <AlertDialogAction>ยืนยันเข้าร่วมค่าย</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default JoinedButton;
