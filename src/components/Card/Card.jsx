import styles from "./Card.module.css";

export default function Card( {heading, text, linkText, linkUrl, imgUrl} ) {


    return (
        <div className={styles.card}>
            <img src={imgUrl} alt="" className={styles.backgroundImage}/>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>{heading}</h2>
                <p>{text}</p>
                <a href={linkUrl} className={styles.link}>{linkText}</a>
            </div>
        </div>
    )
}