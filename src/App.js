import {Route, Routes} from "react-router-dom";
import RouteLocation from "./pages/RouteLocation";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/location" element={<RouteLocation />} />
     </Routes>
    </div>
  );
}

export default App;
