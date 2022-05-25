import styles from './Contact.module.css';

export default function Contact( {heading, text, buttonText, buttonLink, bgImgUrl} ) {

    return (
        <section className={styles.contact}>
            <img src={bgImgUrl} alt="" className={styles.backgroundImage}/>
            <div className={styles.overlay}>
                <div className={styles.contactContainer}>
                    <div>
                        <div className={styles.bar}></div>
                        <h2>{heading}</h2>
                        <p>{text}</p>
                    </div>
                    <div>
                        <button className={styles.contactButton}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}