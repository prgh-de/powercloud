import styles from './Hero.module.css';
export default function Hero({title, bodyText}) {
    return (
        <div className={styles.container}>
        <div className={styles.heroContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.headlineTitle}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.bodyText}>
                    <p>
                        {bodyText}
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

