import { Routes, Route} from "react-router-dom";
import DSLab from "./pages/DSLab";
import DSQuestion from "./pages/DSQuestion";
import Stack from "./pages/DataStructures/Stack/Stack";
import SparseMatrix from "./pages/DataStructures/SparseMatrix/SparseMatrix";
import Queue from "./pages/DataStructures/Queue/Queue";
import Array from "./pages/DataStructures/Array/Array";
import LinkedList from "./pages/DataStructures/LinkedList/LinkedList";
import Graph from "./pages/DataStructures/Graph/Graph";
import Tree from "./pages/DataStructures/Tree/Tree";
import Menu from "./pages/Menu/Menu";
import Heap from "./pages/DataStructures/Heap/Heap";
import FOCLab from "./pages/FOCLab";
import FOCQuestion from "./pages/FOCQuestion";
import FlowControl from "./pages/FOC/FLowControl/FlowControl";
import Function from "./pages/FOC/Function/Function";
import String from "./pages/FOC/String/String";

function App() {

  return (
   <>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/dslab' element={<DSLab />} />
        <Route path='/foclab' element={<FOCLab />} />
        <Route exact path='/dslab/question/:id' element={<DSQuestion />} />
        <Route exact path='/foclab/question/:id' element={<FOCQuestion />} />
        <Route path="/datastructure/Stack" element={<Stack />} />
        <Route path="/datastructure/Queue" element={<Queue />} />
        <Route path="/datastructure/SparseMatrix" element={<SparseMatrix />} />
        <Route path="/datastructure/Array" element={<Array />} />
        <Route path="/datastructure/LinkedList" element={<LinkedList />} />
        <Route path="/datastructure/Graph" element={<Graph />} />
        <Route path="/datastructure/Tree" element={<Tree />} />
        <Route path="/datastructure/Heap" element={<Heap />} />
        <Route path="/foclab/FlowControl" element={<FlowControl />} />
        <Route path="/foclab/Function" element={<Function />} />
        <Route path="/foclab/String" element={<String />} />
      </Routes>
   </>
  );
}

export default App;