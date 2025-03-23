import { QuestionWrapper } from "@/app/confirm/_components/candidate/question/question-wrapper";

import Questions from "./question.json";

function Question() {
  return (
    <QuestionWrapper
      questions={Questions.map((question) => ({
        question: question.question,
        choices: Object.values(question.choice),
      }))}
      onSubmit={(answers) => {
        console.log(answers);
      }}
    />
  );
}
export default Question;
