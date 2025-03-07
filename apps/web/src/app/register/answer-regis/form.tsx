"use client";

import FormStepper from "@/app/register/form-stepper";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  answer1: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  answer2: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  answer3: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  answer4: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  answer5: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  answer6_1: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  answer6_2: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
});

interface AnswerRegisProps {
  data: z.infer<typeof formSchema>;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isPending?: boolean;
  hasSubmit: boolean;
}

function AnswerRegis(props: AnswerRegisProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: props.data,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.onSubmit)}
        className="font-noto-sans-thai-looped"
      >
        <div className="grid gap-12 md:gap-20">
          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="answer1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>1. น้องคาดหวังอะไรจากค่าย ComCamp36</FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="answer2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  2. ในยุคที่ AI และหุ่นยนต์สามารถทำงานแทนมนุษย์ได้มากขึ้น
                  น้องคิดว่าวิศวกรคอมพิวเตอร์ยังมีความสำคัญอย่างไร?
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="answer3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex flex-col">
                    <Label>
                      3. หากน้องและทีมจำนวน 5 คน
                      กำลังอยู่บนยานอวกาศที่ติดอยู่ในวงโคจรของดาวเคราะห์ดวงหนึ่ง
                      ยานน้องได้รับความเสียหายจากอุกกาบาตที่ชนเข้ามา ระบบอื่น ๆ
                      ของยานได้รับความเสียหายเล็กน้อย
                      แต่ระบบกรองน้ำของยานเสียหายมาก น้ำสะอาดที่เหลือมีเพียง 40
                      ลิตร ทีมของคุณต้องอยู่รอดให้ได้อีก 60
                      วันก่อนที่ทีมกู้ภัยจากโลกจะมาถึง
                    </Label>
                    <div className="flex w-full justify-center py-4">
                      <div className="font-noto-sans-thai-looped border-vermilion-1/30 focus-visible:ring-vermilion/60 inline-flex rounded-md border bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                        <div className="lg:divide-vermilion-1/30 hidden w-full lg:grid lg:grid-cols-[auto_1fr] lg:gap-4 lg:divide-x lg:p-2">
                          <div className="flex flex-col space-y-3 pr-4 md:space-y-4">
                            <small className="text-sm md:text-base">
                              วิศวกร
                            </small>
                            <small className="text-sm md:text-base">
                              แพทย์
                            </small>
                            <small className="text-sm md:text-base">
                              นักวิทยาศาสตร์
                            </small>
                            <small className="text-sm md:text-base">
                              นักบิน
                            </small>
                            <small className="text-sm md:text-base">
                              ตัวคุณ
                            </small>
                          </div>
                          <div className="flex flex-col space-y-3 pl-4 md:space-y-4">
                            <small className="text-sm md:text-base">
                              ผู้เชี่ยวชาญในการซ่อมระบบต่าง ๆ
                              แต่เกิดความวิตกกังวลจนขาดสมาธิและสติ
                            </small>
                            <small className="text-sm md:text-base">
                              มีความสามารถในการรักษาสุขภาพกายและใจ
                              แต่กำลังเริ่มสูญเสียความมั่นใจ
                            </small>
                            <small className="text-sm md:text-base">
                              ชำนาญในการคิดวิเคราะห์และการพัฒนาทรัพยากรใหม่
                              แต่มีปัญหาในการทำงานร่วมกับคนอื่น
                            </small>
                            <small className="text-sm md:text-base">
                              เชี่ยวชาญการควบคุมยาน
                              แต่เริ่มแสดงพฤติกรรมต่อต้านเนื่องจากสงสัยในความสามารถของทีม
                            </small>
                            <small className="text-sm md:text-base">
                              ผู้นำทีมที่ต้องจัดการความขัดแย้ง ควบคุมสถานการณ์
                              และตัดสินใจที่ส่งผลต่อความอยู่รอด
                            </small>
                          </div>
                        </div>

                        <div className="divide-vermilion-1/30 flex w-full flex-col divide-y px-2 lg:hidden">
                          <div className="space-y-2 py-2 md:py-3">
                            <small className="block font-semibold">
                              วิศวกร
                            </small>
                            <small className="block">
                              ผู้เชี่ยวชาญในการซ่อมระบบต่าง ๆ
                              แต่เกิดความวิตกกังวลจนขาดสมาธิและสติ
                            </small>
                          </div>
                          <div className="space-y-2 py-2 md:py-3">
                            <small className="block font-semibold">แพทย์</small>
                            <small className="block">
                              มีความสามารถในการรักษาสุขภาพกายและใจ
                              แต่กำลังเริ่มสูญเสียความมั่นใจ
                            </small>
                          </div>
                          <div className="space-y-2 py-2 md:py-3">
                            <small className="block font-semibold">
                              นักวิทยาศาสตร์
                            </small>
                            <small className="block">
                              ชำนาญในการคิดวิเคราะห์และการพัฒนาทรัพยากรใหม่
                              แต่มีปัญหาในการทำงานร่วมกับคนอื่น
                            </small>
                          </div>
                          <div className="space-y-2 py-2 md:py-3">
                            <small className="block font-semibold">
                              นักบิน
                            </small>
                            <small className="block">
                              เชี่ยวชาญการควบคุมยาน
                              แต่เริ่มแสดงพฤติกรรมต่อต้านเนื่องจากสงสัยในความสามารถของทีม
                            </small>
                          </div>
                          <div className="space-y-2 py-2 md:py-3">
                            <small className="block font-semibold">
                              ตัวคุณ
                            </small>
                            <small className="block">
                              ผู้นำทีมที่ต้องจัดการความขัดแย้ง ควบคุมสถานการณ์
                              และตัดสินใจที่ส่งผลต่อความอยู่รอด
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Label>
                      จงระบุปัญหาทั้งหมดที่เกิดขึ้น
                      พร้อมเสนอแนวทางการแก้ปัญหาและอธิบายหลักการมาพอสังเขป
                    </Label>
                  </div>
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="answer4"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  4. หากในค่ายมี Group Project
                  แล้วน้องได้อยู่ในกลุ่มที่มีคนไม่ค่อยทำงาน นิ่งเฉย หรือทิ้งงาน
                  น้องจะจัดการกับปัญหานี้อย่างไร?
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="answer5"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  5. ถ้าต้องสอนเด็ก 7 ขวบให้เข้าใจว่า &quot;Algorithm&quot;
                  คืออะไร โดยห้ามใช้คำศัพท์เทคนิค จะอธิบายอย่างไร?
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-3 md:gap-4">
            <small>
              6. สถานการณ์ :
              ในฐานะนักวิศวกรคอมพิวเตอร์ที่มีความเชี่ยวชาญในด้านเทคโนโลยีสารสนเทศ
              น้องได้รับมอบหมายจากองค์กรที่ทำงานร่วมกับภาครัฐในการพัฒนานวัตกรรมใหม่
              เพื่อช่วยแก้ไขปัญหาการติดตามสุขภาพผู้สูงอายุในชุมชนที่ไม่ทั่วถึง
              ซึ่งทำให้หลายคนไม่ได้รับการดูแลที่เหมาะสม
              ส่งผลให้เกิดความเสี่ยงต่อสุขภาพและชีวิต
            </small>
            <small className="pl-2 md:pl-4">
              -
              น้องได้รับมอบหมายให้พัฒนานวัตกรรมที่ช่วยให้การดูแลผู้สูงอายุในชุมชนมีประสิทธิภาพและทั่วถึงมากขึ้น
              ภายในระยะเวลา 2 ปี
            </small>
          </div>

          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="answer6_1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  6.1
                  หากน้องสามารถพัฒนานวัตกรรมเพื่อช่วยแก้ปัญหาสังคมนี้ได้หนึ่งอย่าง
                  น้องจะเลือกพัฒนาอะไร?
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={props.hasSubmit}
            control={form.control}
            name="answer6_2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>6.2 จงอธิบายการทำงานของนวัตกรรมนี้</FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full justify-center pt-8 md:pt-16">
          <Button
            type="submit"
            disabled={
              props.isPending || !form.formState.isDirty || props.hasSubmit
            }
          >
            {props.isPending ? <Spinner /> : "บันทึกคำตอบปริศนาปัญญาชน"}
          </Button>
        </div>
        <FormStepper />
      </form>
    </Form>
  );
}
export default AnswerRegis;
