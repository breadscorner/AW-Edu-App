import GreenLabelTile from "@/components/GreenLabelTile";
import greenLabels from "../green-labels.json";
import ViewMapButton from "@/components/ViewMapButton";

export default function GreenLabels() {
  return (
    <main className="w-full h-full py-20 max-w-md relative">
      <ViewMapButton />
      <h1 className="w-2/3 m-auto font-bold text-lg text-center mt-2">
        Sustainable Clothing Labels Based in Canada
      </h1>
      <div className="w-full px-6 sm:px-12 m-auto pb-20 my-6">
        {greenLabels.map((label) => (
          <GreenLabelTile key={label.storeName} label={label} />
        ))}
      </div>
    </main>
  );
}
