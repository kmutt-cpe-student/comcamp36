"use client";

import ConfirmForm, {
  FormSchema,
} from "@/app/confirm/_components/candidate/form";
import JoinedButton from "@/app/confirm/_components/candidate/joined-button";
import RejectedButton from "@/app/confirm/_components/candidate/rejected-button";
import { ConfettiFireworks } from "@/components/animation/firework";
import { GradientButton } from "@/components/gradient-button";
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
import { components } from "@/libs/server/types";
import { ChevronLeft, CircleCheckBigIcon, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

import Question from "@/app/confirm/_components/candidate/question";

interface CandidateProps {
  confirmData:
    | {
        isPassed: boolean;
        confirm: components["schemas"]["Confirm"];
      }
    | undefined;
}

function Candidate(props: CandidateProps) {
  const [confirmStatus, setConfirmStatus] = useState<boolean | null>(null); //no สละสิทธิ์ yes ยืนยัน

  const { mutateAsync: mutateConfirmation, isPending: confirmationPending } =
    fetchQuery.useMutation("post", "/confirmation/user-confirmation", {
      onSuccess: (mutationData) => {
        if (mutationData.confirmation_status == "no") {
          toast.success("สละสิทธิ์เรียบร้อย!");
          window.location.reload();
        } else if (mutationData.confirmation_status == "yes") {
          toast.success("ยืนยันสิทธิ์เรียบร้อย!");
          window.location.reload();
        }
      },
      onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!"),
    });
  const {
    mutateAsync: mutateConfirmationInfo,
    isPending: confirmationPendingInfo,
  } = fetchQuery.useMutation("post", "/confirmation/user-confirmation-info", {
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

    await mutateConfirmationInfo({
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
      <div>
        {confirmStatus ? (
          <div className="flex flex-col gap-24">
            <Card className="w-full max-w-[110rem] px-5 sm:px-10">
              <CardHeader>
                <div
                  className="flex w-full cursor-pointer items-center justify-start gap-2 text-start text-sm transition-all hover:text-white"
                  onClick={() => setConfirmStatus(null)}
                >
                  <ChevronLeft /> <p className="text-sm">ย้อนกลับ</p>
                </div>
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
                  isConfirmationinfoPending={confirmationPendingInfo}
                  isReceiptUploadPending={receiptUploadPending}
                />
              </CardContent>
            </Card>

            {!props.confirmData?.confirm.isAnswerDone && (
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
                <CardContent>
                  <Question />
                </CardContent>
              </Card>
            )}

            <div className="flex w-full items-center justify-center gap-4">
              <JoinedButton
                confirmJoin={() =>
                  mutateConfirmation({
                    body: {
                      confirmation_status: "yes",
                    },
                  })
                }
                isConfirmLoading={confirmationPending}
                isAnswerDone={
                  props.confirmData?.confirm.isAnswerDone
                    ? props.confirmData.confirm.isAnswerDone
                    : null
                }
                isInfoDone={
                  props.confirmData?.confirm.isInfoDone
                    ? props.confirmData.confirm.isInfoDone
                    : null
                }
              />
            </div>
          </div>
        ) : (
          <div className="flex min-h-full w-full flex-col items-center justify-center gap-10">
            <div className="flex w-[25rem] justify-center">
              <Image
                style={{ width: "100%", height: "auto" }}
                width={5000}
                height={0}
                src="/static/image/placeholder/frontman-yellow.png"
                alt="Hero card section"
                loading="lazy"
                className="transition-all hover:scale-[1.1]"
              />
            </div>

            <div className="font-noto-sans-thai-looped bg-charcoal-1 mx-4 rounded-md border border-amber-500/50 p-7">
              <div className="flex items-center justify-start text-xl">
                <TriangleAlert
                  className="-mt-0.5 me-3 inline-flex size-10 text-green-500 opacity-60"
                  aria-hidden="true"
                />
                <div className="grid gap-2">
                  <TextShimmer
                    duration={2}
                    className="w-fit max-w-full text-2xl font-bold transition-opacity duration-200 [--base-color:var(--color-green-500)] [--base-gradient-color:var(--color-green-600)] dark:[--base-color:var(--color-green-500)] dark:[--base-gradient-color:var(--color-green-600)]"
                  >
                    ผ่านการคัดเลือก
                  </TextShimmer>
                  <p className="text-lg font-light text-green-500">
                    ยินดีด้วย! น้องๆได้รับการคัดเลือกให้เป็นตัวจริง!
                    หากต้องการเข้าร่วมค่ายให้น้องเลือก
                    &quot;กรอกข้อมูลเพิ่มเติมเพื่อยืนยันสิทธิ์&quot;
                    เพื่อกรอกข้อมูลเพิ่มเติมและยืนยันสิทธิ์ตามลำดับต่อไป
                    แต่หากน้องต้องการสละสิทธิ์ให้น้องเลือก &quot;สละสิทธิ์&quot;
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center">
                {props.confirmData?.confirm.confirmation_status == "no" ? (
                  <p className="text-vermilion">น้องได้ทำการสละสิทธิ์แล้ว</p>
                ) : props.confirmData?.confirm.confirmation_status == "yes" ? (
                  <p className="text-vermilion">
                    น้องได้ทำการยืนยันสิทธิ์แล้ว โปรดรออีเมลจากพี่ๆ
                  </p>
                ) : (
                  <div className="flex items-center justify-center">
                    <GradientButton
                      type="button"
                      className="mr-2 flex gap-2"
                      onClick={() => setConfirmStatus(true)}
                    >
                      <p className="text-lg">
                        กรอกข้อมูลเพิ่มเติมเพื่อยืนยันสิทธิ์
                      </p>{" "}
                      <CircleCheckBigIcon />
                    </GradientButton>
                    <RejectedButton
                      confirmReject={() =>
                        mutateConfirmation({
                          body: {
                            confirmation_status: "no",
                          },
                        })
                      }
                      isConfirmLoading={confirmationPending}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Candidate;
