import Link from "next/link";

export default function LearnButton() {
  return (
      <Link href="/learnDoc">
        <div
          className="bg-dark-midnight-blue px-12 py-4 text-white font-bold rounded-3xl z-20 text-lg
               hover:bg-blue-700 focus:outline-none transition-all duration-300 ease-in-out"
        >
          <div className="text-xl">Learn</div>
        </div>
      </Link>
  );
}
