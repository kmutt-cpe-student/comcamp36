"use client";

import FormStepper from "@/app/register/form-stepper";
import ChessGame from "@/components/chess/chess-game";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PEOPLES } from "./var";

export const formSchema = z.object({
  algo_answer1: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  algo_answer2: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  algo_answer3: z.string().min(1, "จำเป็นต้องตอบคำถามนี้อย่างน้อย 1 ตัวอักษร"),
  chess_notation: z.string().min(1, "จำเป็นต้องบันทึกผลการเล่นที่สมบูรณ์"),
  chess_score: z.number().min(1, "จำเป็นต้องบันทึกผลการเล่นที่สมบูรณ์"),
});

interface AnswerAcademicProps {
  data: z.infer<typeof formSchema>;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isPending?: boolean;
  hasSubmit: boolean;
}

function AnswerAcademic(props: AnswerAcademicProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: props.data,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(props.onSubmit)}>
        <div className="font-noto-sans-thai-looped grid gap-12 md:gap-20">
          <div className="grid gap-6 md:gap-10">
            <div className="flex flex-col gap-3 md:gap-4">
              <p className="font-bold">1. 10 สหายในเงามืด</p>
              <Label>
                ในภาควิศวกรรมคอมพิวเตอร์ ของมหาวิทยาลัยแห่งหนึ่ง
                มีนักศึกษาทั้งสิ้น 36 คน โดยในนักศึกษาทั้ง 36 คน มีกลุ่มเล็ก ๆ
                10 คนที่เป็นเพื่อนสนิทกัน แต่ในกลุ่ม 10
                คนนี้จะไม่รู้จักกับนักศึกษาที่เหลือ รู้จักกันแค่ภายในกลุ่ม
                และเช่นเดียวกัน นักศึกษาที่เหลือก็จะไม่รู้จักกับนักศึกษา 10
                คนนี้ แต่จะมี 2 คนที่จะคอยโกหกว่ารู้จัก 10 คนนี้
              </Label>
              <div className="grid grid-cols-2 gap-2 rounded border border-white/20 p-4 sm:grid-cols-3 md:p-8 lg:grid-cols-4 2xl:grid-cols-5">
                {PEOPLES.map((people, index) => (
                  <Label key={people}>
                    {index}. {people}
                  </Label>
                ))}
              </div>
              <small>
                น้อง ๆ เป็นนักศีกษาใหม่
                ซึ่งน้องต้องการที่จะทำความรู้จักกับรุ่นพี่ทั้ง 10 คนในกลุ่มนี้
                โดยน้องสามารถถามรุ่นพี่คนใดจาก 36 คนนี้ก็ได้ โดยเลือกมาทีละ 2
                คนว่าทั้งสองคนรู้จักกันไหม โดยต้องถามให้น้อยที่สุด
                และสามารถถามซ้ำคนเดิมได้ ซึ่งคำตอบที่ได้จะมีเพียง “รู้จัก” และ
                “ไม่รู้จัก” เท่านั้น พร้อมจงตอบคำถามต่อไปนี้?
              </small>
            </div>
            <FormField
              disabled={props.hasSubmit}
              control={form.control}
              name="algo_answer1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <small>
                      • อธิบายขั้นตอนของ อัลกอริทึม
                      ที่คุณใช้ในการค้นหากลุ่มเพื่อนสนิท 10 คนนี้
                    </small>
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
              name="algo_answer2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <small>
                      • วิเคราะห์และคำนวณ
                      จำนวนคำถามสูงสุดที่อัลกอริทึมของคุณต้องใช้
                    </small>
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
              name="algo_answer3"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <small>
                      • ถ้าสมมติว่ามีนักศึกษา 50 คน และกลุ่มเพื่อนสนิทขยายเป็น
                      15 คน อัลกอริทึมของคุณจะเปลี่ยนแปลงอย่างไร?
                    </small>
                  </FormLabel>
                  <FormControl>
                    <Textarea className="[resize:none]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 pt-6 md:pt-10">
            <div className="flex flex-col gap-4 pb-6 md:pb-10">
              <p className="font-bold">2. อัศวินห่านห้าวหาญนักล่าแต้ม</p>
              <ChessGame
                callback={(score, notation) => {
                  form.setValue("chess_score", score);
                  form.setValue("chess_notation", notation);
                }}
                disabled={props.hasSubmit}
              />
            </div>
            <p className="font-bold">ผลการเล่นที่บันทึกแล้ว</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="chess_notation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>รูปแบบการเดิน</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-auto h-12 [resize:none] md:text-base"
                        {...field}
                        disabled
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={props.hasSubmit}
                control={form.control}
                name="chess_score"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>คะแนนที่ได้</FormLabel>
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
        <div className="flex w-full justify-center pt-8 md:pt-16">
          <Button type="submit" disabled={props.isPending || props.hasSubmit}>
            {props.isPending ? <Spinner /> : "บันทึกคำตอบปริศนาสถาบันวิศวะ"}
          </Button>
        </div>
        <FormStepper />
      </form>
    </Form>
  );
}
export default AnswerAcademic;
