"use client";

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
    <div className="flex h-full justify-center px-10 pt-32">
      <Card className="h-fit w-full max-w-[110rem]">
        <CardHeader className="p-10">
          <CardTitle>
            <h4 className="font-bold">d</h4>
          </CardTitle>
          <CardDescription hidden>
            <small>Card Description</small>
          </CardDescription>
        </CardHeader>
        <CardContent className="h-fit p-10">
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
    </div>
  );
}
export default RegisterInfoPage;
