import { Routes, Route} from "react-router-dom";
import DSLab from "./pages/DSLab";
import DSQuestion from "./pages/DSQuestion";
import DataStructure from "./pages/DataStructure";

function App() {

  return (
   <>
      <Routes>
        <Route path='/' element={<DSLab />} />
        <Route exact path='/dslab/question/:id' element={<DSQuestion />} />
        <Route path="/datastructure" element={<DataStructure />} />
      </Routes>
   </>
  );
}

export default App;