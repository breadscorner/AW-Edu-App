import Link from "next/link";

export default function ViewMapButton() {
  return (
    <Link href="/map">
      <div className="flex items-center justify-center px-4 py-2 border w-full mx-auto border-gray-400 rounded-lg shadow-md hover:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <span className=" text-black text-sm font-medium">View On Map</span>
      </div>
      {/* <button className="absolute top-0 right-0 z-50 px-4 py-2 flex items-center justify-center mr-4 m-4 text-black border text-sm font-medium border-gray-400 rounded-lg shadow-md hover:bg-gray-300">
        View On Map
      </button> */}
    </Link>
  );
}
