import style from "./Features.module.css"

export default function Features () {
    const header = "Darum lieben IT-Architekten powercloud:";
    const content ="Modular, „cloud-native“ und bewiesene Skalierbarkeit, dazu REST-Services, Events und Automatisierung mit Machine Learning.";
    const list = ["Moderne Softwarearchitektur", "Etablierte Standards", "Konsequenter cloud-basierter Ansatz", "Stetige Bereitstellung & Weiterentwicklung der Software"];
    const print_list = list.map((item) => <li className={style.li}>{item}</li>);
    const linkText = "ERFAHRE MEHR ÜBER DIE PLATTFORM >"

    return(
        <div className={style.features}>
            <div className={style.box}>
            <div className={style.container}>
                <div className={style.left}>
                    <h2 className={style.header}>{header}</h2>
                    <div className={style.content}>{content}</div>
                    <div className={style.list}>{print_list}</div>
                    <div className={style.link}>{linkText}</div>
                </div>
                <div className={style.right}><img className={style.img} src="https://power.cloud/wp-content/uploads/2020/09/ITEntwickler.png"  alt="IT-Entwickler" height="auto%" width="90%" /></div>
            </div>
            </div>

        </div>
    );

}

