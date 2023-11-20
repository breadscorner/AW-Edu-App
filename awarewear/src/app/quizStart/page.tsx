"use client";
import React, { useState } from "react";
import QuestionButton from "@/components/QuestionButton";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function QuizStart() {
  const quizData: QuizQuestion[] = [
    {
      question: "What is the primary goal of fast fashion?",
      options: [
        "Create durable clothing",
        "Promote sustainable practices",
        "Produce clothing quickly and cheaply",
        "Increase the use of organic materials",
      ],
      correctAnswer: "Produce clothing quickly and cheaply",
    },
    // ... other questions if you have more
  ];

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const currentQuestion = quizData[0];

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    if (option === currentQuestion.correctAnswer) {
      // Logic for correct answer
    }
  };

  return (
    <>
      <main className="relative w-full h-screen bg-no-repeat bg-cover overflow-hidden">
        {/* Background image with reduced opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-[url('/quiz-bg.png')] bg-center opacity-30"></div>

        {/* Content with no opacity */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
          {/* Assuming the question button is not meant to be clicked, it doesn't have onClick */}
          <QuestionButton
            questionText={currentQuestion.question}
            href=""
            className="text-2xl font-bold text-center text-blue-800 bg-transparent"
          />

          {currentQuestion.options.map((option, index) => {
            const isSelected = option === selectedAnswer;
            const isCorrectAnswer = option === currentQuestion.correctAnswer;
            const buttonStyles = isSelected
              ? isCorrectAnswer
                ? "bg-green-500" // Correct selected answer
                : "bg-red-500" // Incorrect selected answer
              : "bg-blue-500"; // Not selected answer

            return (
              <QuestionButton
                key={index}
                questionText={option}
                onClick={() => handleAnswerClick(option)}
                className={`px-6 py-3 rounded-full text-white font-semibold ${buttonStyles}`}
                href=""
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
