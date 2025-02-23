"use client";

import FormStepper from "@/app/register/form-stepper";
import { FileUploader } from "@/components/files";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PARENT_FORM_URL =
  "https://axizqhrfmehmjjbztewj.supabase.co/storage/v1/object/public/comcamp36-public-files/comcamp36-parent-consent.pdf";

export const formSchema = z.object({
  face_photo: z
    .array(z.instanceof(File))
    .min(1, "จำเป็นต้องอัพโหลดรูปใบหน้าตรง"),
  thai_nationalid_copy: z
    .array(z.instanceof(File))
    .min(1, "จำเป็นต้องอัพโหลดสำเนาบัตรประชาชน"),
  parent_permission: z
    .array(z.instanceof(File))
    .min(1, "จำเป็นต้องอัพโหลดหนังสือยินยอมผู้ปกครอง"),
  p1: z
    .array(z.instanceof(File))
    .min(1, "จำเป็นต้องอัพโหลดสำเนาระเบียนแสดงผลการเรียน (ปพ.1)"),
  p7: z
    .array(z.instanceof(File))
    .min(1, "จำเป็นต้องอัพโหลดสำเนาใบรับรองผลการศึกษา (ปพ.7)"),
});

interface FilesFormProps {
  data: z.infer<typeof formSchema>;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isPending?: boolean;
  hasSubmit: boolean;
}

function FilesForm(props: FilesFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: props.data,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(props.onSubmit)}>
        <CardContent className="font-noto-sans-thai-looped grid grid-cols-1 justify-start gap-10 lg:grid-cols-2">
          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="face_photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รูปใบหน้าตรง</FormLabel>
                <FormDescription className="text-white/40">
                  <strong>เป็นไฟล์รูปภาพที่เห็นใบหน้าชัดเจน</strong>
                </FormDescription>
                <FormControl>
                  <FileUploader
                    value={field.value}
                    onValueChange={field.onChange}
                    maxFileCount={1}
                    maxSize={4 * 1024 * 1024}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="thai_nationalid_copy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>สำเนาบัตรประชาชน</FormLabel>
                <FormDescription className="text-white/40">
                  <strong>สามารถใช้สำเนาบัตรนักเรียนแทนได้</strong>{" "}
                  (เซ็นสำเนาถูกต้อง)
                </FormDescription>
                <FormControl>
                  <FileUploader
                    maxFileCount={1}
                    maxSize={4 * 1024 * 1024}
                    value={field.value}
                    onValueChange={field.onChange}
                    accept={{ "image/*": [], "application/pdf": [] }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="parent_permission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>หนังสือยินยอมผู้ปกครอง</FormLabel>
                <FormDescription className="hover:text-vermilion text-white/40 hover:underline">
                  <strong>
                    <a
                      href={PARENT_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      คลิกที่นี่เพื่อดาวน์โหลดไฟล์หนังสือยินยอมผู้ปกครอง
                    </a>
                  </strong>
                </FormDescription>
                <FormControl>
                  <FileUploader
                    maxFileCount={1}
                    maxSize={4 * 1024 * 1024}
                    value={field.value}
                    onValueChange={field.onChange}
                    accept={{ "image/*": [], "application/pdf": [] }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="p1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>สำเนาระเบียนแสดงผลการเรียน (ปพ.1)</FormLabel>
                <FormDescription className="text-white/40">
                  <strong>
                    สามารถใช้เอกสารแสดงผลการเรียนภาคการศึกษาล่าสุดแทนได้
                  </strong>{" "}
                  (เซ็นสำเนาถูกต้อง)
                </FormDescription>
                <FormControl>
                  <FileUploader
                    maxFileCount={1}
                    maxSize={4 * 1024 * 1024}
                    value={field.value}
                    onValueChange={field.onChange}
                    accept={{ "image/*": [], "application/pdf": [] }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="p7"
            render={({ field }) => (
              <FormItem>
                <FormLabel>สำเนาใบรับรองผลการศึกษา (ปพ.7)</FormLabel>
                <FormDescription className="text-white/40">
                  <strong>
                    สามารถใช้เอกสารรับรองการเป็นนักเรียนแทนได้ เช่น
                    สำเนาบัตรนักเรียน
                  </strong>{" "}
                  (เซ็นสำเนาถูกต้อง)
                </FormDescription>
                <FormControl>
                  <FileUploader
                    maxFileCount={1}
                    maxSize={4 * 1024 * 1024}
                    value={field.value}
                    onValueChange={field.onChange}
                    accept={{ "image/*": [], "application/pdf": [] }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <div className="flex w-full justify-center pt-16">
          <Button
            type="submit"
            disabled={
              props.isPending || !form.formState.isDirty || props.hasSubmit
            }
          >
            {props.isPending ? <Spinner /> : "อัพโหลดไฟล์"}
          </Button>
        </div>
        <CardFooter>
          <FormStepper />
        </CardFooter>
      </form>
    </Form>
  );
}
export default FilesForm;
