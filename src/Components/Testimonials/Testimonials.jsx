import style from "./Testimonials.module.css";
import Carousel from "./Carousel";

export default function Testimonials() {
    const header = "Kundenstimmen";
    return (
        <div className={style.testimonials}>
            <div className={style.box}>
                <div className={style.container}>
                    <header className={style.header}>{header}</header>
                    <div className={style.body}>
                    <Carousel>
                        <div className={style.customer}>
                            "powercloud hat uns maßgeblich in unserer Transformation zu Kundenorientierung und operationaler Exzellenz unterstützt - insbesondere in Hinblick auf Servicebereitschaft, Servicequalität und Kosten. Durch vereinfachte und schlanke Prozesse können neue Produkte viel schneller und effektiver auf den Markt gebracht werden."
                        <br/><br/><br/>
                            <div className={style.person}>"Karsten Wildberger, COO Commercials E.ON SE"</div></div>
                        <div className={style.customer}>
                            „Unsere Welt wird immer digitaler und mit ihr das Verhalten unserer Kunden. Durch die Umstellung unserer gesamten IT-Architektur werden wir zu einem der führenden digitalen Anbieter im Wettbewerb. Kurze Time-to-Market-Zeiten, individuelle Produktlösungen und eine effiziente Interaktion garantieren ein attraktives Kundenerlebnis. Der datenbasierte Vertrieb ist die Basis für das Erreichen unserer wirtschaftlichen Ziele. Durch die Digitalisierung sind wir nicht nur kosteneffizient – sie ermöglicht auch einen nachhaltigen Wettbewerb.“
                            <br/><br/><br/>
                            <div className={style.person}>Dr. Frank Mastiaux, Vorstandsvorsitzender der EnBW Energie Baden-Württemberg AG</div>
                        </div>
                        <div className={style.customer}>
                            „powercloud ist wichtiger Bestandteil der Digitalisierungsstrategie unserer IT und ermöglicht uns eine moderne und flexible Cloudplattform, um unseren Kunden den bestmöglichen Service bieten zu können. Die erste Migrationswelle hat gezeigt, dass wir uns mit powercloud für die richtige Plattform entschieden haben.“
                            <br/><br/><br/>
                            <div className={style.person}>Jens Kallrath, Head of Business IT Customer Solutions, E.ON Energie Deutschland</div></div>
                        <div className={style.customer}>
                            „Wir benötigen vollständig digitalisierte Prozesse im Hintergrund, wenn wir den Ökostrom ohne Gewinnmarge an unsere Kunden über eine App weitergeben wollen. Die powercloud Plattform bietet uns dafür mit ihrer offenen Technologie und dem digitalen Mindset die technologische Grundvoraussetzung.“
                            <br/><br/><br/>
                            <div className={style.person}>Mario Weißensteiner, Geschäftsführer homee GmbH</div>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>

)
}