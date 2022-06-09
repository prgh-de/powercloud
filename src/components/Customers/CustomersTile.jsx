import styles from './CustomersTile.module.css';

export default function CustomersTile({picture}) {
    return (
        <div className={styles.tile}>
            <img className={styles.customerImage} src={picture} alt="img"/>
        </div>
    )
}