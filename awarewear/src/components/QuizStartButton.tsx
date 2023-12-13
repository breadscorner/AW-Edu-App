import Link from "next/link";

const QuizStartButton = () => {
  return (
    <Link
      href="/quizStart"
      className="bg-dark-midnight-blue px-16 py-4 text-white font-bold rounded-full z-20 text-2xl"
    >
      Start
    </Link>
  );
};

export default QuizStartButton;
