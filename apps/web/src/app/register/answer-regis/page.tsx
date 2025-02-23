"use client";

import { TextShimmer } from "@/components/text/text-shimmer";
import {
  CardContent,
  CardDescription,
  CardForm,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatThaiBuddhist } from "@/libs/date";
import { fetchQuery } from "@/libs/server/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import RegisterFormSkeleton from "../skeleton";
import AnswerRegis, { formSchema } from "./form";

function RegisterInfoPage() {
  const queryClient = useQueryClient();
  const { data, isPending: isUserDataPending } = fetchQuery.useQuery(
    "get",
    "/answer/user-regis",
  );

  const { mutate } = fetchQuery.useMutation("post", "/answer/user-regis", {
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
    <CardForm className="h-fit w-full max-w-[110rem]">
      <CardHeader>
        <CardTitle>
          <TextShimmer
            duration={2}
            className="text-4xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
          >
            คำถามคัดเลือก 1
          </TextShimmer>
        </CardTitle>
        <CardDescription hidden>
          <small>อย่าลืมกด</small>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-fit">
        <AnswerRegis
          data={{
            answer1: data?.answer1 ? data.answer1 : "",
            answer2: data?.answer2 ? data.answer2 : "",
            answer3: data?.answer3 ? data.answer3 : "",
            answer4: data?.answer4 ? data.answer4 : "",
            answer5: data?.answer5 ? data.answer5 : "",
            answer6_1: data?.answer6_1 ? data.answer6_1 : "",
            answer6_2: data?.answer6_2 ? data.answer6_2 : "",
          }}
          onSubmit={onSubmit}
        />
      </CardContent>
    </CardForm>
  );
}
export default RegisterInfoPage;
