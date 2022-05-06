import styles from './StatsNav.module.css'
export default function StatsNav({navElements}) {

    function onClickNavElement(e) {
        let element = e.target;

        if (!element.classList.contains(styles.active)) {
            element.classList.add(styles.active);
            setActiveNavElement(element);
            removeClassesNotActive(element);
        }
    }

    function removeClassesNotActive(notRemovingElement) {
        let allNavElements = document.getElementsByClassName(styles.navElement);
        for (let i = 0;i<allNavElements.length;i++) {
            if (allNavElements[i] !== notRemovingElement) {
                allNavElements[i].classList.remove(styles.active);
                navElements[i].active = false;
            }
        }
    }
    function setActiveNavElement(element) {
        for (let i = 0;i<navElements.length;i++) {
            if (navElements[i].name === element.id) {
                navElements[i].active = true;
            }
        }
    }

    return (
        <div className={styles.navContainer}>
            {navElements.map((navElement,i)=>(
                <div className={[styles.navElement,navElement.active ? styles.active : ''].join(' ')} key={i} onClick={onClickNavElement} id={navElement.name}>{navElement.name}</div>
            ))}
        </div>
    )
}