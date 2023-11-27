import LearnButton from "@/components/LearnButton";

export default function Learn() {
  const bg = "url('/learnbg.png')";

  return (
    <div className="w-full h-full py-20 max-w-md text-center  relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: bg,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          transform: "rotate(-12.49deg)",
          opacity: 0.1,
          zIndex: -1, // To place the pseudo-element behind the content
        }}
      />
      <div className="mx-auto my-auto">
      <h1
        className="text-4xl font-bold font-sen leading-10 "
        style={{ color: "#262626", textAlign: "center" }}
      >
        Fast Fashion
      </h1>
      {/* <div className="bg-neutral-100 rounded">here is the documentation</div> */}
      <div className=" w-full h-full flex justify-center items-center align-middle">
      <LearnButton />
      </div>
      </div>
    </div>
  );
}
