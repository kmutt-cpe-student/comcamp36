import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Control, FieldPath, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fullname: z.string().min(1, "กรุณากรอกชื่อ-นามสกุล"),
  age: z.number().min(15, "อายุต้องไม่น้อยกว่า 15 ปี"),
  birth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "กรุณากรอกวันเกิดให้ถูกต้อง"),
  gender: z.string(),
  religion: z.string(),
  blood_group: z.string(),
  graduation: z.string(),
  school: z.string(),
  course: z.string(),
  telephone: z.string().min(10, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง"),
  email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
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

const ApplyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      age: 16,
      birth: "",
      gender: "",
      religion: "",
      blood_group: "",
      graduation: "",
      school: "",
      course: "",
      telephone: "",
      email: "",
      medical_coverage: "",
      chronic_disease: "",
      self_medicine: "",
      drug_allergic: "",
      food_allergic: "",
      prefer_food: "",
      address: "",
      home_phone_tel: "",
      comcamp_attendance: true,
      size: "",
      everyday_attendance: true,
      has_laptop: true,
      travel: "",
      parent_fullname: "",
      parent_relation: "",
      parent_phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="font-noto-sans-thai container mx-auto max-w-4xl py-10">
      <div className="bg-charcoal-1 overflow-hidden rounded-lg border border-gray-200 shadow-lg">
        <div className="bg-charcoal-1 rounded-t-lg px-6 py-6 text-white">
          <h1 className="text-center text-3xl font-semibold">
            แบบฟอร์มสมัครเข้าร่วมค่าย
          </h1>
        </div>

        <div className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-charcoal-1 rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 border-b pb-3 text-xl font-semibold text-white">
                  ข้อมูลส่วนตัว
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ApplyFormField
                    name="fullname"
                    label="ชื่อ-นามสกุล"
                    placeholder="กรุณากรอกชื่อ-นามสกุลของคุณ"
                    formControl={form.control}
                  />
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <ApplyFormField
                      name="age"
                      label="อายุ"
                      placeholder="กรุณากรอกอายุของคุณ"
                      inputType="number"
                      formControl={form.control}
                    />
                    <ApplyFormField
                      name="birth"
                      label="วันเกิด"
                      placeholder="YYYY-MM-DD"
                      inputType="date"
                      formControl={form.control}
                    />
                  </div>
                  <ApplyFormField
                    name="gender"
                    label="เพศ"
                    placeholder="กรุณาเลือกเพศของคุณ"
                    inputType="select"
                    options={["ชาย", "หญิง", "อื่นๆ"]}
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="religion"
                    label="ศาสนา"
                    placeholder="กรุณากรอกศาสนาของคุณ"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="blood_group"
                    label="กรุ๊ปเลือด"
                    placeholder="กรุณาเลือกกรุ๊ปเลือดของคุณ"
                    inputType="select"
                    options={["A", "B", "AB", "O"]}
                    formControl={form.control}
                  />
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-charcoal-1 rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 border-b pb-3 text-xl font-semibold text-white">
                  ข้อมูลการศึกษา
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ApplyFormField
                    name="graduation"
                    label="จบการศึกษา"
                    placeholder="กรุณากรอกระดับการศึกษาของคุณ"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="school"
                    label="โรงเรียน"
                    placeholder="กรุณากรอกชื่อโรงเรียน"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="course"
                    label="คอร์สที่เรียน"
                    placeholder="กรุณากรอกคอร์สที่คุณเรียน"
                    formControl={form.control}
                    className="md:col-span-2"
                  />
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-charcoal-1 rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 border-b pb-3 text-xl font-semibold text-white">
                  ข้อมูลการติดต่อ
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ApplyFormField
                    name="telephone"
                    label="เบอร์โทรศัพท์"
                    placeholder="กรุณากรอกเบอร์โทรศัพท์ของคุณ"
                    inputType="tel"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="email"
                    label="อีเมล"
                    placeholder="example@email.com"
                    inputType="email"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="address"
                    label="ที่อยู่"
                    placeholder="กรุณากรอกที่อยู่ของคุณ"
                    inputType="textarea"
                    formControl={form.control}
                    className="col-span-full"
                  />
                  <ApplyFormField
                    name="home_phone_tel"
                    label="เบอร์โทรบ้าน"
                    placeholder="กรุณากรอกเบอร์โทรบ้าน"
                    formControl={form.control}
                  />
                </div>
              </div>

              {/* Health Section */}
              <div className="bg-charcoal-1 rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 border-b pb-3 text-xl font-semibold text-white">
                  ข้อมูลสุขภาพ
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ApplyFormField
                    name="medical_coverage"
                    label="ประกันสุขภาพ"
                    placeholder="กรุณากรอกข้อมูลประกันสุขภาพ"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="chronic_disease"
                    label="โรคประจำตัว"
                    placeholder="กรุณากรอกโรคประจำตัว"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="self_medicine"
                    label="การใช้ยาของตัวเอง"
                    placeholder="กรุณากรอกข้อมูลการใช้ยาของตัวเอง"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="drug_allergic"
                    label="แพ้ยา"
                    placeholder="กรุณากรอกข้อมูลการแพ้ยา"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="food_allergic"
                    label="แพ้อาหาร"
                    placeholder="กรุณากรอกข้อมูลการแพ้อาหาร"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="prefer_food"
                    label="อาหารที่ชอบ"
                    placeholder="กรุณากรอกอาหารที่ชอบ"
                    formControl={form.control}
                  />
                </div>
              </div>

              {/* Camp Information Section */}
              <div className="bg-charcoal-1 rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 border-b pb-3 text-xl font-semibold text-white">
                  ข้อมูลการเข้าร่วมค่าย
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ApplyFormField
                    name="comcamp_attendance"
                    label="เข้าร่วมค่าย"
                    inputType="checkbox"
                    formControl={form.control}
                    yesNo={true}
                  />
                  <ApplyFormField
                    name="size"
                    label="ขนาดเสื้อ"
                    placeholder="กรุณาเลือกขนาดเสื้อ"
                    inputType="select"
                    options={["S", "M", "L", "XL", "XXL"]}
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="everyday_attendance"
                    label="เข้าร่วมทุกวัน"
                    inputType="checkbox"
                    formControl={form.control}
                    yesNo={true}
                  />
                  <ApplyFormField
                    name="has_laptop"
                    label="มีโน้ตบุ๊ก"
                    inputType="checkbox"
                    formControl={form.control}
                    yesNo={true}
                  />
                  <ApplyFormField
                    name="travel"
                    label="การเดินทาง"
                    placeholder="กรุณากรอกวิธีการเดินทาง"
                    formControl={form.control}
                  />
                </div>
              </div>

              {/* Parent Information Section */}
              <div className="bg-charcoal-1 rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 border-b pb-3 text-xl font-semibold text-white">
                  ข้อมูลผู้ปกครอง
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <ApplyFormField
                    name="parent_fullname"
                    label="ชื่อ-นามสกุลผู้ปกครอง"
                    placeholder="กรุณากรอกชื่อ-นามสกุลผู้ปกครอง"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="parent_relation"
                    label="ความสัมพันธ์กับผู้ปกครอง"
                    placeholder="กรุณากรอกความสัมพันธ์กับผู้ปกครอง"
                    formControl={form.control}
                  />
                  <ApplyFormField
                    name="parent_phone"
                    label="เบอร์โทรผู้ปกครอง"
                    placeholder="กรุณากรอกเบอร์โทรผู้ปกครอง"
                    formControl={form.control}
                  />
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  className="bg-vermilion hover:bg-vermilion-2 rounded-lg px-8 py-3 text-lg font-semibold text-white"
                >
                  ส่งฟอร์ม
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

interface ApplyFormFieldProps {
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  description?: string;
  inputType?: string;
  options?: string[];
  formControl: Control<z.infer<typeof formSchema>>;
  yesNo?: boolean;
  className?: string;
}

const ApplyFormField: React.FC<ApplyFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType = "text",
  options = [],
  formControl,
  yesNo = false,
  className = "",
}) => {
  return (
    <FormField
      name={name}
      control={formControl}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="text-vermilion font-medium">{label}</FormLabel>
          <FormControl>
            {yesNo ? (
              <div className="flex items-center space-x-6 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${name}-yes`}
                    checked={field.value === true}
                    onCheckedChange={() => field.onChange(true)}
                    className="border-gray-400"
                  />
                  <label
                    htmlFor={`${name}-yes`}
                    className="text-vermilion cursor-pointer text-sm"
                  >
                    ใช่
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${name}-no`}
                    checked={field.value === false}
                    onCheckedChange={() => field.onChange(false)}
                    className="border-gray-400"
                  />
                  <label
                    htmlFor={`${name}-no`}
                    className="text-vermilion cursor-pointer text-sm"
                  >
                    ไม่
                  </label>
                </div>
              </div>
            ) : inputType === "checkbox" ? (
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  id={name}
                  checked={field.value as boolean}
                  onCheckedChange={field.onChange}
                  className="border-gray-400"
                />
                <label
                  htmlFor={name}
                  className="text-vermilion cursor-pointer text-sm"
                >
                  ยืนยัน
                </label>
              </div>
            ) : inputType === "select" ? (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value as string}
              >
                <SelectTrigger className="bg-charcoal-1 w-full border-gray-300 text-white focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : inputType === "textarea" ? (
              <Textarea
                {...field}
                placeholder={placeholder}
                className="bg-charcol-1 min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={field.value as string}
              />
            ) : (
              <Input
                {...field}
                type={inputType}
                placeholder={placeholder}
                className="bg-charcoal-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={field.value as string | number}
              />
            )}
          </FormControl>
          {description && (
            <FormDescription className="mt-1 text-xs text-gray-500">
              {description}
            </FormDescription>
          )}
          <FormMessage className="mt-1 text-xs text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default ApplyForm;
