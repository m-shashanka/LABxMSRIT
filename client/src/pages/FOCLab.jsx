import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import LeftBar from "../components/LeftBar/LeftBar";
import TopBar from "../components/TopBar/TopBar";

function FOCLab() {

  const [width,setWidth] = useState(window.innerWidth);

  const handler = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize",handler);
    return () => window.removeEventListener("resize",handler);
  });

  var name = width > 1200 ? "Fundamentals Of Computing" : "FOC LAB";

  return (
    <>
      <Header name={name} />
      {width > 1200 ? 
        <LeftBar name="Fundamentals of computing" arr={["Input-Output" ,"DataTypes", "String" ,"Flow Control", "Array", "Function"]}/>
        :
        <TopBar name="Fundamentals of computing" arr={["Input-Output" ,"DataTypes", "String" ,"Flow Control", "Array", "Function"]} />
      }
    </>
  );
}

export default FOCLab;