"use client";

import GenderSelector from "@/components/select/gender-selector";
import TitleSelector from "@/components/select/title-selector";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  title: z.string(),
  fullname: z.string(),
  age: z.number(),
  birth: z.date(),
  gender: z.string(),
  religion: z.string(),
  blood_group: z.string(),
  graduation: z.string(),
  school: z.string(),
  course: z.string(),
  telephone: z.string(),
  email: z.string(),
  medical_coverage: z.string(),
  chronic_disease: z.string(),
  self_medicine: z.string(),
  drug_allergic: z.string(),
  food_allergic: z.string(),
  prefer_food: z.string(),
  address: z.string(),
  home_phone_tel: z.string(),
  comcamp_attendance: z.boolean(),
  size: z.string(),
  everyday_attendance: z.boolean(),
  has_laptop: z.boolean(),
  travel: z.string(),
  parent_fullname: z.string(),
  parent_relation: z.string(),
  parent_phone: z.string(),
});

interface InfoFormProps {
  data: z.infer<typeof formSchema>;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}

function InfoForm(props: InfoFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: props.data,
  });

  return (
    <Card className="w-full max-w-[110rem]">
      <CardHeader>
        <CardTitle>
          <h4 className="font-bold">แบบฟอร์มรับสมัคร</h4>
        </CardTitle>
        <CardDescription hidden>
          <small>Card Description</small>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(props.onSubmit)}>
            <div className="font-noto-sans-thai-looped grid gap-4">
              <h5 className="font-bold">ข้อมูลส่วนตัว</h5>
              <div className="grid w-full grid-cols-[1fr_10fr] gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>คำนำหน้า</FormLabel>
                      <FormControl>
                        <TitleSelector
                          value={field.value}
                          placeholder="คำนำหน้า"
                          onValueChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ชื่อเต็ม</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-4 gap-6">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>อายุ</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birth"
                  render={() => (
                    <FormItem>
                      <FormLabel>วันเกิด</FormLabel>
                      <FormControl></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>เพศ</FormLabel>
                      <FormControl>
                        <GenderSelector
                          value={field.value}
                          onValueChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="religion"
                  render={() => (
                    <FormItem>
                      <FormLabel>ศาสนา</FormLabel>
                      <FormControl></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>เบอร์โทรศัพท์</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>อีเมล</FormLabel>
                      <FormControl>
                        <Input {...field} disabled />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ที่อยู่</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="home_phone_tel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>เบอร์โทรศัพท์บ้าน</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <h5 className="pt-12 font-bold">ประวัติการศึกษา</h5>

              <div className="grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="graduation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ระดับชั้นการศึกษา</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="school"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>สถานศึกษา</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>สายการเรียน</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <h5 className="pt-12 font-bold">ข้อมูลส่วนตัวทางสุขภาพ</h5>

              <div className="grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="blood_group"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>กรุ็ปเลือด</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="medical_coverage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>สิทธิการรักษาพยาบาล</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="chronic_disease"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>โรคประจำตัว</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="self_medicine"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ยาประจำตัว</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="drug_allergic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ยาที่แพ้</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="food_allergic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>อาหารที่แพ้</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="prefer_food"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        อาหารที่รับประทาน (ปกติ/อิสลาม/มังสวิรัติ/อื่น ๆ
                        โปรดระบุ)
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <h5 className="pt-12 font-bold">ข้อมูลผู้ปกครองที่ติดต่อได้</h5>
              <FormField
                control={form.control}
                name="parent_fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อเต็มผู้ปกครอง</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="parent_relation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ความสัมพันธ์กับผู้ปกครอง</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parent_phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>เบอร์โทรศัพท์ผู้ปกครอง</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <h5 className="pt-12 font-bold">อื่นๆ</h5>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="comcamp_attendance"
                  render={() => (
                    <FormItem>
                      <FormLabel>เคยเข้าร่วม Comcamp</FormLabel>
                      <FormControl></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="has_laptop"
                  render={() => (
                    <FormItem>
                      <FormLabel>มี Laptop</FormLabel>
                      <FormControl></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="size"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Size เสื้อ</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="everyday_attendance"
                  render={() => (
                    <FormItem>
                      <FormLabel>
                        สะดวกเข้าร่วมค่ายทุกวันหรือไม่ (ค้างคืน พักที่หอในมอ)
                      </FormLabel>
                      <FormControl></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="travel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>วิธีการเดินทางมาค่าย</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full justify-center pt-10">
                <Button>บันทึก</Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
export default InfoForm;
