import ConfirmForm, {
  FormSchema,
} from "@/app/confirm/_components/candidate/form";
import JoinedButton from "@/app/confirm/_components/candidate/joined-button";
import RejectedButton from "@/app/confirm/_components/candidate/rejected-button";
import { ConfettiFireworks } from "@/components/animation/firework";
import { TextShimmer } from "@/components/text/text-shimmer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JsonToFormData from "@/libs/server/body-serializer";
import { fetchQuery } from "@/libs/server/client";
import { toast } from "sonner";

interface CandidateProps {
  isAnswerDone: boolean;
}

function Candidate(props: CandidateProps) {
  const { mutateAsync: mutateConfirmation, isPending: confirmationPending } =
    fetchQuery.useMutation("post", "/confirmation/user-confirmation", {
      onSuccess: () => {
        toast.success("ยืนยันสิทธิ์เรียบร้อย!");
      },
      onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในการยืนยันสิทธิ์!"),
    });
  const { mutateAsync: mutateReceipt, isPending: receiptUploadPending } =
    fetchQuery.useMutation("post", "/files/upload-receipt", {
      onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในการอัพโหลดไฟล์!"),
    });

  const onSubmit = async (data: FormSchema) => {
    await mutateReceipt({
      body: {
        file: data.receipt_image[0],
      },
      bodySerializer: JsonToFormData,
    });

    await mutateConfirmation({
      body: {
        nickname: data.nickname,
        request_food: data.request_food,
        os_notebook: data.os_notebook,
        travel: data.travel,
        haveIpad: data.ipad,
        haveMouse: data.have_mouse,
        receipt_datetime: data.receipt_datetime.toISOString(),
      },
    });
  };

  return (
    <>
      <ConfettiFireworks />
      <div className="flex flex-col gap-24">
        <Card className="w-full max-w-[110rem] px-5 sm:px-10">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <TextShimmer
                duration={2}
                className="text-3xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
              >
                ขอแสดงความยินดีด้วย!
              </TextShimmer>
            </CardTitle>
            <CardDescription className="itemsce- font-noto-sans-thai-looped flex justify-center text-balance text-xl text-white">
              ยินดีด้วย! น้องได้รับการคัดเลือกเป็นผู้เข้าร่วมค่ายแล้ว
              กรุณากรอกข้อมูลเพิ่มเติมให้พี่ ๆ ด้วย
            </CardDescription>
          </CardHeader>
          <CardContent className="font-noto-sans-thai-looped pt-8">
            <ConfirmForm
              data={{
                nickname: "",
                request_food: "",
                ipad: true,
                os_notebook: "",
                have_mouse: false,
                travel: "",
                receipt_image: [],
                receipt_datetime: new Date(),
              }}
              onSubmit={(data) => {
                onSubmit(data);
              }}
              isConfirmationPending={confirmationPending}
              isReceiptUploadPending={receiptUploadPending}
            />
          </CardContent>
        </Card>

        {!props.isAnswerDone && (
          <Card className="w-full max-w-[110rem] px-5 sm:px-10">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <TextShimmer
                  duration={2}
                  className="text-3xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
                >
                  คำถาม!
                </TextShimmer>
              </CardTitle>
              <CardDescription className="itemsce- font-noto-sans-thai-looped flex justify-center text-balance text-xl text-white">
                พี่ ๆ ฝ่ายวิชาการมีคำถามสั้น ๆ สำหรับน้อง ๆ คำตอบของน้อง ๆ
                จะช่วยให้พี่ ๆ ออกแบบการเรียนการสอนได้เหมาะสมยิ่งขึ้น
                อาจจะมีหลายข้อนิดหน่อย แต่ตอบตามความเข้าใจของน้อง ๆ ได้เลย
                ไม่มีคำตอบที่ผิด
              </CardDescription>
            </CardHeader>
          </Card>
        )}

        <div className="flex w-full items-center justify-center gap-4">
          <JoinedButton isAnswerDone isInfoDone />
          <RejectedButton />
        </div>
      </div>
    </>
  );
}
export default Candidate;
