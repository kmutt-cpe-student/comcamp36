"use client";

import { TextShimmer } from "@/components/text/text-shimmer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import FilesForm, { formSchema } from "./form";

function RegisterInfoPage() {
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-[110rem]">
      <CardHeader>
        <CardTitle>
          <TextShimmer
            duration={2}
            className="text-4xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
          >
            ไฟล์ที่ต้องอับโหลด
          </TextShimmer>
        </CardTitle>
        <CardDescription hidden>
          <small>Card Description</small>
        </CardDescription>
      </CardHeader>
      <FilesForm
        data={{
          face_photo: [],
          p1: [],
          p7: [],
          parent_permission: [],
          thai_nationalid_copy: [],
        }}
        onSubmit={onSubmit}
      />
    </Card>
  );
}
export default RegisterInfoPage;
