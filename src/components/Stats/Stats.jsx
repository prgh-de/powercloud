import styles from './Stats.module.css';
import StatsNav from "./StatsNav";

export default function Stats() {
    const stats = {
        "Company": [
            {
                "title":"212",
                "text":"Kunden: Lieferanten, Stadtwerke, Energie-Startups, Discounter und grüne Angebote nutzen bereits powercloud und powerApps. (Stand Sept. 2020)"
            },
            {
                "title":"56.000",
                "text":"Stunden fließen monatlich in die Weiterentwicklung der Plattform und in neue powerApps. Das sind über 350 Vollzeitäquivalente."
            },
            {
                "title":"9",
                "text":"Standorte: Offenburg, Leipzig, Berlin, Mailand, Madrid, Paris, San Francisco, Alpharetta, Melbourne"
            }
        ],
        "Plattform": [
            {
                "title":"5.173.200",
                "text": "Anzahl an Webservice-Aufrufen innerhalb einer Stunde (Spitzenwert)."
            },
            {
                "title":"637.634",
                "text":"Bisherige maximale Anzahl Abrechnungen an einem Tag (mehr sind möglich)."
            },
            {
                "title":"26.317",
                "text": "Prozessierte Neukunden eines Versorgers innerhalb von 48 Stunden."
            }
        ],
        "Migration": [
            {
                "title": "3.000.000",
                "text": "Verträge die innerhalb einer Stunde beladen werden können (exkl. Daten-Anreicherungen)."
            },
            {
                "title": "10.000.000",
                "text": "und mehr Verträge werden aktuell von powercloud abgewickelt."
            },
            {
                "title": "20.000.000",
                "text": "Verträge die sich von Legacy Systemen in der Migration zu powercloud befinden."
            }
        ]
    };

    return (
        <div className={styles.statsContainer}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <StatsNav navElements={stats}/>
                </div>
            </div>
        </div>
    )
}