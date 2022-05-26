import { Routes, Route} from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

function App() {

  return (
   <>
       <Routes>
         <Route path='/' element={<FirstPage />} />
         <Route path="/main" element={<SecondPage />} />
       </Routes>
    
   </>
  );
}

export default App;