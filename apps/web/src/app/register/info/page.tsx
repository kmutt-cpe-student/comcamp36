"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import InfoForm, { formSchema } from "./form";

function RegisterInfoPage() {
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-[110rem]">
      <CardHeader>
        <CardTitle>
          <h4 className="font-bold">ข้อมูลส่วนตัว</h4>
        </CardTitle>
        <CardDescription hidden>
          <small>Card Description</small>
        </CardDescription>
      </CardHeader>
      <CardContent>
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
            size: "",
            everyday_attendance: true,
            has_laptop: true,
            travel: "",
            parent_fullname: "",
            parent_relation: "",
            parent_phone: "",
          }}
          onSubmit={onSubmit}
        />
      </CardContent>
    </Card>
  );
}
export default RegisterInfoPage;
