import style from "./Features.module.css"

export default function Features ({header, content, list, linkText}) {


    return(
        <div className={style.features}>
            <div className={style.box}>
            <div className={style.container}>
                <div className={style.left}>
                    <h2 className={style.header}>{header}</h2>
                    <div className={style.content}>{content}</div>
                    <div className={style.list}> {list.map((item) => <li className={style.li}>{item}</li>)}</div>
                    <div className={style.link}><a href="https://power.cloud/plattform" title="Erfahre mehr über die Plattform">{linkText}</a></div>
                </div>
                <div className={style.right}><img className={style.img} src="https://power.cloud/wp-content/uploads/2020/09/ITEntwickler.png"  alt="IT-Entwickler" height="auto%" width="90%" /></div>
            </div>
            </div>

        </div>
    );

}

