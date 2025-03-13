"use client";

import AnswerRegis, { formSchema } from "@/app/register/answer-regis/form";
import FormCard from "@/app/register/form-card";
import RegisterFormSkeleton from "@/app/register/skeleton";
import { formToastSuccess } from "@/app/register/toast";
import { fetchQuery } from "@/libs/server/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";

function RegisterInfoPage() {
  const queryClient = useQueryClient();
  const { data, isPending: isUserDataPending } = fetchQuery.useQuery(
    "get",
    "/answer/user-regis",
    undefined,
    {
      refetchOnWindowFocus: false,
    },
  );

  const { mutate, isPending } = fetchQuery.useMutation(
    "post",
    "/answer/user-regis",
    {
      onSuccess: (mutateData) => {
        queryClient.setQueryData(["answer", { id: mutateData.id }], mutateData);
        formToastSuccess();
      },
      onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!"),
    },
  );

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
    <FormCard title="ปริศนาปัญญาชน">
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
        isPending={isPending}
        hasSubmit={true}
      />
    </FormCard>
  );
}
export default RegisterInfoPage;
