import Stats from "./components/Stats/Stats";
import Contact from "./components/Contact/Contact";
import CardContainer from './components/CardContainer/CardContainer';
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
      <Stats />
      <h1>Hello World!</h1>
        <Contact
            heading={"Jetzt Kontakt aufnehmen!"}
            text={"Du willst dein Energieunternehmen intelligent digitalisieren oder willst unser Partner werden oder hast einfach nur eine Frage oder ein Anliegen? Nimm Kontakt mit uns auf, wir melden uns umgehend bei dir."}
            buttonLink={"#contactform"}
            buttonText={"Zum Kontaktformular"}
            bgImgUrl={"https://power.cloud/wp-content/uploads/2020/08/pc-home-kontakt.jpg"}/>
        <CardContainer/>
        <div className="Title">
          <Title text = "Die führende SaaS Plattform der Energiewirtschaft für Mid- und Backoffice-Prozesse." />
        </div>
    </div>
  );
}

export default App;
