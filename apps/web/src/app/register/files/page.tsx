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
import RegisterFormSkeleton from "../skeleton";
import FilesForm, { formSchema } from "./form";
import Wrapper from "./wrapper";

function RegisterInfoPage() {
  const { data: userData } = fetchQuery.useQuery("get", "/auth/me");
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

  const { data, isPending: isGetFilesPending } = fetchQuery.useQuery(
    "get",
    "/files/user-files",
  );

  if (isGetFilesPending) {
    return <RegisterFormSkeleton />;
  }
  
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
      {data ? (
        <Wrapper
          data={{
            face_photo: {
              url: data.face_photo?.url || "",
              name: data.face_photo?.name || "",
            },
            thai_nationalid_copy: {
              url: data.thai_nationalid_copy?.url || "",
              name: data.thai_nationalid_copy?.name || "",
            },
            parent_permission: {
              url: data.parent_permission?.url || "",
              name: data.parent_permission?.name || "",
            },
            p1: { url: data.p1?.url || "", name: data.p1?.name || "" },
            p7: { url: data.p7?.url || "", name: data.p7?.name || "" },
          }}
          onSubmit={onSubmit}
          isPending={isPending}
        />
      ) : (
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
          hasSubmit={userData?.has_submit_answer ? userData.has_submit_answer : false}
        />
      )}
    </Card>
  );
}
export default RegisterInfoPage;
