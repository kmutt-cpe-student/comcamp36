"use client";

import ChessGame from "@/components/chess/chess-game";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PEOPLES } from "./var";

export const formSchema = z.object({
  algo_answer: z.string().optional(),
  chess_notation: z.string().optional(),
  chess_score: z.number().optional(),
});

interface AnswerAcademicProps {
  data: z.infer<typeof formSchema>;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}

function AnswerAcademic(props: AnswerAcademicProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: props.data,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(props.onSubmit)}>
        <div className="font-noto-sans-thai-looped">
          <FormField
            control={form.control}
            name="algo_answer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex flex-col gap-4 pb-10">
                    <p className="font-bold">1. โจทย์หาคน</p>
                    <small>
                      ในภาควิศวกรรมคอมพิวเตอร์ ของมหาวิทยาลัยแห่งหนึ่ง
                      มีนักศึกษาทั้งสิ้น 36 คน โดยในนักศึกษาทั้ง 36 คน
                      มีกลุ่มเล็ก ๆ 10 คนที่เป็นเพื่อนสนิทกัน แต่ในกลุ่ม 10
                      คนนี้จะไม่รู้จักกับนักศึกษาที่เหลือ รู้จักกันแค่ภายในกลุ่ม
                      และเช่นเดียวกัน นักศึกษาที่เหลือก็จะไม่รู้จักกับนักศึกษา
                      10 คนนี้ แต่จะมี 2 คนที่จะคอยโกหกว่ารู้จัก 10 คนนี้
                    </small>
                    <div className="grid grid-cols-2 gap-2 rounded border border-white/20 p-8 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                      {PEOPLES.map((people, index) => (
                        <div
                          key={people}
                          className="grid grid-cols-[auto_1fr] gap-2"
                        >
                          <small>{index}.</small> <small>{people}</small>
                        </div>
                      ))}
                    </div>
                    <small>
                      อง ๆ เป็นนักศีกษาใหม่
                      ซึ่งน้องต้องการที่จะทำความรู้จักกับรุ่นพี่ทั้ง 10
                      คนในกลุ่มนี้ โดยน้องสามารถถามรุ่นพี่คนใดจาก 36 คนนี้ก็ได้
                      โดยเลือกมาทีละ 2 คนว่าทั้งสองคนรู้จักกันไหม
                      โดยต้องถามให้น้อยที่สุด และสามารถถามซ้ำคนเดิมได้
                      ซึ่งคำตอบที่ได้จะมีเพียง “รู้จัก” และ “ไม่รู้จัก” เท่านั้น
                      พร้อมจงตอบคำถามต่อไปนี้?
                    </small>
                    <div className="flex flex-col gap-2 pl-2">
                      <small>
                        • อธิบายขั้นตอนของ อัลกอริทึม
                        ที่คุณใช้ในการค้นหากลุ่มเพื่อนสนิท 10 คนนี้
                      </small>
                      <small>
                        • วิเคราะห์และคำนวณ
                        จำนวนคำถามสูงสุดที่อัลกอริทึมของคุณต้องใช้
                      </small>
                      <small>
                        • ถ้าสมมติว่ามีนักศึกษา 50 คน และกลุ่มเพื่อนสนิทขยายเป็น
                        15 คน อัลกอริทึมของคุณจะเปลี่ยนแปลงอย่างไร?
                      </small>
                    </div>
                  </div>
                </FormLabel>
                <FormControl>
                  <Textarea className="[resize:none]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2 pt-10">
            <div className="flex flex-col gap-4 pb-10">
              <p className="font-bold">2. หมากรุก</p>
              <ChessGame
                callback={(score, notation) => {
                  form.setValue("chess_score", score);
                  form.setValue("chess_notation", notation);
                }}
              />
            </div>
            <p className="font-bold">ผลการเล่นที่บันทึกแล้ว</p>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="chess_notation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <p>รูปแบบการเดิน</p>
                    </FormLabel>
                    <FormControl>
                      <Input className="[resize:none]" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chess_score"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <p>คะแนนที่ได้</p>
                    </FormLabel>
                    <FormControl>
                      <Input className="[resize:none]" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="grid gap-20"></div>
        <div className="flex w-full justify-center pt-4">
          <Button>บันทึก</Button>
        </div>
      </form>
    </Form>
  );
}
export default AnswerAcademic;
