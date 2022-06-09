import styles from './LocationHero.module.css';

export default function LocationHero() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titleHero}>Unsere Standorte</h1>
            <div className={styles.textHero}>Ob im idyllischen Offenburg, im lebendigen Leipzig, in der Hauptstadt Berlin, in der italienischen Metropole Mailand, in der französischen Hauptstadt Paris, im kalifornischen San Francisco, im Tech-Village Alpharetta oder in Down Under – wir sind für dich da!</div>
        </div>
    )
}