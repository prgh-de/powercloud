import styles from "./CardContainer.module.css"
import Card from "../Card/Card"

export default function CardContainer() {


    return (
        <section className={styles.cardContainer}>
            <Card
                heading="powercloud für Lieferanten"
                text="5 der 6 größten deutschen Lieferanten, Stadtwerke und Energie-Startups setzen auf powercloud. Strom, Gas, Wasser, Abwasser, Wärme, E-Mobilität und Non-Commodity. Rund 8 Millionen Endkundenverträge werden heute bereits auf powercloud abgewickelt. CRM, Abrechnung, Marktkommunikation und Buchhaltung sind nur einige der über 80 eigenen und powerApps, die digitale Prozesse und Automatisierungen für Lieferanten bereitstellen."
                linkText="Zur Lösung"
                linkUrl="/"
                imgUrl="https://power.cloud/wp-content/uploads/2020/09/pc-home-box-bg-lieferant-verlauf_60percent_v02.min_.svg"/>
            <Card
                heading="powercloud für Lieferanten"
                text="5 der 6 größten deutschen Lieferanten, Stadtwerke und Energie-Startups setzen auf powercloud. "
                linkText="Zur Lösung"
                linkUrl="/"
                imgUrl="https://power.cloud/wp-content/uploads/2020/09/pc-home-box-bg-messstellenbetreiber_60percent_v02.min_.svg"/>
            <Card
                heading="powercloud für Lieferanten"
                text="5 der 6 größten deutschen Lieferanten, Stadtwerke und Energie-Startups setzen auf powercloud. Strom, Gas, Wasser, Abwasser, Wärme, E-Mobilität und Non-Commodity."
                linkText="Zur Lösung"
                linkUrl="/"
                imgUrl="https://power.cloud/wp-content/uploads/2020/09/pc-home-box-bg-netzbetreiber_60percent_v02.min_.svg"/>
        </section>

    )
}