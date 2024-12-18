"use client";

import Header from "@/components/base/header/header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    console.log(path);
    router.push(path);
  };

  return (
    <div>
      <ul className="flex items-center space-x-4">
        <li
          onClick={() => handleNavigation("/InformationTechnology")}
          className="p-4 cursor-pointer bg-gray-200 hover:bg-gray-300"
        >
          IT
        </li>
        <li
          onClick={() => handleNavigation("/Business")}
          className="p-4 cursor-pointer bg-gray-200 hover:bg-gray-300"
        >
          Business
        </li>
        <li
          onClick={() => handleNavigation("/Culture")}
          className="p-4 cursor-pointer bg-gray-200 hover:bg-gray-300"
        >
          Culture
        </li>
      </ul>
    </div>
  );
}
