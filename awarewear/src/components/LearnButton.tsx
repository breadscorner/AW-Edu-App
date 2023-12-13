import Link from "next/link";

export default function LearnButton() {
  return (
    <Link href="/learnDoc">
      <div
        className="bg-dark-midnight-blue px-16 py-4 text-white font-bold rounded-full z-20 text-lg
               hover:bg-blue-700 focus:outline-none transition-all duration-300 ease-in-out"
      >
        <div className="text-2xl">Learn</div>
      </div>
    </Link>
  );
}
