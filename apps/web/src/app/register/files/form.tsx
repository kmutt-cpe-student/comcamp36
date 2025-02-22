"use client";

import FormStepper from "@/app/register/form-stepper";
import { FileUploader } from "@/components/files";
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

export const formSchema = z.object({
  face_photo: z.array(z.instanceof(File)).optional(),
  thai_nationalid_copy: z.array(z.instanceof(File)).optional(),
  parent_permission: z.array(z.instanceof(File)).optional(),
  p1: z.array(z.instanceof(File)).optional(),
  p7: z.array(z.instanceof(File)).optional(),
});

interface FilesFormProps {
  data: z.infer<typeof formSchema>;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
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
            control={form.control}
            name="face_photo"
            render={({ field }) => (
              <FormItem className="h-fit">
                <FormLabel>รูปใบหน้าชัดเจน</FormLabel>
                <FormDescription className="text-white/40">
                  <strong>เห็นใบหน้าชัดเจน</strong>
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
            control={form.control}
            name="thai_nationalid_copy"
            render={({ field }) => (
              <FormItem className="h-fit">
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
            control={form.control}
            name="parent_permission"
            render={({ field }) => (
              <FormItem className="h-fit">
                <FormLabel>หนังสือยินยอมผู้ปกครอง</FormLabel>
                <FormDescription className="text-white/40">
                  <strong>ดาวโหลดไฟล์หนังสือยินยอมผู้ปกครอง</strong>
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
            control={form.control}
            name="p1"
            render={({ field }) => (
              <FormItem className="h-fit">
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
            control={form.control}
            name="p7"
            render={({ field }) => (
              <FormItem className="h-fit">
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
        <CardFooter>
          <FormStepper />
        </CardFooter>
      </form>
    </Form>
  );
}
export default FilesForm;
