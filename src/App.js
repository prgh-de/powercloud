import Features from "./Components/Features/Features"
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
          <Features header = "Darum lieben IT-Architekten powercloud:"
                    content ="Modular, „cloud-native“ und bewiesene Skalierbarkeit, dazu REST-Services, Events und Automatisierung mit Machine Learning."
                    const list = {["Moderne Softwarearchitektur", "Etablierte Standards", "Konsequenter cloud-basierter Ansatz", "Stetige Bereitstellung & Weiterentwicklung der Software"]}
                    linkText = "Erfahre mehr über die Plattform  >"  />
          <Testimonials />
    </div>
  );
}

export default App;
