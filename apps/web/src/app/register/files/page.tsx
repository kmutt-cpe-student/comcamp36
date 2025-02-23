"use client";

import { TextShimmer } from "@/components/text/text-shimmer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatThaiBuddhist } from "@/libs/date";
import JsonToFormData from "@/libs/server/body-serializer";
import { fetchQuery } from "@/libs/server/client";
import { toast } from "sonner";
import { z } from "zod";
import FilesForm, { formSchema } from "./form";

function RegisterInfoPage() {
  const { mutate, isPending } = fetchQuery.useMutation(
    "post",
    "/files/upload",
    {
      onSuccess() {
        toast.success("บันทึกสำเร็จ!", {
          description: `บันทึกสำเร็จ ณ​ ${formatThaiBuddhist(new Date())} กดปุ่มถัดไป เพื่อไปหน้าถัดไป`,
        });
      },
      onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในระบบ!"),
    },
  );

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    mutate({
      body: {
        face_photo: data.face_photo[0],
        p1: data.p1[0],
        p7: data.p7[0],
        parent_permission: data.parent_permission[0],
        thai_nationalid_copy: data.thai_nationalid_copy[0],
      },
      bodySerializer: JsonToFormData,
    });
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
          thai_nationalid_copy: [],
          parent_permission: [],
          p1: [],
          p7: [],
        }}
        onSubmit={onSubmit}
        isPending={isPending}
      />
    </Card>
  );
}
export default RegisterInfoPage;
