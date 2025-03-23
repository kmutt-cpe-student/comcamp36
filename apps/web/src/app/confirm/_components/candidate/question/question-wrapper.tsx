"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/libs/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Question, type QuestionProps } from "./question";

interface QuestionWrapperProps {
  questions: Pick<QuestionProps, "question" | "choices">[];
  onSubmit: (answers: number[]) => void;
}

export function QuestionWrapper({ questions, onSubmit }: QuestionWrapperProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null),
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const progressPercentage = useMemo(
    () =>
      Math.round(
        (selectedAnswers.filter((answer) => answer !== null).length /
          questions.length) *
          100,
      ),
    [selectedAnswers, questions.length],
  );

  const handleSelect = useCallback(
    (choice: string) => {
      setSelectedAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[currentQuestionIndex] = choice;
        return newAnswers;
      });
    },
    [currentQuestionIndex],
  );

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex, questions.length]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleSubmitAnswers = useCallback(() => {
    setIsSubmitting(true);
    const numericAnswers = selectedAnswers.map((answer, index) => {
      const choiceIndex = questions[index].choices.findIndex(
        (choice) => choice === answer,
      );
      return choiceIndex !== -1 ? choiceIndex + 1 : null;
    });

    onSubmit(numericAnswers as number[]);
    setIsSubmitting(false);
  }, [onSubmit, questions, selectedAnswers]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const allQuestionsAnswered = useMemo(
    () => selectedAnswers.every((answer) => answer !== null),
    [selectedAnswers],
  );

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
      <div className="space-y-2">
        <p className="text-sm text-white/50">
          คำถามที่ {currentQuestionIndex + 1} จาก {questions.length}
        </p>
        <Progress value={progressPercentage} className="w-full" />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Question
            question={currentQuestion.question}
            choices={currentQuestion.choices}
            selected={selectedAnswers[currentQuestionIndex]}
            onSelect={handleSelect}
          />
        </motion.div>
      </AnimatePresence>

      {isDesktop && (
        <div className="flex items-center justify-center gap-2.5">
          {Array.from({ length: questions.length }).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={cn(
                "bg-charcoal-special size-2 rounded-full hover:cursor-pointer",
                selectedAnswers[index] ? "bg-white/30" : "bg-white/10",
                currentQuestionIndex === index && "bg-vermilion",
              )}
            />
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-4">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0 || isSubmitting}
          variant="outline"
          className="flex-1"
        >
          <ArrowLeft /> ก่อนหน้า
        </Button>
        {isLastQuestion ? (
          <Button
            onClick={handleSubmitAnswers}
            disabled={!allQuestionsAnswered || isSubmitting}
            className="flex-1"
          >
            {isSubmitting ? (
              <>
                กำลังส่ง... <Loader2 className="animate-spin" />
              </>
            ) : (
              <>
                ส่งคำตอบ <Check />
              </>
            )}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestionIndex] || isSubmitting}
            variant="outline"
            className="flex-1"
          >
            ถัดไป <ArrowRight />
          </Button>
        )}
      </div>
    </div>
  );
}
