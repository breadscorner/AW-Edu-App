import MainButton from "@/components/MainButton";

export default function Main() {
  return (
    <main className="w-full h-full p-6">
      <div className="pb-20 py-6 flex flex-col items-center justify-center w-full mt-10">
        <MainButton
          backgroundColor="bg-light-coral"
          text="Learn About Fast Fashion"
          imageSource="/learn-thumbnail.png"
          link="/learn"
          imagePosition="right"
        />
        <MainButton
          backgroundColor="bg-goldenrod-color"
          text="Quiz Yourself"
          imageSource="/quiz-thumbnail.png"
          link="/quiz"
          imagePosition="left"
        />
        <MainButton
          backgroundColor="bg-kadet-blue"
          text="Going Green Stores"
          imageSource="/green-stores-thumbnail.png"
          link="/stores"
          imagePosition="right"
        />
      </div>
    </main>
  );
}
