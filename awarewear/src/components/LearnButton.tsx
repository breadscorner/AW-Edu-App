import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function LearnButton() {
  return (
    <div className="flex flex-col w-full h-47px items-center justify-end relative">
      <Link href="/learnDoc">
        <div
          className={twMerge(
            "flex items-center px-5 w-207px h-47px rounded-full text-white font-bold",
            "bg-[#036]",
            "hover:bg-blue-700",
            "focus:outline-none",
            "transition-all duration-300 ease-in-out"
          )}
        >
          <div className="text-xl">Learn</div>
        </div>
      </Link>
    </div>
  );
}
