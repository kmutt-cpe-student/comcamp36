"use client";

import {
  Card,
  CardContent,
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
    <div className="font-prompt flex h-screen justify-center pt-32">
      <Card className="h-fit w-full max-w-[110rem]">
        <CardHeader>
          <CardTitle>
            <h4 className="font-bold">ไฟล์ที่ต้องอับโหลด</h4>
          </CardTitle>
          <CardDescription hidden>
            <small>Card Description</small>
          </CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}
export default RegisterInfoPage;
