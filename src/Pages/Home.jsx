import Hero from "../components/Hero/Hero";
import Features from "../Components/Features/Features";
import Customers from "../components/Customers/Customers";
import News from "../components/News/News";
import Testimonials from "../Components/Testimonials/Testimonials";
import Stats from "../components/Stats/Stats";

export default function Home() {
    return (
        <div>
            <Hero/>
            <Customers />
            <News />
            <Stats />
            <Features header = "Darum lieben IT-Architekten powercloud:"
                      content ="Modular, „cloud-native“ und bewiesene Skalierbarkeit, dazu REST-Services, Events und Automatisierung mit Machine Learning."
                      list = {["Moderne Softwarearchitektur", "Etablierte Standards", "Konsequenter cloud-basierter Ansatz", "Stetige Bereitstellung & Weiterentwicklung der Software"]}
                      linkText = "Erfahre mehr über die Plattform  >"  />
            <Testimonials />
        </div>
    );
}