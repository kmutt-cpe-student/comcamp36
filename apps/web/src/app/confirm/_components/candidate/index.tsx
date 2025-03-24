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
import { motion } from "framer-motion";
import {
  ArrowDown,
  ChevronLeft,
  CircleCheck,
  CircleCheckBigIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import Question from "@/app/confirm/_components/candidate/question";
import ConfirmConsent from "@/components/card/confirm-consent";
import { getReceipt } from "@/libs/files";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface CandidateProps {
  confirmData:
    | {
        isPassed: boolean;
        confirm: components["schemas"]["Confirm"];
      }
    | undefined;

  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<
    QueryObserverResult<
      { isPassed: boolean; confirm: components["schemas"]["Confirm"] },
      never
    >
  >;
}

function Candidate(props: CandidateProps) {
  const [confirmStatus, setConfirmStatus] = useState<boolean | null>(null); //no สละสิทธิ์ yes ยืนยัน

  const {
    data: userData,
    isPending: userDataPending,
    isError: userDataError,
  } = fetchQuery.useQuery("get", "/auth/me");

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

    const utcDate = new Date(
      data.receipt_datetime.getTime() -
        data.receipt_datetime.getTimezoneOffset() * 60000,
    );
    await mutateConfirmationInfo({
      body: {
        nickname: data.nickname,
        request_food: data.request_food,
        os_notebook: data.os_notebook,
        travel: data.travel,
        haveIpad: data.ipad,
        haveMouse: data.have_mouse,
        receipt_datetime: utcDate.toISOString(),
      },
    });
  };

  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      if (props.confirmData?.confirm.receipt_path) {
        const receiptFile = await getReceipt(
          props.confirmData.confirm.receipt_path,
        );
        setFiles(receiptFile ? receiptFile.flat() : []);
      }
    };

    fetchFiles();
  }, [props.confirmData]);

  console.log(files);

  return (
    <>
      <ConfettiFireworks />
      <ConfirmConsent />
      <div>
        {confirmStatus ? (
          <div className="flex flex-col gap-24">
            <Card className="w-full max-w-[110rem] px-5 sm:px-10">
              <CardHeader>
                <div
                  className="flex w-full cursor-pointer items-center justify-start gap-2 text-start text-sm transition-all hover:text-white"
                  onClick={() => setConfirmStatus(null)}
                >
                  <ChevronLeft />{" "}
                  <p className="text-sm">กลับไปหน้ายืนยันสิทธิ์</p>
                </div>
                <CardTitle className="flex items-center justify-center">
                  <TextShimmer
                    duration={2}
                    className="text-3xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
                  >
                    ข้อมูลสำหรับการยืนยันสิทธิ์
                  </TextShimmer>
                </CardTitle>
                <CardDescription className="font-noto-sans-thai-looped flex flex-col items-center justify-center gap-y-1 text-xl text-white">
                  <span>
                    โปรดกรอกข้อมูลเพิ่มเติมต่อไปนี้
                    เพื่อให้พี่ค่ายสามารถเตรียมสิ่งที่จำเป็นสำหรับน้องได้ถูกต้อง
                  </span>
                  <br />{" "}
                  <span className="font-bold">**ไม่มีผลต่อผลการคัดเลือก**</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="font-noto-sans-thai-looped pt-8">
                <ConfirmForm
                  data={{
                    nickname: props.confirmData?.confirm.nickname || "",
                    request_food:
                      props.confirmData?.confirm.request_food || "ปกติ",
                    ipad: props.confirmData?.confirm.haveIpad || false,
                    os_notebook:
                      props.confirmData?.confirm.os_notebook || "Windows",
                    have_mouse: props.confirmData?.confirm.haveMouse || false,
                    travel: props.confirmData?.confirm.travel || "",
                    receipt_image: files,
                    receipt_datetime: props.confirmData?.confirm
                      .receipt_datetime
                      ? new Date(
                          props.confirmData.confirm.receipt_datetime.replace(
                            "Z",
                            "",
                          ),
                        )
                      : new Date(),
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
                      ชุดคำถามจากฝ่ายวิชาการ
                    </TextShimmer>
                  </CardTitle>
                  <CardDescription className="font-noto-sans-thai-looped flex flex-col items-center justify-center text-xl text-white">
                    <div className="flex flex-col text-left">
                      <span className="font-bold">คำชี้แจง</span>
                      <span>
                        1. ชุดคำถามนี้มีทั้งหมด 30 ข้อ
                        โดยมีทั้งแบบทดสอบพื้นฐานและชุดคำถาม
                      </span>
                      <span>
                        2. ส่วนของแบบทดสอบนี้ไม่มีการแก้ไขเพิ่มเติม
                        หากมีข้อสงสัยหรือไม่มั่นใจในคำตอบให้เลือกตอบตามดุลยพินิจของตนเอง
                      </span>
                      <span>3. ชุดคำถามนี้ไม่มีผลต่อผลการคัดเลือก</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Question refetch={props.refetch} />
                </CardContent>
              </Card>
            )}

            <div className="flex w-full flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <p>คลิกที่ปุ่มด่านล่างเพื่อยืนยันสิทธิ์</p>
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: 0 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowDown />
                </motion.div>
              </div>
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
              <div className="flex flex-col items-center justify-start text-xl">
                <CircleCheck
                  className="-mt-0.5 me-3 inline-flex size-20 text-green-400 opacity-60"
                  aria-hidden="true"
                />
                <div className="flex flex-col justify-center gap-2 text-center">
                  <TextShimmer
                    duration={2}
                    className="mx-auto max-w-full text-3xl font-bold transition-opacity duration-200 [--base-color:var(--color-green-500)] [--base-gradient-color:var(--color-green-600)] dark:[--base-color:var(--color-green-500)] dark:[--base-gradient-color:var(--color-green-600)]"
                  >
                    ผ่านการคัดเลือก
                  </TextShimmer>
                  <p className="lg:max-w-2/3 mx-auto text-lg font-light text-green-300">
                    ยินดีด้วย! น้องผ่านการคัดเลือกเข้าสู่ค่าย ComCamp 36!
                    หากต้องการเข้าร่วมค่ายโปรดเลือก
                    &quot;กรอกข้อมูลเพิ่มเติมเพื่อยืนยันสิทธิ์&quot;
                    เพื่อกรอกข้อมูลเพิ่มเติมและยืนยันสิทธิ์ตามลำดับต่อไป
                    แต่หากต้องการสละสิทธิ์ให้น้องเลือก &quot;สละสิทธิ์&quot;
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center">
                {props.confirmData?.confirm.confirmation_status == "no" ? (
                  <p className="text-vermilion">น้องได้ทำการสละสิทธิ์แล้ว</p>
                ) : props.confirmData?.confirm.confirmation_status == "yes" ? (
                  <p className="text-vermilion">
                    น้องได้ทำการยืนยันสิทธิ์เรียบร้อยแล้ว
                    โปรดรออีเมลยืนยันจากพี่ ๆ
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
              {!userDataPending && !userDataError && (
                <p className="pt-4 text-center text-base text-gray-400">
                  {userData?.fullname} - {userData?.email}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Candidate;
