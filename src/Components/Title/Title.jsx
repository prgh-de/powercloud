import style from "./Title.module.css"

export default function Title({text}) {

    return (
        <div className={style.title}>
            <div className={style.box}>
                <h1 className={style.text}>
                    {text}
                </h1>
            </div>
        </div>);

}

