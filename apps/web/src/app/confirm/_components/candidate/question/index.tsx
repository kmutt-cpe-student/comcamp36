import { QuestionWrapper } from "@/app/confirm/_components/candidate/question/question-wrapper";
import Spinner from "@/components/spinner";
import Questions from "./question.json";

interface QuestionProps {
  onSubmitCallback: (answers: number[]) => void;
  isLoading: boolean;
}

function Question({ onSubmitCallback, isLoading }: QuestionProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <QuestionWrapper
      questions={Questions.map((question) => ({
        question: question.question,
        choices: Object.values(question.choice),
      }))}
      onSubmit={(answers) => onSubmitCallback(answers)}
    />
  );
}
export default Question;
