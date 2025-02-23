"use client";

import FilesForm, { formSchema } from "@/app/register/files/form";
import Wrapper from "@/app/register/files/wrapper";
import FormCard from "@/app/register/form-card";
import RegisterFormSkeleton from "@/app/register/skeleton";
import { formatThaiBuddhist } from "@/libs/date";
import JsonToFormData from "@/libs/server/body-serializer";
import { fetchQuery } from "@/libs/server/client";
import { toast } from "sonner";
import { z } from "zod";

function RegisterInfoPage() {
  const { data: userData } = fetchQuery.useQuery("get", "/auth/me", {
    refetchOnWindowFocus: false,
  });
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
    undefined,
    {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  );

  if (isGetFilesPending) {
    return <RegisterFormSkeleton />;
  }

  return (
    <FormCard title="ไฟล์ที่ต้องอับโหลด">
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
          hasSubmit={
            userData?.has_submit_answer ? userData.has_submit_answer : false
          }
        />
      )}
    </FormCard>
  );
}
export default RegisterInfoPage;
