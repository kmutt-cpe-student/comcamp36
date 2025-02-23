"use client";

import { TextShimmer } from "@/components/text/text-shimmer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatThaiBuddhist } from "@/libs/date";
import { fetchQuery } from "@/libs/server/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import RegisterFormSkeleton from "../skeleton";
import AnswerAcademic, { formSchema } from "./form";

function RegisterInfoPage() {
  const queryClient = useQueryClient();

  const { data, isPending: isUserDataPending } = fetchQuery.useQuery(
    "get",
    "/answer/user-academic",
  );

  const { mutate } = fetchQuery.useMutation("post", "/answer/user-academic", {
    onSuccess: (mutateData) => {
      queryClient.setQueryData(["answer", { id: mutateData.id }], mutateData);
      toast.success("บันทึกสำเร็จ!", {
        description: `บันทึกสำเร็จ ณ​ เวลา ${formatThaiBuddhist(new Date())} กดปุ่มถัดไป เพื่อไปหน้าถัดไป`,
      });
    },
    onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!"),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate({
      body: {
        ...data,
      },
    });
  };

  if (isUserDataPending) {
    return <RegisterFormSkeleton />;
  }

  return (
    <Card className="h-fit w-full max-w-[110rem]">
      <CardHeader className="pb-20">
        <CardTitle>
          <TextShimmer
            duration={2}
            className="text-4xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
          >
            คำถามคัดเลือก 2
          </TextShimmer>
        </CardTitle>
        <CardDescription hidden>
          <small>Card Description</small>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-fit">
        <AnswerAcademic
          data={{
            chess_notation: data?.chess_notation ? data.chess_notation : "",
            chess_score: data?.chess_score ? data.chess_score : 0,
            algo_answer: data?.algo_answer ? data.algo_answer : "",
          }}
          onSubmit={onSubmit}
        />
      </CardContent>
    </Card>
  );
}
export default RegisterInfoPage;
