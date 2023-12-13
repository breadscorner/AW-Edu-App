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
      <Link href={link} className="w-full h-3/4">
        <Image
          src={imageSource}
          width={
            imagePosition === "left" ? commonHeight * (4 / 3) : commonHeight
          }
          height={commonHeight}
          alt="icon"
          className={twMerge(
            `absolute z-40 bottom-0`,
            imagePosition === "left"
              ? "left-0 rounded-bl-3xl"
              : "right-0 rounded-br-3xl"
          )}
        />

        <div
          className={twMerge(
            " flex w-full h-full rounded-3xl items-center text-white",
            backgroundColor,
            imagePosition === "left" ? "justify-end" : "justify-start"
          )}
        >
          <div
            className={twMerge(
              "flex justify-center  w-1/2 p-5 items-center font-bold",
              imagePosition === "left" ? "h-fit" : "h-full"
            )}
          >
            <Image
              className="w-8 h-8 mr-2"
              src={link + ".svg"}
              alt="icon"
              width={35}
              height={35}
            />
            <h1 className="text-center w-full">{text}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
