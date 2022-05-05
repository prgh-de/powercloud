import styles from "./Card.module.css";

export default function Card( {heading, text, linkText, linkUrl, imgUrl} ) {


    return (
        <>
            <div className={styles.card} style={ {background: `url(${imgUrl}) bottom right no-repeat, linear-gradient(to bottom right,#ffd640,#ffcc12)`} }>
                <h2>{heading}</h2>
                <p>{text}</p>
                <a href={linkUrl}>{linkText}</a>
            </div>
        </>
    )
}