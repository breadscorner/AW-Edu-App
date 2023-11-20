  import LearnButton from "@/components/LearnButton";

  export default function Learn() {
    return (
      <div
      className="w-full h-full py-20 max-w-md text-center bg-[url('/learnbg.png')]"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <h1
          className="text-4xl font-bold font-sen leading-10"
          style={{ color: "#262626", textAlign: "center" }} 
        >
          Fast Fashion
        </h1>
        <LearnButton />
      </div>
    );
  }
