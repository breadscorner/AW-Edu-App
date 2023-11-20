import QuizStartButton from "@/components/QuizStartButton";

export default function Quiz() {
  return (
    <main className="w-full h-screen bg-center bg-[url('/quiz-bg.png')] bg-no-repeat bg-opacity-40 bg-cover z-30">
      <div className="absolute w-full h-full bg-white bg-opacity-40 z-0"></div>
      <div className=" w-full h-full flex justify-center items-center align-middle">
        <QuizStartButton />
      </div>
    </main>
  );
}
