"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-evenly items-center align-middle z-40 w-full h-16 absolute bottom-0 bg-white">
      <Link
        href="/main"
        className={twMerge(
          "w-full h-full flex justify-center rounded-tr-lg",
          `${pathname === "/main" ? "bg-blue-100" : ""}`
        )}
      >
        <Image src="/home.svg" alt="home icon" width={35} height={35} />
      </Link>
      <Link
        href="/learn"
        className={twMerge(
          "w-full h-full flex justify-center rounded-tl-lg rounded-tr-lg",
          `${pathname === "/learn" ? "bg-blue-100" : ""}`
        )}
      >
        <Image src="/learn.svg" alt="learn icon" width={35} height={35} />
      </Link>
      <Link
        href="/quiz"
        className={twMerge(
          "w-full h-full flex justify-center rounded-tl-lg rounded-tr-lg",
          `${pathname === "/quiz" ? "bg-blue-100" : ""}`
        )}
      >
        <Image src="/quiz.svg" alt="quiz icon" width={35} height={35} />
      </Link>
      <Link
        href="/map"
        className={twMerge(
          "w-full h-full flex justify-center rounded-tl-lg",
          `${pathname === "/map" ? "bg-blue-100" : ""}`
        )}
      >
        <Image src="/map.svg" alt="map icon" width={35} height={35} />
      </Link>
    </div>
  );
}
