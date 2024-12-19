"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    console.log(path);
    router.push(path);
  };

  return (
    <div className="font-sans">
      {/*Hello Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/web.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold drop-shadow-lg">
            The road to becoming a web engineer
          </h1>
        </div>
        <a
          href="#list-section"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-lg hover:underline"
        >
          Scroll Down
        </a>
      </section>

      {/* List Section */}
      <section
        id="list-section"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      >
        {/* <Header /> */}
        <h2 className="text-3xl font-bold mb-8">Select an Option</h2>
        <ul className="flex items-center space-x-4">
          <li
            onClick={() => handleNavigation("/InformationTechnology")}
            className="p-4 bg-white rounded shadow hover:bg-gray-50 cursor-pointer transition"
          >
            IT
          </li>
          <li
            onClick={() => handleNavigation("/Business")}
            className="p-4 bg-white rounded shadow hover:bg-gray-50 cursor-pointer transition"
          >
            Business
          </li>
          <li
            onClick={() => handleNavigation("/Culture")}
            className="p-4 bg-white rounded shadow hover:bg-gray-50 cursor-pointer transition"
          >
            Culture
          </li>
        </ul>
      </section>
    </div>
  );
}
