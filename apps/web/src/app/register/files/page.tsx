"use client";

import { TextShimmer } from "@/components/text/text-shimmer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { env } from "@/env";
import { fetchClient, fetchQuery } from "@/libs/server/client";
import { useEffect, useState } from "react";
import { z } from "zod";
import FilesForm, { formSchema } from "./form";

function RegisterInfoPage() {
  const { data: userFiles } = fetchQuery.useQuery("get", "/files/user-files");
  const [files, setFiles] = useState({
    face_photo_path: "",
    p1_path: "",
    p7_path: "",
    parent_permission_path: "",
    thai_nationalid_copy_path: "",
  });

  useEffect(() => {
    const getAllFilesUrl = async () => {
      if (userFiles) {
        const { data } = await fetchClient.POST("/files/geturl", {
          body: {
            face_photo_key: userFiles.face_photo_filepath,
            thai_nationalid_copy_key: userFiles.thai_nationalid_copy_filepath,
            parent_permission_key: userFiles.parent_permission_filepath,
            p1_key: userFiles.p1_filepath,
            p7_key: userFiles.p7_filepath,
          },
        });
        setFiles({
          face_photo_path: data?.face_photo_filepath
            ? data.face_photo_filepath
            : "",
          p1_path: data?.p1_filepath ? data.p1_filepath : "",
          p7_path: data?.p7_filepath ? data.p7_filepath : "",
          parent_permission_path: data?.parent_permission_filepath
            ? data.parent_permission_filepath
            : "",
          thai_nationalid_copy_path: data?.thai_nationalid_copy_filepath
            ? data.thai_nationalid_copy_filepath
            : "",
        });
      }
    };
    getAllFilesUrl();
  }, [userFiles]);

  console.log(files);

  const [isUploading, setIsUploading] = useState(false);
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("face_photo", data.face_photo[0]);
    formData.append("thai_nationalid_copy", data.thai_nationalid_copy[0]);
    formData.append("parent_permission", data.parent_permission[0]);
    formData.append("p1", data.p1[0]);
    formData.append("p7", data.p7[0]);

    setIsUploading(true);
    await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/files/upload`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    setIsUploading(false);
  };

  console.log(isUploading);

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
