import styles from './NewsBox.module.css';

export default function NewsBox({article}) {
    let boxstyle = article.boxstyle === 'small' ? styles.newsBoxSmall : styles.newsBoxBig;
    let button = article.buttonstyle === 'orange' ? styles.orangeButton : styles.blackButton;

    let imageStyle = {
        "backgroundImage": article.backgroundImage !== 'none' ? `url(${article.backgroundImage})`:'none',
        "backgroundColor": article.backgroundColor,
    }

    let overlayStyle = {
        "display":article.showOverlayAsDefault === true ? "block":"none",
    }

    let titleStyle = {
        "color":article.textAsOverlay === true ? "#fdca10"  : "#000000",
        "display":article.textAsOverlay === true && article.showOverlayAsDefault === false ? "none":"block"
    }
    let subtitleStyle = {
        "color":article.textAsOverlay === true ? "#FFFFFF"  : "#000000",
        "display":article.textAsOverlay === true && article.showOverlayAsDefault === false ? "none":"block"
    }
    let subtitleAStyle = {
        "color":article.textAsOverlay === true ? "#FFFFFF"  : "#000000"
    }
    let textStyle = {
        "color":article.textAsOverlay === true ? "#FFFFFF"  : "#000000",
        "display":article.textAsOverlay === true && article.showOverlayAsDefault === false ? "none":"block"
    }

    let buttonStyle = {
        "display":article.textAsOverlay === true && article.showOverlayAsDefault === false ? "none":"block"
    }


    function showOverlay(e) {
        let element = dge(`newsBox${article.id}`);
        if (checkArticleOptionOverlay()) {
            if (e.type === 'mouseover') {
                toggleDisplayElementsInOverlay(element.children,true);
            } else if (e.type === 'mouseout') {
                toggleDisplayElementsInOverlay(element.children,false);
            }
        }
    }

    function toggleDisplayElementsInOverlay(elementCollection,state) {
        for (let i=0;i<elementCollection.length;i++) {
            if (state === true) {
                elementCollection[i].style.display = 'block';
            } else {
                elementCollection[i].style.display = 'none';
            }
        }
    }

    function checkArticleOptionOverlay() {
        if (article.showOverlayAsDefault === false && article.textAsOverlay === true) {
            return true;
        }
        return false;
    }

    function dge(element) {
        return document.getElementById(element);
    }

    return (
        <div className={boxstyle} id={`newsBox${article.id}`} style={imageStyle} onMouseOver={showOverlay} >
            <div className={styles.title} style={titleStyle}>{article.title}</div>
            <div className={styles.subtitle} style={subtitleStyle}><a href={article.subtitlelink} style={subtitleAStyle}>{article.subtitle}</a></div>
            <div className={styles.text} style={textStyle}>{article.text}</div>
            <div className={button} style={buttonStyle}><a href={article.subtitlelink}><span className={styles.nextIcon}></span></a></div>
            <div className={styles.overlay} style={overlayStyle} onMouseOut={showOverlay}></div>
        </div>
    )
}