import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
        <Contact
            heading={"Jetzt Kontakt aufnehmen!"}
            text={"Du willst dein Energieunternehmen intelligent digitalisieren oder willst unser Partner werden oder hast einfach nur eine Frage oder ein Anliegen? Nimm Kontakt mit uns auf, wir melden uns umgehend bei dir."}
            buttonLink={"#contactform"}
            buttonText={"Zum Kontaktformular"}
            bgImgUrl={"https://power.cloud/wp-content/uploads/2020/08/pc-home-kontakt.jpg"}/>
    </div>
  );
}

export default App;
