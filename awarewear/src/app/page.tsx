import GetStartedButton from "@/components/GetStartedButton";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    redirect("/main");
  };

  return (
    <main className="w-full h-full relative bg-[url('/landing-page-bg.png')] bg-center  bg-no-repeat m-auto bg-cover z-50">
      <GetStartedButton />
    </main>
  );
}
