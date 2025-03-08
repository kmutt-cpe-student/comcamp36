"use client";

import FormCard from "@/app/register/form-card";
import FormStepper from "@/app/register/form-stepper";
import DatePicker from "@/components/date-picker";
import RadioGroupBoolean from "@/components/radio-group-boolean";
import BloodGroupSelector from "@/components/select/bloodgroup-dynselect";
import CourseSelector from "@/components/select/course-dynselect";
import GenderSelector from "@/components/select/gender-selector";
import GraduationSelector from "@/components/select/graduation-dynselect";
import ParentRelationSelector from "@/components/select/parentrelation-dynselect";
import PreferFoodSelector from "@/components/select/preferfood-dynselect";
import ReligionSelector from "@/components/select/religion-dynselect";
import TitleSelector from "@/components/select/title-selector";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "จำเป็นต้องระบุคำนำหน้า"),
  fullname: z
    .string()
    .min(1, "จำเป็นต้องระบุชื่อเต็ม")
    .regex(/^[ก-๙a-zA-Z\s]+$/, "ชื่อต้องประกอบด้วยตัวอักษรภาษาไทยหรืออังกฤษ"),
  age: z
    .number()
    .min(15, "อายุต้องมากกว่า 15 ปี ณ วันสมัคร")
    .max(20, "อายุเกินช่วงที่กำหนด"),
  birth: z.date(),
  gender: z.string().min(1, "จำเป็นต้องระบุเพศ"),
  religion: z.string().min(1, "จำเป็นต้องระบุศาสนา"),
  blood_group: z.string().min(1, "จำเป็นต้องระบุหมู่เลือด"),
  graduation: z.string().min(1, "จำเป็นต้องระบุระดับชั้นการศึกษา"),
  school: z.string().min(1, "จำเป็นต้องระบุสถานศึกษา"),
  course: z.string().min(1, "จำเป็นต้องระบุสายการเรียน"),
  telephone: z
    .string()
    .min(10, "เบอร์โทรศัพท์ต้องมี 10 หลัก")
    .max(10, "เบอร์โทรศัพท์ต้องมี 10 หลัก")
    .startsWith("0", "เบอร์โทรศัพท์ไม่ตรงตามแบบที่กำหนด")
    .regex(/[0-9]{10}$/, "เบอร์โทรศัพท์ไม่ตรงตามแบบที่กำหนด"),
  email: z.string().min(1, "จำเป็นต้องระบุอีเมล").email(),
  medical_coverage: z
    .string()
    .min(1, 'จำเป็นต้องระบุสิทธิการรักษาพยาบาล (หากไม่มีโปรดระบุ "-")'),
  chronic_disease: z
    .string()
    .min(1, 'จำเป็นต้องระบุโรคประจำตัว (หากไม่มีโปรดระบุ "-")'),
  self_medicine: z
    .string()
    .min(1, 'จำเป็นต้องระบุยาประจำตัว (หากไม่มีโปรดระบุ "-")'),
  drug_allergic: z
    .string()
    .min(1, 'จำเป็นต้องระบุยาที่แพ้ (หากไม่มีโปรดระบุ "-")'),
  food_allergic: z
    .string()
    .min(1, 'จำเป็นต้องระบุอาหารที่แพ้ (หากไม่มีโปรดระบุ "-")'),
  prefer_food: z.string().min(1, "จำเป็นต้องระบุอาหารที่รับประทาน"),
  address: z.string().min(1, "จำเป็นต้องระบุที่อยู่"),
  home_phone_tel: z
    .string()
    .min(1, 'จำเป็นต้องระบุเบอร์โทรศัพท์บ้าน (หากไม่มีโปรดระบุ "-")'),
  comcamp_attendance: z.boolean(),
  everyday_attendance: z.boolean(),
  has_laptop: z.boolean(),
  travel: z.string().min(1, "จำเป็นต้องระบุวิธีการเดินทางมาค่าย"),
  parent_fullname: z.string().min(1, "จำเป็นต้องระบุชื่อเต็มผู้ปกครอง"),
  parent_relation: z.string().min(1, "จำเป็นต้องระบุความสัมพันธ์กับผู้ปกครอง"),
  parent_phone: z
    .string()
    .min(10, "เบอร์โทรศัพท์ต้องมี 10 หลัก")
    .max(10, "เบอร์โทรศัพท์ต้องมี 10 หลัก")
    .startsWith("0", "เบอร์โทรศัพท์ไม่ตรงตามแบบที่กำหนด")
    .regex(/[0-9]{10}$/, "เบอร์โทรศัพท์ไม่ตรงตามแบบที่กำหนด"),
});

interface InfoFormProps {
  data: z.infer<typeof formSchema>;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isPending?: boolean;
  hasSubmit: boolean;
}

function InfoForm(props: InfoFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...props.data,
    },
  });

  return (
    <FormCard title="ข้อมูลส่วนตัว">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(props.onSubmit)}>
          <div className="font-noto-sans-thai-looped grid gap-4">
            <h5 className="font-bold">ข้อมูลส่วนบุคคล</h5>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-[1fr_10fr]">
              <FormField
                disabled={props.hasSubmit}
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
                        disabled={props.hasSubmit}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ชื่อเต็ม</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription className="text-white/40">
                      ไม่เอาคำนำหน้าชื่อ ตัวอย่างเช่น &quot;ห่านน้อย
                      คอยรัก&quot;
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>อายุ</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="birth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>วันเกิด</FormLabel>
                    <FormControl>
                      <DatePicker
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={props.hasSubmit}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>เพศ</FormLabel>
                    <FormControl>
                      <GenderSelector
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={props.hasSubmit}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="religion"
                render={({ field: { onChange, value, ...fieldProps } }) => (
                  <ReligionSelector
                    {...fieldProps}
                    value={value}
                    onValueChange={onChange}
                    disabled={props.hasSubmit}
                  />
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <FormField
                disabled={props.hasSubmit}
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
                disabled={true}
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ที่อยู่</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription className="text-white/40">
                      โปรดใช้ที่อยู่เต็ม ตัวอย่างเช่น &quot;เลขที่ 126
                      ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร
                      10140&quot;
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="home_phone_tel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>เบอร์โทรศัพท์บ้าน</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>หากไม่มีให้ใส่ - </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <h5 className="pt-12 font-bold">ประวัติการศึกษา</h5>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="graduation"
                render={({ field: { onChange, value, ...fieldProps } }) => (
                  <GraduationSelector
                    {...fieldProps}
                    value={value}
                    onValueChange={onChange}
                    disabled={props.hasSubmit}
                  />
                )}
              />
              <FormField
                disabled={props.hasSubmit}
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
                disabled={props.hasSubmit}
                control={form.control}
                name="course"
                render={({ field: { onChange, value, ...fieldProps } }) => (
                  <CourseSelector
                    {...fieldProps}
                    value={value}
                    onValueChange={onChange}
                    disabled={props.hasSubmit}
                  />
                )}
              />
            </div>

            <h5 className="pt-12 font-bold">ข้อมูลส่วนตัวทางสุขภาพ</h5>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="blood_group"
                render={({ field: { onChange, value, ...fieldProps } }) => (
                  <BloodGroupSelector
                    {...fieldProps}
                    value={value}
                    onValueChange={onChange}
                    disabled={props.hasSubmit}
                  />
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="medical_coverage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>สิทธิการรักษาพยาบาล</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>ไม่มีให้ใส่ - </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="chronic_disease"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>โรคประจำตัว</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>ไม่มีให้ใส่ - </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="self_medicine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ยาประจำตัว</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>ไม่มีให้ใส่ - </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="drug_allergic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ยาที่แพ้</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>ไม่มีให้ใส่ - </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="food_allergic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>อาหารที่แพ้</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>ไม่มีให้ใส่ - </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="prefer_food"
                render={({ field }) => (
                  <PreferFoodSelector
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={props.hasSubmit}
                  />
                )}
              />
            </div>

            <h5 className="pt-12 font-bold">ข้อมูลผู้ปกครองที่ติดต่อได้</h5>
            <FormField
              disabled={props.hasSubmit}
              control={form.control}
              name="parent_fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ชื่อเต็มผู้ปกครอง</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription className="text-white/40">
                    ไม่เอาคำนำหน้าชื่อ ตัวอย่างเช่น &quot;ห่านน้อย คอยรัก&quot;
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="parent_relation"
                render={({ field }) => (
                  <ParentRelationSelector
                    {...field}
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={props.hasSubmit}
                  />
                )}
              />
              <FormField
                disabled={props.hasSubmit}
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
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="comcamp_attendance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>เคยเข้าร่วม ComCamp</FormLabel>
                    <FormControl>
                      <RadioGroupBoolean
                        value={field.value}
                        onValueChange={field.onChange}
                        true_label="เคยเข้าร่วม ComCamp"
                        false_label="ไม่เคยเข้าร่วม ComCamp"
                        disabled={props.hasSubmit}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="has_laptop"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>สะดวกนำ Laptop มาค่าย</FormLabel>
                    <FormControl>
                      <RadioGroupBoolean
                        value={field.value}
                        onValueChange={field.onChange}
                        true_label="สะดวก"
                        false_label="ไม่สะดวก"
                        disabled={props.hasSubmit}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="everyday_attendance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      สะดวกเข้าร่วมค่ายทุกวันหรือไม่ (พักค้างคืน ณ
                      หอพักภายในมหาวิทยาลัย)
                    </FormLabel>
                    <FormControl>
                      <RadioGroupBoolean
                        value={field.value}
                        onValueChange={field.onChange}
                        true_label="สะดวกเข้าร่วมค่ายทุกวัน"
                        false_label="ไม่สะดวกเข้าร่วมค่ายทุกวัน"
                        disabled={props.hasSubmit}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              disabled={props.hasSubmit}
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

            <div className="flex w-full justify-center pt-16">
              <Button
                type="submit"
                disabled={
                  props.isPending || !form.formState.isDirty || props.hasSubmit
                }
              >
                {props.isPending ? <Spinner /> : "บันทึกข้อมูลส่วนบุคคล"}
              </Button>
            </div>

            <FormStepper />
          </div>
        </form>
      </Form>
    </FormCard>
  );
}
export default InfoForm;
