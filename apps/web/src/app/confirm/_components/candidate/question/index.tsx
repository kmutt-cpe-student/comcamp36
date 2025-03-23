import { QuestionWrapper } from "@/app/confirm/_components/candidate/question/question-wrapper";

import { fetchQuery } from "@/libs/server/client";
import { toast } from "sonner";
import Questions from "./question.json";

function Question() {
  const { mutate } = fetchQuery.useMutation(
    "post",
    "/confirmation/user-answer-confirmation",
    {
      onSuccess: () => {
        toast.success("ส่งคำตอบเรียบร้อย!");
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
