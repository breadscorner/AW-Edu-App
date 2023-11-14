import Link from "next/link";

const GetStartedButton = () => {
  return (
    <Link
      href="/main"
      className="bg-dark-midnight-blue px-12 py-5 text-white absolute rounded-tl-3xl text-lg bottom-0 right-0 z-50"
    >
      Get Started
    </Link>
  );
};

export default GetStartedButton;
