import Header from "../components/Header/Header";
import LeftBar from "../components/LeftBar/LeftBar";

function DSLab() {
  return (
    <>
      <Header name="Data Structures Lab" />
      <LeftBar name="Data Structures" arr={["Array", "Linked List","Sparse Matrix", "Stack", "Queue", "Graph", "Tree", "Heap"]} />
    </>
  );
}

export default DSLab;