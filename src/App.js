import logo from "./logo.svg";

import { Routes, Route, Link } from "react-router-dom";
import Impressum from "./routes/Impressum";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Footer />

      <Routes>{/*<Route path="/impressum" element={<Impressum />} />*/}</Routes>
    </div>
  );
}

export default App;
