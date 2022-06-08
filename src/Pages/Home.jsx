import Hero from "../components/Hero/Hero";
import Features from "../Components/Features/Features";

export default function Home() {
    return (
        <div>
            <Hero/>
            <Features header = "Darum lieben IT-Architekten powercloud:"
                      content ="Modular, „cloud-native“ und bewiesene Skalierbarkeit, dazu REST-Services, Events und Automatisierung mit Machine Learning."
                      list = {["Moderne Softwarearchitektur", "Etablierte Standards", "Konsequenter cloud-basierter Ansatz", "Stetige Bereitstellung & Weiterentwicklung der Software"]}
                      linkText = "Erfahre mehr über die Plattform  >"  />
        </div>
    );
}