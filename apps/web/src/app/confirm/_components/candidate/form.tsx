import JoinedButton from "@/app/confirm/_components/candidate/joined-button";
import RejectedButton from "@/app/confirm/_components/candidate/rejected-button";
import RadioGroupBoolean from "@/components/radio-group-boolean";
import OsGroupSelector from "@/components/select/os_dynselect";
import PreferFoodSelector from "@/components/select/preferfood-dynselect";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleAlertIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  nickname: z
    .string()
    .min(1, "จำเป็นต้องระบุชื่อเล่น")
    .regex(/^[ก-๙a-zA-Z\s]+$/, "ชื่อต้องประกอบด้วยตัวอักษรภาษาไทยหรืออังกฤษ"),
  request_food: z.string().min(1, "จำเป็นต้องระบุอาหาร ถ้าไม่มีให้ -"),
  ipad: z.boolean(),
  os_notebook: z
    .string()
    .min(1, "จำเป็นต้องระบุ ระบบปฏิบัติการ (OS) ของโน็ตบุ็คที่นำมา"),
  have_mouse: z.boolean(),
  travel: z.string(),
  receipt_image: z
    .array(z.instanceof(File))
    .min(1, "จำเป็นต้องอัปโหลดรูปใบหน้าตรง"),
  receipt_datetime: z.date(),
});

export type FormSchema = z.infer<typeof formSchema>;

interface ConfirmFormProps {
  data: FormSchema;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isPending?: boolean;
}

function ConfirmForm(props: ConfirmFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: props.data,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.onSubmit)}
        className="flex flex-col gap-12"
      >
        <div className="grid grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-12">
            <h5 className="font-bold">ข้อมูลเพิ่มเติม</h5>
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ชื่อเล่น</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="request_food"
              render={({ field }) => (
                <FormItem>
                  <PreferFoodSelector
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                  <FormDescription>
                    คำอธิบายสำหรับอาหารที่รับประทาน
                  </FormDescription>
                  <div className="rounded-md border border-green-500/50 px-4 py-3 text-green-600">
                    <div className="flex gap-3">
                      <CircleAlertIcon
                        className="mt-0.5 shrink-0 opacity-60"
                        size={16}
                        aria-hidden="true"
                      />
                      <div className="grow space-y-1">
                        <p className="text-sm font-bold">ตัวอย่าง</p>
                        <ul className="list-inside list-disc text-sm opacity-80">
                          <li>ตัวอย่างให้น้องๆ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="os_notebook"
              render={({ field: { onChange, value, ...fieldProps } }) => (
                <OsGroupSelector
                  {...fieldProps}
                  value={value}
                  onValueChange={onChange}
                />
              )}
            />
            <div className="grid grid-cols-2">
              <FormField
                control={form.control}
                name="ipad"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>มี Ipad/Tablet ไหม</FormLabel>
                    <FormControl>
                      <RadioGroupBoolean
                        value={field.value}
                        onValueChange={field.onChange}
                        true_label="มี Ipad/Tablet"
                        false_label="ไม่มี Ipad/Tablet"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="have_mouse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>นำ Mouse มาได้ไหม</FormLabel>
                    <FormControl>
                      <RadioGroupBoolean
                        value={field.value}
                        onValueChange={field.onChange}
                        true_label="นำ Mouse มาได้"
                        false_label="นำ Mouse มาไม่ได้"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="travel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>วิธีการเดินทางมาค่าย</FormLabel>
                  <FormControl>
                    <Textarea
                      className="max-h-[1rem] [resize:none]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    คำอธิบายสำหรับการเดินทางมาค่าย
                  </FormDescription>
                  <div className="rounded-md border border-green-500/50 px-4 py-3 text-green-600">
                    <div className="flex gap-3">
                      <CircleAlertIcon
                        className="mt-0.5 shrink-0 opacity-60"
                        size={16}
                        aria-hidden="true"
                      />
                      <div className="grow space-y-1">
                        <p className="text-sm font-bold">ตัวอย่าง</p>
                        <ul className="list-inside list-disc text-sm opacity-80">
                          <li>ตัวอย่างให้น้องๆ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <h5 className="font-bold">ค่ายืนยันสิทธิ์</h5>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-6">
          <RejectedButton />
          <JoinedButton isAllDone={false} />
        </div>
      </form>
    </Form>
  );
}
export default ConfirmForm;
