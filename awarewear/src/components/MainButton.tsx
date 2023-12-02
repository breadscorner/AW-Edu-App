import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";

export default function MainButton({
  backgroundColor,
  text,
  imageSource,
  link,
  imagePosition,
}: {
  backgroundColor: string;
  text: string;
  imageSource: string;
  link: string;
  imagePosition: string;
}) {

  const commonHeight = 150; 

  return (
    <div className="flex flex-col w-full h-44 items-center justify-end relative ">
      <Image
        src={imageSource}
        width={imagePosition === "left" ? commonHeight * (4 / 3) : commonHeight}
        height={commonHeight} 
        alt="icon"
        className={twMerge(
          `absolute z-40 bottom-0`,
          imagePosition === "left" ? "left-0 rounded-bl-3xl" : "right-0 rounded-br-3xl"
        )}
      />
      <Link
        href={link}
        className={twMerge(
          "px-10 py-5 flex w-full h-3/4 rounded-3xl text-white",
          backgroundColor,
          imagePosition === "left" ? "justify-end" : "justify-start"
        )}
      >
        <div className="flex items-center w-1/2 font-bold">
          <h1 className="text-xl w-full">{text}</h1>
        </div>
      </Link>
    </div>
  );
}
