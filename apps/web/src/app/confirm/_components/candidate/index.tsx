import ConfirmForm, {
  FormSchema,
} from "@/app/confirm/_components/candidate/form";
import { ConfettiFireworks } from "@/components/animation/firework";
import { TextShimmer } from "@/components/text/text-shimmer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Candidate() {
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <>
      <ConfettiFireworks />
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
              nickname: "สมชาย",
              request_food: "ข้าวผัด",
              ipad: true,
              os_notebook: "Windows",
              have_mouse: false,
              travel: "รถไฟ",
              receipt_image: [new File([""], "receipt.png")],
              receipt_datetime: new Date(),
            }}
            onSubmit={(data) => {
              onSubmit(data);
            }}
          />
        </CardContent>
      </Card>
    </>
  );
}
export default Candidate;
