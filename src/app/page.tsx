"use client";

import Header from "@/components/base/header/header";

export default function Home() {
  const list = ["a", "b", "c"];
  const listClick = (item: string) => {
    if (item === "a") {
    } else if (item === "b") {
      console.log("b");
    } else {
      console.log("c");
    }
  };

  return (
    <div>
      <Header />
      <ul style={{ display: "flex", alignItems: "center" }}>
        {list.map((item) => (
          <li
            key={item}
            style={{
              border: "1px solid black",
              margin: "3vw",
              width: "20vw",
              height: "50vh",
            }}
          >
            <div onClick={() => listClick(item)}>{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
