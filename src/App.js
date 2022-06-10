import NavBar from "./Components/NavBar";
import Contact from "./Pages/Demo";
import Home from "./Pages/Home";
import Partner from "./Pages/Partner";
import Eworld from "./Pages/Eworld";
import Lösungen from "./Pages/Lösungen";
import Plattform from "./Pages/Plattform";
import Demo from "./Pages/Demo";
import Locations from "./Pages/Locations";
import ContactForm from "./Components/ContactForm";
import useContacts from "./Components/useContacts";
import DataSent from "./Components/DataSent";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";

function App() {
    const [contacts, addContact] = useContacts();
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/demo" element={<Demo/>}/>
                <Route path="/eworld" element={<Eworld/>}/>
                <Route path="/lösungen" element={<Lösungen/>}/>
                <Route path="/partner" element={<Partner/>}/>
                <Route path="/plattform" element={<Plattform/>}/>
                <Route path="/kontakt" element={<ContactForm sendDataOnSubmit={addContact}/>}/>
                <Route path="/datasent" element={<DataSent/>}/>
                <Route path="/locations" element={<Locations/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
