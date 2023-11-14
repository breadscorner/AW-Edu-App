import GetStartedButton from "@/components/GetStartedButton";
import { redirect } from "next/navigation";

export default function Home() {
  const handleClick = async () => {
    redirect("/main");
  };

  return (
    <main className="w-full h-full relative bg-[url('/landing-page-bg.png')] bg-no-repeat m-auto bg-cover sm:w-[380px]">
      <GetStartedButton />
    </main>
  );
}
