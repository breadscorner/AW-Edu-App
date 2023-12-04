import GreenLabelTile from "@/components/GreenLabelTile";
import greenLabels from "../green-labels.json";
import ViewMapButton from "@/components/ViewMapButton";
import Navbar from "@/components/Navbar";

export default function GreenLabels() {
  const bg = "url('/learnbg.png')";
  return (
    <main className="w-full h-full py-20 max-w-md relative">
      <div className="pb-20 flex flex-col items-center justify-center w-full">
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
        <h1 className="w-2/3 m-auto font-bold text-lg text-center">
          Sustainable Clothing Labels Based in Canada
        </h1>
        <div className="mt-3">
          <ViewMapButton />
        </div>

        <div className="w-full px-6 sm:px-12 m-auto pb-20 my-6">
          {greenLabels.map((label) => (
            <GreenLabelTile key={label.storeName} label={label} />
          ))}
        </div>
      </div>
      <Navbar />
    </main>
  );
}
