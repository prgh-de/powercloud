import styles from './Contact.module.css';

export default function Contact( {heading, text, buttonText, buttonLink, bgImgUrl} ) {

    return (
        <section className={styles.contact} style={ {backgroundImage: `url(${bgImgUrl})`} }>
            <div className={styles.overlay}>
                <div className={styles.contactContainer}>
                    <div>
                        <div className={styles.bar}></div>
                        <h2>{heading}</h2>
                        <p>{text}</p>
                    </div>
                    <div>
                        <a href={buttonLink} className={styles.contactButton}>{buttonText}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}