import MainButton from "@/components/MainButton";
import Navbar from "@/components/Navbar";

export default function Main() {
  const bg = "url('/learnbg.png')";
  return (
    <main className="w-full h-full p-6">
      <div className="pb-20 py-6 flex flex-col items-center justify-center w-full mt-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: bg,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            // transform: "rotate(-12.49deg)",
            opacity: 0.1,
            zIndex: -1, // To place the pseudo-element behind the content
          }}
        />
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
      <Navbar />
    </main>
  );
}
