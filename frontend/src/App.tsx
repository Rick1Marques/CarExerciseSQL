import {Route, Routes} from "react-router-dom";
import CarsPage from "./components/pages/CarsPage.tsx";

function App() {

  return (
        <Routes>
            <Route path="/cars" element={<CarsPage/>}/>
        </Routes>
  )
}

export default App
