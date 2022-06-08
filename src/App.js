import ContactForm from "./Components/ContactForm";
import useContacts from "./Components/useContacts";
import DataSent from "./Components/DataSent";

import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";

function App() {
    const [contacts, addContact] = useContacts();
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ContactForm sendDataOnSubmit={addContact}/>}/>
                <Route path="/datasent" element={<DataSent/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
