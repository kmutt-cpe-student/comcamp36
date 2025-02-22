"use client";

import { fetchQuery } from "@/libs/server/client";
import { z } from "zod";
import { statusToast } from "../toast";
import InfoForm, { formSchema } from "./form";

function RegisterInfoPage() {
  const { mutate } = fetchQuery.useMutation("post", "/users/info", statusToast);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate({
      body: {
        ...data,
        birth: data.birth.getDate(),
      },
    });
  };

  return (
    <InfoForm
      data={{
        title: "",
        fullname: "",
        age: 16,
        birth: new Date(),
        gender: "",
        religion: "",
        blood_group: "",
        graduation: "",
        school: "",
        course: "",
        telephone: "",
        email: "",
        medical_coverage: "",
        chronic_disease: "",
        self_medicine: "",
        drug_allergic: "",
        food_allergic: "",
        prefer_food: "",
        address: "",
        home_phone_tel: "",
        comcamp_attendance: true,
        everyday_attendance: true,
        has_laptop: true,
        travel: "",
        parent_fullname: "",
        parent_relation: "",
        parent_phone: "",
      }}
      onSubmit={onSubmit}
    />
  );
}
export default RegisterInfoPage;
