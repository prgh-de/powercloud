import styles from './Hero.module.css';
import PropTypes from 'prop-types';

export default function Hero({title='10 Jahre powercloud – 10 Jahre Energie (R)Evolution.', bodyText = 'Gemeinsam mit unseren Kunden und Partnern schaffen wir die Billing-Plattform der Zukunft. Und das ist erst der Anfang.'}) {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.textElements}>
                        <h2 className={styles.headlineTitle}>{title}</h2>
                        <div className={styles.bodyText}>
                            <p>{bodyText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    bodyText: PropTypes.string
}

