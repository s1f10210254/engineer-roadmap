import Header from "@/components/base/header/header";
import Image from "next/image";

export default function InformationTechnology() {
  const object: Object[] = [];

  interface Object {
    title: string;
    description: string;
    image: string;
  }
  const objectSample = {
    title: "IT Company Roadmap",
    description: "A roadmap for IT companies",
    image: "/web.jpg",
  };

  for (let i = 0; i < 5; i++) {
    object.push(objectSample);
  }

  return (
    <div>
      <Header />
      <div className="flex bg-gray-100 overflow-x-auto p-8  ">
        {object.map((item, index) => (
          <div className="flex-none " key={index}>
            <div className="p-4 bg-white hover:bg-gray-50 cursor-pointer  mr-4 ml-4 ">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Image src={item.image} alt="image" width={200} height={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
