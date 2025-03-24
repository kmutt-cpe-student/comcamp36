import { QuestionWrapper } from "@/app/confirm/_components/candidate/question/question-wrapper";

import { fetchQuery } from "@/libs/server/client";
import { components } from "@/libs/server/types";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { toast } from "sonner";
import Questions from "./question.json";

interface QuestionProps {
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<
    QueryObserverResult<
      { isPassed: boolean; confirm: components["schemas"]["Confirm"] },
      never
    >
  >;
}

function Question({ refetch }: QuestionProps) {
  const { mutate } = fetchQuery.useMutation(
    "post",
    "/confirmation/user-answer-confirmation",
    {
      onSuccess: () => {
        toast.success("ส่งคำตอบเรียบร้อย!");
        refetch();
      },
      onError: () => toast.error("เกิดข้อผิดพลาดบางอย่างในส่งคำตอบ!"),
    },
  );

  return (
    <QuestionWrapper
      questions={Questions.map((question) => ({
        question: question.question,
        choices: Object.values(question.choice),
      }))}
      onSubmit={(answers) => {
        const formattedAnswers = answers.reduce<{
          [key: string]: number;
        }>((acc, answer, index) => {
          acc[`question${index + 1}`] = Number(answer);
          return acc;
        }, {});

        mutate({ body: formattedAnswers as never });
      }}
    />
  );
}
export default Question;
