"use client";

import FormStepper from "@/components/navigate/form-stepper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  answer1: z.string().optional(),
  answer2: z.string().optional(),
  answer3: z.string().optional(),
  answer4: z.string().optional(),
  answer5: z.string().optional(),
  answer6_1: z.string().optional(),
  answer6_2: z.string().optional(),
});

interface AnswerRegisProps {
  data: z.infer<typeof formSchema>;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
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
        <div className="grid gap-20">
          <FormField
            control={form.control}
            name="answer1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p>1. น้องคาดหวังอะไรจากค่าย ComCamp36</p>
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="answer2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p>
                    2. ในยุคที่ AI และหุ่นยนต์สามารถทำงานแทนมนุษย์ได้มากขึ้น
                    น้องคิดว่าวิศวกรคอมพิวเตอร์ยังมีความสำคัญหรือไม่?
                    และเพราะเหตุใด?
                  </p>
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="answer3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex flex-col">
                    <p>
                      3. หากน้องและทีมจำนวน 5 คน
                      กำลังอยู่บนยานอวกาศที่ติดอยู่ในวงโคจรของดาวเคราะห์ดวงหนึ่ง
                      ยานน้องได้รับความเสียหายจากอุกกาบาตที่ชนเข้ามา ระบบอื่น ๆ
                      ของยานได้รับความเสียหายเล็กน้อย
                      แต่ระบบกรองน้ำของยานเสียหายมาก น้ำสะอาดที่เหลือมีเพียง 40
                      ลิตร ทีมของคุณต้องอยู่รอดให้ได้อีก 60
                      วันก่อนที่ทีมกู้ภัยจากโลกจะมาถึง
                    </p>
                    <div className="p-4">
                      <div className="grid w-full grid-cols-[auto_1fr] gap-4 divide-amber-100 border border-white/10 p-2">
                        <small>วิศวกร</small>
                        <small>
                          ผู้เชี่ยวชาญในการซ่อมระบบต่าง ๆ
                          แต่เกิดความวิตกกังวลจนขาดสมาธิและสติ
                        </small>
                        <small>แพทย์</small>
                        <small>
                          มีความสามารถในการรักษาสุขภาพกายและใจ
                          แต่กำลังเริ่มสูญเสียความมั่นใจ
                        </small>
                        <small>นักวิทยาศาสตร์</small>
                        <small>
                          ชำนาญในการคิดวิเคราะห์และการพัฒนาทรัพยากรใหม่
                          แต่มีปัญหาในการทำงานร่วมกับคนอื่น
                        </small>
                        <small>นักบิน</small>
                        <small>
                          เชี่ยวชาญการควบคุมยาน
                          แต่เริ่มแสดงพฤติกรรมต่อต้านเนื่องจากสงสัยในความสามารถของทีม
                        </small>
                        <small>ตัวคุณ</small>
                        <small>
                          ผู้นำทีมที่ต้องจัดการความขัดแย้ง ควบคุมสถานการณ์
                          และตัดสินใจที่ส่งผลต่อความอยู่รอด
                        </small>
                      </div>
                    </div>
                    <p>
                      จงระบุปัญหาทั้งหมดที่เกิดขึ้น
                      พร้อมเสนอแนวทางการแก้ปัญหาและอธิบายหลักการมาพอสังเขป
                    </p>
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
            control={form.control}
            name="answer4"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex flex-col">
                    <p>
                      4. หากในค่ายมี Group Project
                      แล้วน้องได้อยู่ในกลุ่มที่มีคนไม่ค่อยทำงาน นิ่งเฉย
                      หรือทิ้งงาน น้องจะจัดการกับปัญหานี้อย่างไร?
                    </p>
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
            control={form.control}
            name="answer5"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex flex-col">
                    <p>
                      5. ถ้าต้องสอนเด็ก 7 ขวบให้เข้าใจว่า &quot;Algorithm&quot;
                      คืออะไร โดยห้ามใช้คำศัพท์เทคนิค จะอธิบายอย่างไร?
                    </p>
                  </div>
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4">
            <h5>
              6.
              น้องได้รับมอบหมายให้พัฒนานวัตกรรมที่ช่วยให้การดูแลผู้สูงอายุในชุมชนมีประสิทธิภาพและทั่วถึงมากขึ้น
              ภายในระยะเวลา 2 ปี
            </h5>
            <p className="text-white/60">
              <strong>รายละเอียดปัญหา: </strong>
              การติดตามสุขภาพผู้สูงอายุไม่ทั่วถึง
              ทำให้หลายคนไม่ได้รับการดูแลที่เหมาะสม
            </p>
          </div>

          <FormField
            control={form.control}
            name="answer6_1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p>
                    6.1
                    หากน้องสามารถพัฒนานวัตกรรมเพื่อช่วยแก้ปัญหาสังคมเหล่านี้ได้หนึ่งอย่าง
                    น้องจะเลือกพัฒนาอะไร?
                  </p>
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="answer6_2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p>6.2 จงอธิบายการทำงานของนวัตกรรมนี้</p>
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full max-w-[80rem] justify-center gap-10 pt-10">
            <Button>บันทึก</Button>
            <FormStepper />
            <Button>บันทึก</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
export default AnswerRegis;
