// QuestionButton component
import React from "react";
import Link from "next/link";

interface QuestionButtonProps {
  questionText: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

const QuestionButton: React.FC<QuestionButtonProps> = ({
  questionText,
  href,
  onClick,
  className,
}) => {
  const buttonClasses = `button-wrapper ${className} px-12 py-5 rounded-full`;

  return (
    <Link href={href}>
      <button className={buttonClasses} onClick={onClick}>
        {questionText}
      </button>
    </Link>
  );
};

export default QuestionButton;
