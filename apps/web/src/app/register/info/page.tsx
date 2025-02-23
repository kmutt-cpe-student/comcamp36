"use client";

import { formatThaiBuddhist } from "@/libs/date";
import { fetchQuery } from "@/libs/server/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import RegisterFormSkeleton from "../skeleton";
import InfoForm, { formSchema } from "./form";

function RegisterInfoPage() {
  const queryClient = useQueryClient();

  const { data, isPending: isUserDataPending } = fetchQuery.useQuery(
    "get",
    "/auth/me",
  );

  const { mutate, isPending } = fetchQuery.useMutation("post", "/users/info", {
    onSuccess: (mutateData) => {
      queryClient.setQueryData(["auth", { id: mutateData.id }], mutateData);
      toast.success("บันทึกสำเร็จ!", {
        description: `บันทึกสำเร็จ ณ​ ${formatThaiBuddhist(new Date())} กดปุ่มถัดไป เพื่อไปหน้าถัดไป`,
      });
    },
    onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!"),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate({
      body: {
        ...data,
        age: data.age,
        chronic_diseas: data.chronic_disease,
        everyday_attendence: data.everyday_attendance,
        birth: data.birth.toISOString(),
      },
    });
  };

  if (isUserDataPending) {
    return <RegisterFormSkeleton />;
  }

  return (
    <InfoForm
      data={{
        title: data?.title ? data?.title : "",
        fullname: data?.fullname ? data.fullname : "",
        age: data?.age ?? 0,
        birth: data?.birth ? new Date(data.birth) : new Date(),
        gender: data?.gender ? data.gender : "",
        religion: data?.religion ? data.religion : "",
        blood_group: data?.blood_group ? data.blood_group : "",
        graduation: data?.graduation ? data.graduation : "",
        school: data?.school ? data.school : "",
        course: data?.course ? data.course : "",
        telephone: data?.telephone ? data.telephone : "",
        email: data?.email ? data.email : "",
        medical_coverage: data?.medical_coverage ? data.medical_coverage : "",
        chronic_disease: data?.chronic_disease ? data.chronic_disease : "",
        self_medicine: data?.self_medicine ? data.self_medicine : "",
        drug_allergic: data?.drug_allergic ? data.drug_allergic : "",
        food_allergic: data?.food_allergic ? data.food_allergic : "",
        prefer_food: data?.prefer_food ? data.prefer_food : "",
        address: data?.address ? data.address : "",
        home_phone_tel: data?.home_phone_tel ? data.home_phone_tel : "",
        comcamp_attendance: data?.comcamp_attendance
          ? data.comcamp_attendance
          : false,
        everyday_attendance: data?.everyday_attendence
          ? data.everyday_attendence
          : false,
        has_laptop: data?.has_laptop ? data.has_laptop : false,
        travel: data?.travel ? data.travel : "",
        parent_fullname: data?.parent_fullname ? data.parent_fullname : "",
        parent_relation: data?.parent_relation ? data.parent_relation : "",
        parent_phone: data?.parent_phone ? data.parent_phone : "",
      }}
      onSubmit={onSubmit}
      isPending={isPending}
    />
  );
}
export default RegisterInfoPage;
