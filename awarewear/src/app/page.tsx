import GetStartedButton from "@/components/GetStartedButton";
import LearnButton from "@/components/LearnButton";
import RootLayout from "@/app/layout";

export default function Home() {
  const bg = "url('/learnbg.png')";

  return (
    <RootLayout showNavbar={false}>
      <div className="w-full h-full py-20 max-w-md text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: bg,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: "rotate(-12.49deg)",
            opacity: 0.1,
            zIndex: -1,
          }}
        />
        <h1
          className="text-4xl font-bold font-sen leading-10 "
          style={{ color: "#262626" }}
        >
          Learn Fast Fashion
        </h1>
        <div className="flex justify-center items-center h-full">
          <GetStartedButton />
        </div>
      </div>
    </RootLayout>
  );
}
