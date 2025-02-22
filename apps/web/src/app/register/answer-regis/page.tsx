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
import AnswerRegis, { formSchema } from "./form";

function RegisterInfoPage() {
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Card className="h-fit w-full max-w-[110rem]">
      <CardHeader>
        <CardTitle>
          <TextShimmer
            duration={2}
            className="text-4xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
          >
            คำถามคัดเลือก 1
          </TextShimmer>
        </CardTitle>
        <CardDescription hidden>
          <small>อย่าลืมกด</small>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-fit">
        <AnswerRegis
          data={{
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
            answer6_1: "",
            answer6_2: "",
          }}
          onSubmit={onSubmit}
        />
      </CardContent>
    </Card>
  );
}
export default RegisterInfoPage;
