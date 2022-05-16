import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Contact from "./Pages/Demo";
import Home from "./Pages/Home";
import Partner from "./Pages/Partner";
import Eworld from "./Pages/Eworld";
import Lösungen from "./Pages/Lösungen";
import Plattform from "./Pages/Plattform";
import Demo from "./Pages/Demo";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/demo" element={<Demo/>}/>
            <Route path="/eworld" element={<Eworld/>}/>
            <Route path="/lösungen" element={<Lösungen/>}/>
            <Route path="/partner" element={<Partner/>}/>
            <Route path="/plattform" element={<Plattform/>}/>
        </Routes>
      </div>
  );
}

export default App;
