import {Route, Routes} from "react-router-dom";
import CarsPage from "./components/pages/CarsPage.tsx";
import CarDetailPage from "./components/pages/CarDetailPage.tsx";
import UsersPage from "./components/pages/UsersPage.tsx";

function App() {

  return (
        <Routes>
            <Route path="/cars" element={<CarsPage/>}/>
            <Route path="/cars/:id" element={<CarDetailPage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
        </Routes>
  )
}

export default App
