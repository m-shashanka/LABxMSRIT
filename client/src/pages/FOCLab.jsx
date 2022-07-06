import Header from "../components/Header/Header";
import LeftBar from "../components/LeftBar/LeftBar";

function FOCLab() {
  return (
    <>
      <Header name="Fundamentals of computing" />
      <LeftBar name="Fundamentals of computing" arr={["Input-Output" ,"DataTypes", "String" ,"Flow Control", "Array", "Function"]}/>
    </>
  );
}

export default FOCLab;