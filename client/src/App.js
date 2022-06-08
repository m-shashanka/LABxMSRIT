import { Routes, Route} from "react-router-dom";
import DSLab from "./pages/DSLab";
import DSQuestion from "./pages/DSQuestion";
import Stack from "./pages/DataStructures/Stack/Stack";

function App() {

  return (
   <>
      <Routes>
        <Route path='/' element={<DSLab />} />
        <Route exact path='/dslab/question/:id' element={<DSQuestion />} />
        <Route path="/datastructure/Stack" element={<Stack />} />
      </Routes>
   </>
  );
}

export default App;