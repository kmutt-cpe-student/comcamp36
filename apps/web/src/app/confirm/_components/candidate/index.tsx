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

interface CandidateProps {
  isAnswerDone: boolean;
}

function Candidate(props: CandidateProps) {
  const onSubmit = (data: FormSchema) => {
    console.log(data);
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
            <CardDescription className="itemsce- font-noto-sans-thai-looped flex justify-center text-xl text-white">
              น้องๆได้รับการคัดเลือกให้เป็นตัวจริง! ขอให้น้อง ๆ
              กรอกข้อมูลเพิ่มเติมให้พี่ ๆ ด้วย!
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
              <CardDescription className="itemsce- font-noto-sans-thai-looped flex justify-center text-xl text-white">
                นี้เป็นคำถามจากพี่ ๆ วิชาการ โดยถามเพื่อให้พี่ ๆ ได้ ออกแบบ
                วิธีการเรียนการสอนให้ดีขึ้น อาจจะเยอะหน่อยน่ะ
                ขอให้น้องๆตอบตามที่เข้าใจ
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
