import { Routes, Route} from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import DataStructure from "./pages/DataStructure";

function App() {

  return (
   <>
       <Routes>
         <Route path='/' element={<FirstPage />} />
         <Route path="/main" element={<SecondPage />} />
         <Route path="/datastructure" element={<DataStructure />} />
       </Routes>
    
   </>
  );
}

export default App;