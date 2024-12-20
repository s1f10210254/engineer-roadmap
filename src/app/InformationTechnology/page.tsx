import Header from "@/components/base/header/header";
import Image from "next/image";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function InformationTechnology() {
  const object: Object[] = [];
  const webSkillsTable: WebSkillsTable[] = [];

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

  interface WebSkillsTable {
    skill: string;
    description: string;
    period: string;
  }
  const webSkillsTableSample = {
    skill: "HTML",
    description: "ポートフォリオを作成",
    period: "1 day",
  };

  for (let i = 0; i < 5; i++) {
    object.push(objectSample);
  }

  for (let i = 0; i < 5; i++) {
    webSkillsTable.push(webSkillsTableSample);
  }

  return (
    <div>
      <Header />
      <div className=" bg-orange-300  p-4  ">
        <h2 className="text-3xl font-bold mb-8">Pick UP</h2>
        <div className="flex overflow-x-auto hidden-scrollbar">
          {object.map((item, index) => (
            <div className="flex-none " key={index}>
              <div className="p-4 bg-white hover:bg-gray-50  mr-4 ml-4 ">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Image src={item.image} alt="image" width={200} height={100} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="p-8" /> */}

      <div className=" pt-4 ">
        <h2 className="text-3xl font-bold mb-8 text-center ">
          WEB系企業に行くために
        </h2>
        <div className="bg-gray-100 p-4">
          <div className="flex  overflow-x-auto hidden-scrollbar">
            {webSkillsTable.map((item, index) => (
              <React.Fragment key={index}>
                <div className=" flex-none  bg-gray-50 shadow-md m-4 p-2 cursor-pointer">
                  <div className="text-center font-bold">{item.skill}</div>
                  <div className="h-12"></div>
                  <p>{item.description}</p>
                  <div className="h-12"></div>
                  <div className="text-center text-gray-500">{item.period}</div>
                </div>
                {/* 矢印を表示（最後の要素の後には表示しない） */}
                {index < webSkillsTable.length - 1 && (
                  <div className="flex items-center text-gray-500 ">
                    <FaArrowAltCircleRight />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
