import styles from './Title.module.css';

export default function Title({text}) {
    return (
        <div className={styles.headLine}>
            <div className={styles.yellowBar}></div>
            <div className={styles.title}>{text}</div>
        </div>
    )
}