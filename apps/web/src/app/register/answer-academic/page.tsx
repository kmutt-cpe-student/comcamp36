"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import AnswerAcademic, { formSchema } from "./form";

function RegisterInfoPage() {
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Card className="h-fit w-full max-w-[110rem]">
      <CardHeader className="pb-20">
        <CardTitle>
          <h4 className="font-bold">คำถามคัดเลือก 2</h4>
        </CardTitle>
        <CardDescription hidden>
          <small>Card Description</small>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-fit">
        <AnswerAcademic
          data={{
            chess_notation: "",
            chess_score: 0,
            algo_answer: "",
          }}
          onSubmit={onSubmit}
        />
      </CardContent>
    </Card>
  );
}
export default RegisterInfoPage;
