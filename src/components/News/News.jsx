import styles from './News.module.css';
import NewsBox from "./NewsBox";

export default function News({title,reference,referenceLink,news}) {
    title = 'News und Themen';
    reference = 'Mehr Neuigkeiten';
    referenceLink = 'https://power.cloud/news/';
    news = [
        {
            "id" : 1,
            "title": "Presse",
            "subtitle":"TeachMePro wird neuer powerApp-Partner",
            "subtitlelink":"https://power.cloud/presse/teachmepro-wird-neuer-powerapp-partner/",
            "text":"On-demand Lernplattform für powercloud Nutzer Web Based Trainings für alle Module der powercloud Integration in den powerApp Store (powercloud,...",
            "buttonstyle":"black",
            "boxstyle":"small",
            "backgroundImage":"none",
            "textAsOverlay":false,
            "showOverlayAsDefault":false,
            "backgroundColor":"#f2f2f2"
        },
        {
            "id" : 2,
            "title": "Presse",
            "subtitle":"Energie-Genossenschaft Prokon setzt auf powercloud",
            "subtitlelink":"https://power.cloud/presse/energie-genossenschaft-prokon-setzt-auf-powercloud/",
            "text":"Big-Bang-Migration sorgt für Tempo bei der Umstellung Agile Prozesse im Backend garantieren mehr Flexibilität (powercloud, Offenburg, 03/05/2022) Mit fast...",
            "buttonstyle":"orange",
            "boxstyle":"big",
            "backgroundImage":"https://power.cloud/wp-content/uploads/2022/05/PM-Procon-1920x1080-2-427x698.png",
            "textAsOverlay":true,
            "showOverlayAsDefault":false,
            "backgroundColor":"#f2f2f2"
        },
        {
            "id" : 3,
            "title": "Beitrag",
            "subtitle":"powercloud setzt auf transparente Prozesse und Nähe zum Kunden",
            "subtitlelink":"https://power.cloud/news/powercloud-setzt-auf-transparente-prozesse-und-naehe-zum-kunden/",
            "text":"Wie kein zweiter Anbieter für Billing-Lösungen konnte powercloud in den vergangenen Jahren Kunden gewinnen und Wachstum generieren. Auch nach...",
            "buttonstyle":"black",
            "boxstyle":"small",
            "backgroundImage":"none",
            "textAsOverlay":false,
            "showOverlayAsDefault":false,
            "backgroundColor":"#f2f2f2"
        },
        {
            "id" : 4,
            "title": "Presse",
            "subtitle":"hsag als Reseller von powercloud: Umfassender Service für die Digitalisierung der EVU",
            "subtitlelink":"https://power.cloud/presse/hsag-digitalisierung-evu/",
            "text":"Implementierung der powercloud im Fokus Organisation aller Prozesse und Anbindung weiterer Lösungen Weltweit führenden Mineralölkonzern als großen Kunden gewonnen...",
            "buttonstyle":"orange",
            "boxstyle":"big",
            "backgroundImage":"https://power.cloud/wp-content/uploads/2022/04/PM-hsag-Artikel-1600x900-–-rz-427x698.png",
            "textAsOverlay":true,
            "showOverlayAsDefault":true,
            "backgrounColor":"#f2f2f2"
        },
        {
            "id" : 5,
            "title": "Beitrag",
            "subtitle":"10 Jahre powercloud: Vom Start-up zu dem am schnellsten wachsenden Abrechnungssystem der Energiebranche",
            "subtitlelink":"https://power.cloud/news/10-jahre-powercloud/",
            "text":"Wie kommt man auf die Idee, eine cloudbasierte Billing-Plattform für den streng regulierten Energiemarkt zu entwickeln? Überraschenderweise steht die...",
            "buttonstyle":"black",
            "boxstyle":"big",
            "backgroundImage":"none",
            "textAsOverlay":false,
            "showOverlayAsDefault":false,
            "backgroundColor":"#fdca10"
        },
        {
            "id" : 6,
            "title": "Beitrag",
            "subtitle":"Alles ist auf den Kooperationsgedanken ausgerichtet",
            "subtitlelink":"https://power.cloud/news/interview-thuega-abrechnungsplattform-tap/",
            "text":"38 EVUs mit unterschiedlichen Anforderungen auf einer Plattform – das soll die Thüga Abrechnungsplattform (TAP) meistern. Welche Rolle dabei...",
            "buttonstyle":"black",
            "boxstyle":"small",
            "backgroundImage":"none",
            "textAsOverlay":false,
            "backgroundColor":"#f2f2f2"
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.headLine}>
                <div className={styles.title}>{title}</div>
                <div className={styles.references}><a href={referenceLink}>{reference} > </a></div>
                <div className={styles.yellowBar}></div>
            </div>
            <div className={styles.newsContainer}>
                {news.map((article,i)=>(
                    <NewsBox key={i} article={article} />
                ))}
            </div>
        </div>
    )
}