"use client";

import AnswerAcademic, {
  formSchema,
} from "@/app/register/answer-academic/form";
import RegisterFormSkeleton from "@/app/register/skeleton";
import { formatThaiBuddhist } from "@/libs/date";
import { fetchQuery } from "@/libs/server/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import FormCard from "../form-card";

function RegisterInfoPage() {
  const { data: userData } = fetchQuery.useQuery("get", "/auth/me", {
    refetchOnWindowFocus: false,
  });
  const queryClient = useQueryClient();

  const { data, isPending: isUserDataPending } = fetchQuery.useQuery(
    "get",
    "/answer/user-academic",
    undefined,
    {
      refetchOnWindowFocus: false,
    },
  );

  const { mutate, isPending } = fetchQuery.useMutation(
    "post",
    "/answer/user-academic",
    {
      onSuccess: (mutateData) => {
        queryClient.setQueryData(["answer", { id: mutateData.id }], mutateData);
        toast.success("บันทึกสำเร็จ!", {
          description: `บันทึกสำเร็จ ณ​ ${formatThaiBuddhist(new Date())} กดปุ่มถัดไป เพื่อไปหน้าถัดไป`,
        });
      },
      onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!"),
    },
  );

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate({
      body: {
        chess_notation: data.chess_notation,
        chess_score: data.chess_score,
        algo_answer: [
          data.algo_answer1,
          data.algo_answer2,
          data.algo_answer3,
        ].join("\n<-----ALGO-ANSWER-SPLITTER----->\n"),
      },
    });
  };

  if (isUserDataPending) {
    return <RegisterFormSkeleton />;
  }

  return (
    <FormCard title="ปริศนาสถาบันวิศวะ">
      <AnswerAcademic
        data={{
          chess_notation: data?.chess_notation ? data.chess_notation : "",
          chess_score: data?.chess_score ? data.chess_score : 0,
          algo_answer1:
            data?.algo_answer?.split(
              "\n<-----ALGO-ANSWER-SPLITTER----->\n",
            )[0] || "",
          algo_answer2:
            data?.algo_answer?.split(
              "\n<-----ALGO-ANSWER-SPLITTER----->\n",
            )[1] || "",
          algo_answer3:
            data?.algo_answer?.split(
              "\n<-----ALGO-ANSWER-SPLITTER----->\n",
            )[2] || "",
        }}
        onSubmit={onSubmit}
        isPending={isPending}
        hasSubmit={
          userData?.has_submit_answer ? userData.has_submit_answer : false
        }
      />
    </FormCard>
  );
}
export default RegisterInfoPage;
