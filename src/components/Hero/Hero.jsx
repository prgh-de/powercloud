import styles from './Hero.module.css';
import PropTypes from 'prop-types';

export default function Hero({title, bodyText}) {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <h2 className={styles.headlineTitle}>{title}</h2>
                    <div className={styles.bodyText}>
                        <p>{bodyText}</p>
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

