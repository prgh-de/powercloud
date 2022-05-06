import styles from './StatsNav.module.css'
export default function StatsNav({navElements, func}) {
    return (
        <div className={styles.navContainer}>
            {navElements.map((navElement,i)=>(
                <div className={[styles.navElement,navElement.active ? styles.active : ''].join(' ')} key={i} value={i} onClick={func} id={navElement.name} >{navElement.name}</div>
            ))}
        </div>
    )
}