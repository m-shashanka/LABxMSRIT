import Header from "../components/Header/Header";
import LeftBar from "../components/LeftBar/LeftBar";
import TopBar from "../components/TopBar/TopBar";

function FOCLab() {
  return (
    <>
      <Header name="Fundamentals of computing" />
      {/* <LeftBar name="Fundamentals of computing" arr={["Input-Output" ,"DataTypes", "String" ,"Flow Control", "Array", "Function"]}/> */}
      <TopBar name="Data Structures" arr={["Array", "Linked List","Sparse Matrix", "Stack", "Queue", "Graph", "Tree", "Heap"]} />
    </>
  );
}

export default FOCLab;