import Link from "next/link";

const QuizStartButton = () => {
  return (
    <Link
      href="/quizStart"
      className="bg-dark-midnight-blue px-24 py-6 text-white font-bold rounded-full z-20 text-4xl"
    >
      Start
    </Link>
  );
};

export default QuizStartButton;
