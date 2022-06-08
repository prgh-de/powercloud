import ContactForm from "./Components/ContactForm";
import useContacts from "./Components/useContacts";
import DataSent from "./Components/DataSent";

import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    const [contacts, addContact] = useContacts();
    return (
        <Router>
            <div className="App">
                <Footer />
                <Routes>
                    <Route path="/" element={<ContactForm sendDataOnSubmit={addContact}/>} />
                    <Route path="/datasent" element={<DataSent />} />
                    <Routes>{/*<Route path="/impressum" element={<Impressum />} />*/}</Routes>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
