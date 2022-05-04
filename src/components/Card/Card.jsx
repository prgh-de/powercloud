import styles from "./Card.module.css";

export default function Card( {heading, text, linkText, linkUrl} ) {


    return (
        <>
            <div className={styles.card}>
                <h2>{heading}</h2>
                <p>{text}</p>
                <a href={linkUrl}>{linkText}</a>
            </div>
        </>
    )
}