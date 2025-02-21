"use client";

import { FileUploader } from "@/components/files";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="face_photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รูปใบหน้าชัดเจน</FormLabel>
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
              <FormItem>
                <FormLabel>สำเนาบัตรประชาชน</FormLabel>
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
              <FormItem>
                <FormLabel>หนังสือยินยอมผู้ปกครอง</FormLabel>
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
              <FormItem>
                <FormLabel>เอกสาร P1</FormLabel>
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
              <FormItem>
                <FormLabel>เอกสาร P7</FormLabel>
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
        </div>
        <div className="flex w-full justify-center">
          <Button>บันทึก</Button>
        </div>
      </form>
    </Form>
  );
}
export default FilesForm;
