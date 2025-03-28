import { DateTimePicker } from "@/components/date/datetime-picker";
import { FileUploader } from "@/components/files";
import RadioGroupBoolean from "@/components/radio-group-boolean";
import OsGroupSelector from "@/components/select/os-dynselect";
import PreferFoodSelector from "@/components/select/preferfood-dynselect";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
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
import { CircleAlertIcon, CopyIcon, SaveIcon } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const formSchema = z.object({
  nickname: z
    .string()
    .min(1, "จำเป็นต้องระบุชื่อเล่น")
    .regex(/^[ก-๙a-zA-Z\s]+$/, "ชื่อต้องประกอบด้วยตัวอักษรภาษาไทยหรืออังกฤษ"),
  request_food: z.string().min(1, "จำเป็นต้องระบุอาหาร"),
  ipad: z.boolean(),
  os_notebook: z
    .string()
    .min(1, "จำเป็นต้องระบุ ระบบปฏิบัติการ (OS) ของโน้ตบุ๊กที่นำมา"),
  have_mouse: z.boolean(),
  travel: z.string().min(1, "จำเป็นต้องระบุวิธีการเดินทางมาเข้าร่วมค่าย"),
  receipt_image: z
    .array(z.instanceof(File))
    .min(1, "จำเป็นต้องอัปโหลดรูปใบหน้าตรง"),
  receipt_datetime: z.date(),
});

export type FormSchema = z.infer<typeof formSchema>;

interface ConfirmFormProps {
  data: FormSchema;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isConfirmationinfoPending: boolean;
  isReceiptUploadPending: boolean;
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
        className="flex flex-col gap-12 text-start"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-10">
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
                    หากไม่มีในตัวเลือก เช่น มีอาการแพ้อาหาร โปรดเลือก &quot;อื่น
                    ๆ&quot; แล้วระบุ
                  </FormDescription>
                  <div className="rounded-md border border-green-400/50 px-4 py-3 text-green-400">
                    <div className="flex gap-3">
                      <CircleAlertIcon
                        className="mt-0.5 shrink-0 opacity-60"
                        size={16}
                        aria-hidden="true"
                      />
                      <div className="grow space-y-1">
                        <p className="text-sm font-bold">ตัวอย่าง</p>
                        <ul className="list-inside list-disc text-sm opacity-80">
                          <li>
                            อาหารพิเศษ เช่น ฮาลาล มังสวิรัติ ปกติ แพ้อาหารทะเล
                            หรือระบุอาหารที่แพ้อื่น ๆ{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="os_notebook"
              render={({ field: { onChange, value, ...fieldProps } }) => (
                <FormItem>
                  <OsGroupSelector
                    {...fieldProps}
                    value={value}
                    onValueChange={onChange}
                  />
                  <FormDescription className="text-balance">
                    หากน้อง ๆ ใช้ Linux/Unix อื่น ๆ ที่ไม่มีในตัวเลือก
                    กรุณาเลือก &quot;อื่น ๆ&quot; และระบุชื่อ Distro ด้วย สำหรับ
                    Windows ที่ไม่ใช่เวอร์ชั่น 11/10 โปรดเลือก &quot;อื่น
                    ๆ&quot; และระบุว่าเป็น Windows เวอร์ชั่นใด
                  </FormDescription>
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2">
              <FormField
                control={form.control}
                name="ipad"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>มี iPad/Tablet ส่วนตัวหรือไม่</FormLabel>
                    <FormControl>
                      <RadioGroupBoolean
                        value={field.value}
                        onValueChange={field.onChange}
                        true_label="มี iPad/Tablet"
                        false_label="ไม่มี iPad/Tablet"
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
                    <FormLabel>สามารถนำเมาส์ส่วนตัวมาได้หรือไม่</FormLabel>
                    <FormControl>
                      <RadioGroupBoolean
                        value={field.value}
                        onValueChange={field.onChange}
                        true_label="สามารถนำเมาส์ส่วนตัวมาได้"
                        false_label="ต้องการยืมเมาส์จากทางค่าย"
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
                    เขียนอธิบายวิธีการมาค่ายของน้อง
                    ทั้งนี้เพื่อให้พี่ค่ายสามารถวางแผนการอำนวยความสะดวกให้น้องได้อย่างเต็มที่
                  </FormDescription>
                  <div className="rounded-md border border-green-400/50 px-4 py-3 text-green-400">
                    <div className="flex gap-3">
                      <CircleAlertIcon
                        className="mt-0.5 shrink-0 opacity-60"
                        size={16}
                        aria-hidden="true"
                      />
                      <div className="grow space-y-1">
                        <p className="text-base font-bold">ตัวอย่าง</p>
                        <ul className="list-inside list-disc text-base opacity-80">
                          <li>
                            เดินทางจากบ้านพักด้วยรถโดยสารประจำทางสาย 75
                            ลงป้ายหน้ามหาวิทยาลัยฯ
                          </li>
                          <li>
                            ทั้งนี้หากมีข้อสงสัยเรื่องการเดินทาง
                            สามารถติดต่อฝ่ายประชาสัมพันธ์
                            <a
                              className="cursor-pointer underline"
                              href="https://comcamp.io/#contact"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              ได้ที่นี่
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h5 className="font-bold">ค่ามัดจำการยืนยันสิทธิ์</h5>
            <div className="flex w-full flex-col items-center justify-center gap-2 pt-6">
              <div className="flex items-center justify-center rounded-md bg-white px-10 py-5">
                <Image
                  style={{ width: "100%", height: "auto" }}
                  width={0}
                  height={0}
                  src="/static/image/bkk_bank_logo.svg"
                  alt="Hero card section"
                  loading="lazy"
                />
              </div>
              <p className="font-bold">จำนวน 350 บาท</p>
              <div className="w-full rounded-md border border-green-400/50 px-4 py-3 text-green-400">
                <div className="flex gap-3">
                  <CircleAlertIcon
                    className="mt-0.5 shrink-0 opacity-60"
                    size={24}
                    aria-hidden="true"
                  />
                  <div className="grow space-y-1">
                    <p className="text-xl font-bold">ธนาคารกรุงเทพ</p>
                    <ul className="list-inside list-disc text-sm opacity-80">
                      <li className="space-x-2 text-lg">
                        เลขที่บัญชี 098-5-844455
                        <Button
                          size="icon"
                          className="ml-2"
                          variant="outline"
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText("0985844455");
                            toast.success("คัดลอกสำเร็จ!", {
                              description: "",
                            });
                          }}
                        >
                          <CopyIcon />
                        </Button>
                      </li>
                      <li className="text-lg">
                        ชื่อบัญชี นาย ภูมิพัฒน์ อภิวาทธนะพงศ์
                      </li>
                      <li className="text-lg">
                        จ่ายเพื่อเป็นค่ามัดจำเท่านั้น และจะได้คืนหลังจบค่าย
                        สามารถอ่านเพิ่มเติมเกี่ยวกับเงินมัดจำ
                        <a
                          className="cursor-pointer underline"
                          href="/confirm/policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ได้ที่นี่
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-12 pt-6">
                <FormField
                  control={form.control}
                  name="receipt_image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ใบเสร็จ</FormLabel>
                      <FormControl>
                        <FileUploader
                          maxFileCount={1}
                          maxSize={4 * 1024 * 1024}
                          value={field.value}
                          onValueChange={field.onChange}
                          accept={{ "image/*": [] }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="receipt_datetime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>วันเวลาที่โอนเงิน</FormLabel>
                      <FormControl>
                        <DateTimePicker
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-6">
          <Button
            disabled={
              props.isConfirmationinfoPending || props.isReceiptUploadPending
            }
          >
            {props.isConfirmationinfoPending || props.isReceiptUploadPending ? (
              <Spinner />
            ) : (
              <div className="flex gap-x-1">
                {" "}
                <SaveIcon /> บันทึกข้อมูลเพิ่มเติม
              </div>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default ConfirmForm;
