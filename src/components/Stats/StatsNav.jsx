import styles from './StatsNav.module.css'
export default function StatsNav({navElements, func, active}) {
    return (
        <div className={styles.navContainer}>
            {navElements.map((navElement,i)=>(
                <div className={[styles.navElement,active==i ? styles.active : ''].join(' ')} key={i} value={i} onClick={func} id={navElement.name} >
                    <div className={styles.navText}>{navElement.name}</div>
                </div>
            ))}
        </div>
    )
}