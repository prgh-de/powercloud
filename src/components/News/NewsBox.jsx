import styles from './NewsBox.module.css';

export default function NewsBox({article}) {
    let boxstyle = article.boxstyle === 'small' ? styles.newsBoxSmall : styles.newsBoxBig;
    let button = article.buttonstyle === 'orange' ? styles.orangeButton : styles.blackButton;

    let style = {
        "backgroundImage": article.backgroundImage !== 'none' ? `url(${article.backgroundImage})`:'none',
        "backgroundColor": article.backgroundColor,
    }

    function showOverlay(e) {

    }

    return (
        <div className={boxstyle} style={style}>
            <div className={styles.overlay} onMouseOver={showOverlay} onMouseOut={showOverlay} id={`newsbox${article.id}`}>
                <div className={styles.title}>{article.title}</div>
                <div className={styles.subtitle}><a href={article.subtitlelink}>{article.subtitle}</a></div>
                <div className={styles.text}>{article.text}</div>
                <div className={button}><a href={article.subtitlelink}><span className={styles.nextIcon}></span></a></div>
            </div>
        </div>
    )
}