import styles from './Stats.module.css';
import StatsNav from "./StatsNav";
import StatsContent from "./StatsContent";
import {useState} from "react";

export default function Stats() {
    const stats = [
        {
            "name":"Company",
            "active":true,
            "data":[
                {
                    "title":212,
                    "text":"Kunden: Lieferanten, Stadtwerke, Energie-Startups, Discounter und grüne Angebote nutzen bereits powercloud und powerApps. (Stand Sept. 2020)"
                },
                {
                    "title":56000,
                    "text":"Stunden fließen monatlich in die Weiterentwicklung der Plattform und in neue powerApps. Das sind über 350 Vollzeitäquivalente."
                },
                {
                    "title":9,
                    "text":"Standorte: Offenburg, Leipzig, Berlin, Mailand, Madrid, Paris, San Francisco, Alpharetta, Melbourne"
                }
            ]
        },
        {
            "name":"Plattform",
            "active":false,
            "data":[
                {
                    "title":5173200,
                    "text": "Anzahl an Webservice-Aufrufen innerhalb einer Stunde (Spitzenwert)."
                },
                {
                    "title":637634,
                    "text":"Bisherige maximale Anzahl Abrechnungen an einem Tag (mehr sind möglich)."
                },
                {
                    "title":26317,
                    "text": "Prozessierte Neukunden eines Versorgers innerhalb von 48 Stunden."
                }
            ]
        },
        {
            "name":"Migration",
            "active": false,
            "data": [
                {
                    "title": 3000000,
                    "text": "Verträge die innerhalb einer Stunde beladen werden können (exkl. Daten-Anreicherungen)."
                },
                {
                    "title": 10000000,
                    "text": "und mehr Verträge werden aktuell von powercloud abgewickelt."
                },
                {
                    "title": 20000000,
                    "text": "Verträge die sich von Legacy Systemen in der Migration zu powercloud befinden."
                }
            ]
        }
    ];
    const startData = 0;
    const [data,setData] = useState(stats[startData].data);
    const [active,setActive] = useState(startData);


    function onClickNavElement(e) {
        let element = e.target;
        let val = element.getAttribute('value');
        setData(stats[val].data);
        setActive(val);
    }

    return (
        <div className={styles.statsContainer}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <StatsNav navElements={stats} func={onClickNavElement} active={active}/>
                    <div className={styles.contentContainer}>
                        {
                            data.map((data,i)=>(
                                <StatsContent key={i} title={data.title} text={data.text} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}