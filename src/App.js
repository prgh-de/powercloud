import CardContainer from './components/CardContainer/CardContainer';
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
        <CardContainer/>
        <div className="Title">
          <Title text = "Die führende SaaS Plattform der Energiewirtschaft für Mid- und Backoffice-Prozesse." />
        </div>
    </div>
  );
}

export default App;
