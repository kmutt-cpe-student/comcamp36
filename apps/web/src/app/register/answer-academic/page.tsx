"use client";

import { TextShimmer } from "@/components/text/text-shimmer";
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
          <TextShimmer
            duration={2}
            className="text-4xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
          >
            คำถามคัดเลือก 2
          </TextShimmer>
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
