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
    <div className="font-prompt flex h-full justify-center px-10 pt-32">
      <Card className="h-fit w-full max-w-[110rem]">
        <CardHeader className="p-10">
          <CardTitle>
            <h4 className="font-bold">คำถามคัดเลือก 2</h4>
          </CardTitle>
          <CardDescription hidden>
            <small>Card Description</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="h-fit p-10">
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
    </div>
  );
}
export default RegisterInfoPage;
