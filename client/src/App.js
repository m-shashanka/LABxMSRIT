import { Routes, Route} from "react-router-dom";
import DSLab from "./pages/DSLab";
import DSQuestion from "./pages/DSQuestion";
import Stack from "./pages/DataStructures/Stack/Stack";
import SparseMatrix from "./pages/DataStructures/SparseMatrix/SparseMatrix";
import Queue from "./pages/DataStructures/Queue/Queue";
import Array from "./pages/DataStructures/Array/Array";

function App() {

  return (
   <>
      <Routes>
        <Route path='/' element={<DSLab />} />
        <Route exact path='/dslab/question/:id' element={<DSQuestion />} />
        <Route path="/datastructure/Stack" element={<Stack />} />
        <Route path="/datastructure/Queue" element={<Queue />} />
        <Route path="/datastructure/SparseMatrix" element={<SparseMatrix />} />
        <Route path="/datastructure/Array" element={<Array />} />
      </Routes>
   </>
  );
}

export default App;