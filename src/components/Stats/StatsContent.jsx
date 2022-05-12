import styles from './StatsContent.module.css';

export default function StatsContent({title,text}) {
    return (
        <div className={styles.contentElement}>
            <div className={styles.contentTitle}>{title}</div>
            <div className={styles.contentText}>{text}</div>
        </div>
    )
}