import styles from './NewsBox.module.css';

export default function NewsBox({article}) {
    let boxStyle = article.boxstyle === 'small' ? styles.newsBoxSmall : styles.newsBoxBig;
    let button = article.buttonstyle === 'orange' ? styles.orangeButton : styles.blackButton;

    let imageStyle = {
        "backgroundImage": article.backgroundImage !== 'none' ? `url(${article.backgroundImage})`:'none',
        "backgroundColor": article.backgroundColor,
    }

    let overlayStyle = {
        "opacity":article.showOverlayAsDefault === true ? "1":"0",
    }

    let titleStyle = {
        "color":article.textAsOverlay === true ? "#fdca10"  : "#000000",
        "opacity":article.textAsOverlay === true && article.showOverlayAsDefault === false ? "0":"1"
    }
    let subtitleStyle = {
        "color":article.textAsOverlay === true ? "#FFFFFF"  : "#000000",
        "opacity":article.textAsOverlay === true && article.showOverlayAsDefault === false ? "0":"1"
    }
    let subtitleAStyle = {
        "color":article.textAsOverlay === true ? "#FFFFFF"  : "#000000"
    }
    let textStyle = {
        "color":article.textAsOverlay === true ? "#FFFFFF"  : "#000000",
        "opacity":article.textAsOverlay === true && article.showOverlayAsDefault === false ? "0":"1"
    }

    let buttonStyle = {
        "opacity":article.textAsOverlay === true && article.showOverlayAsDefault === false ? "0":"1"
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
                fade(elementCollection[i],400,0)
            } else {
                fade(elementCollection[i],400,1)
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

    function fade(element, time, inOut = 0) {
        element.style.opacity = inOut;
        let last = +new Date();
        let direction = inOut === 1 ? -1 : 1;
        let tick = function() {
            element.style.opacity = +element.style.opacity + direction * ((new Date() - last) / time);
            last = +new Date();
            if (+element.style.opacity < 1 && inOut === 0) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            } else if (+element.style.opacity > 0 && inOut === 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    }

    return (
        <div className={boxStyle} id={`newsBox${article.id}`} style={imageStyle} onMouseOver={showOverlay} >
            <div className={styles.title} style={titleStyle}>{article.title}</div>
            <div className={styles.subtitle} style={subtitleStyle}><a href={article.subtitlelink} style={subtitleAStyle} onMouseOver={showOverlay}>{article.subtitle}</a></div>
            <div className={styles.text} style={textStyle}>{article.text}</div>
            <div className={button} style={buttonStyle}><a href={article.subtitlelink}><span className={styles.nextIcon}></span></a></div>
            <div className={styles.overlay} style={overlayStyle} onMouseOut={showOverlay}></div>
        </div>
    )
}