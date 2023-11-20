"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-evenly items-center align-middle z-50 w-full max-w-md h-16 fixed bottom-0 left-0 sm:left-auto bg-white">
      <Link
        href="/main"
        className={twMerge(
          "w-full h-full flex justify-center items-center rounded-tr-lg",
          `${pathname === "/main" ? "bg-blue-100" : ""}`
        )}
      >
        <Image
          src="/home.svg"
          alt="home icon"
          width={35}
          height={35}
          className="w-10 h-10"
        />
      </Link>
      <Link
        href="/learn"
        className={twMerge(
          "w-full h-full flex justify-center items-center rounded-tl-lg rounded-tr-lg",
          `${pathname === "/learn" ? "bg-blue-100" : ""}`
        )}
      >
        <Image
          className="w-10 h-10"
          src="/learn.svg"
          alt="learn icon"
          width={35}
          height={35}
        />
      </Link>
      <Link
        href="/quiz"
        className={twMerge(
          "w-full h-full flex justify-center items-center rounded-tl-lg rounded-tr-lg",
          `${pathname === "/quiz" ? "bg-blue-100" : ""}`
        )}
      >
        <Image
          src="/quiz.svg"
          alt="quiz icon"
          width={35}
          height={35}
          className="w-10 h-10"
        />
      </Link>
      <Link
        href="/stores"
        className={twMerge(
          "w-full h-full flex justify-center items-center rounded-tl-lg",
          `${pathname === "/stores" ? "bg-blue-100" : ""}`
        )}
      >
        <Image
          src="/stores.svg"
          alt="map icon"
          width={35}
          height={35}
          className="w-10 h-10"
        />
      </Link>
    </div>
  );
}
