import style from "./Title.module.css"

export default function Title() {
    const text = "Die führende SaaS Plattform der Energiewirtschaft für Mid- und Backoffice-Prozesse."

    return (
        <div className={style.Title}>
            <h1 className={style.Box}>
                <h1 className={style.Text}>
                    {text}
                </h1>
            </h1>
        </div>);

}

