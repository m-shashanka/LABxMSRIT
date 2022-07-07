import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import LeftBar from "../components/LeftBar/LeftBar";
import TopBar from "../components/TopBar/TopBar";

function DSLab() {

  const [width,setWidth] = useState(window.innerWidth);

  const handler = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize",handler);
    return () => window.removeEventListener("resize",handler);
  });

  var name = width > 1200 ? "Data Structures Lab" : "DS LAB";

  return (
    <>
      <Header name={name} />
      {width > 1200 ? 
        <LeftBar name="Data Structures" arr={["Array", "Linked List","Sparse Matrix", "Stack", "Queue", "Graph", "Tree", "Heap"]} />
        :
        <TopBar name="Data Structures" arr={["Array", "Linked List","Sparse Matrix", "Stack", "Queue", "Graph", "Tree", "Heap"]} />
      }
    </>
  );
}

export default DSLab;