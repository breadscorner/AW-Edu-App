"use client";
import React, { useState } from "react";
import QuestionButton from "@/components/QuestionButton";
import quizData from "./fastFashionQuiz.json";

export default function QuizStart() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isWrongAnswer, setIsWrongAnswer] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState(0); // Tracks the number of correct answers
  const [quizComplete, setQuizComplete] = useState(false); // Tracks if the quiz is complete

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    const isCorrect = option === currentQuestion.answer;
    setIsWrongAnswer(!isCorrect);

    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1); // Increment only if the answer is correct
    }

    // Move to the next question after a delay whether the answer is correct or not
    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); // Reset selected answer for next question
        setIsWrongAnswer(false); // Reset wrong answer state
      } else {
        setQuizComplete(true); // End of quiz
      }
    }, 500);
  };

  const handleTryAgain = () => {
    // Reset the quiz
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsWrongAnswer(false);
    setCorrectAnswers(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    // Calculate the score percentage
    const scorePercent = (correctAnswers / quizData.length) * 100;
    return (
      <div
        className="results-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // Use the full height of the viewport
        }}
      >
        <h1>Quiz Results</h1>
        <div
          className="results-text"
          style={{ marginTop: "20px", fontSize: "24px" }}
        >
          {scorePercent >= 80
            ? "Congratulations!"
            : "Failed. Please try again!"}
        </div>
        <div className="score" style={{ marginTop: "20px", fontSize: "20px" }}>
          Your Score: {scorePercent}%
        </div>
        <div
          className="passing-score"
          style={{ marginTop: "20px", fontSize: "20px" }}
        >
          Passing Score: 80%
        </div>
        <button
          onClick={handleTryAgain}
          style={{
            marginTop: "30px",
            padding: "10px 20px",
            fontSize: "20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <main className="relative w-full h-screen bg-no-repeat bg-cover overflow-hidden">
        {/* Background image and content code */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
          <QuestionButton
            questionText={currentQuestion.question}
            href=""
            className="text-2xl font-bold text-center text-blue-800 bg-transparent"
          />

          {Object.entries(currentQuestion.options).map(
            ([key, value], index) => {
              const isSelected = key === selectedAnswer;
              const isCorrectAnswer = key === currentQuestion.answer;
              let buttonStyles = "bg-blue-500"; // Default style

              if (isSelected) {
                buttonStyles = isCorrectAnswer ? "bg-green-500" : "bg-red-500";
              }

              return (
                <div key={index} className="relative">
                  <QuestionButton
                    questionText={value}
                    onClick={() => handleAnswerClick(key)}
                    className={`px-6 py-3 rounded-full text-white font-semibold ${buttonStyles}`}
                    href=""
                  />
                  {isSelected && (
                    <div
                      className={`absolute -right-20 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg ${
                        isWrongAnswer ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {isWrongAnswer ? "Wrong Answer" : "Correct!"}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </main>
    </>
  );
}
