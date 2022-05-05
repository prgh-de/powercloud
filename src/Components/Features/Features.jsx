import style from "./Features.module.css"

export default function Features () {
    const header = "Darum lieben IT-Architekten powercloud:";
    const content ="Modular, „cloud-native“ und bewiesene Skalierbarkeit, dazu REST-Services, Events und Automatisierung mit Machine Learning.";
    const list = ["Moderne Softwarearchitektur", "Etablierte Standards", "Konsequenter cloud-basierter Ansatz", "Stetige Bereitstellung & Weiterentwicklung der Software"];
    const print_list = list.map((item) => <p className={style.li}>{item}</p>);
    const link = <img src="https://power.cloud/wp-content/themes/powercloud/img/icons/pc-icons/pc-icons-chevron-right.svg" alt="chevron"/>

    return(
        <div className={style.features}>
            <h1 className={style.box}>
            <div className={style.container}>
                <div className={style.left}>
                    <h1 className={style.header}>{header}</h1>
                    <div className={style.content}>{content}</div>
                    <div className={style.list}>{print_list}</div>
                    <div className={style.link}>{link}</div>
                </div>
                <div className={style.right}><img src="https://power.cloud/wp-content/uploads/2020/09/ITEntwickler.png"  alt="IT-Entwickler" height="80%" width="80%" /></div>
            </div>
            </h1>

        </div>
    );

}

