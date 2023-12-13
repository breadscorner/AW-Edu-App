import GreenLabelTile from "@/components/GreenLabelTile";
import greenLabels from "../green-labels.json";
import ViewMapButton from "@/components/ViewMapButton";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function GreenLabels() {
  return (
    <>
      <div className="fixed max-w-md mx-auto  w-full h-full brightness-75 opacity-30">
        <Image
          src="/learnbg.png"
          alt="Learn Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <main className="w-full h-full py-20 max-w-md relative">
        <div className="flex flex-col items-center justify-center w-full">
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
      </main>
      <Navbar />
    </>
  );
}
