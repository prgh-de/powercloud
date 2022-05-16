import styles from './NewsBox.module.css';

export default function NewsBox({article}) {
    let boxstyle = defineClasses(article);
    let button = article.buttonstyle === 'orange' ? styles.orangeButton : styles.blackButton;

    let style = {
        "backgroundImage": article.backgroundImage !== 'none' ? `url(${article.backgroundImage})`:'none',
        "backgroundColor": article.backgroundColor,
    }

    function defineClasses (articel) {
        let boxstyle = [];
        boxstyle[0] = article.boxstyle === 'small' ? styles.newsBoxSmall : styles.newsBoxBig;
        boxstyle[1] = articel.textAsOverlay === true ? styles.overlay : '';
        let backgroundClass = `backgroundClass${articel.id}`;
        let head = document.getElementsByTagName('head');
        checkDuplicateStyle(head[0]);

        if (document.getElementsByClassName(backgroundClass).length === 0) {
            let style = document.createElement('style');
            let backgroundImage = article.backgroundImage !== 'none' ? `url(${article.backgroundImage})`:'none';
            style.innerHTML = ` .${backgroundClass} background-color: ${articel.backgroundColor}; background-image: ${backgroundImage}`;

            head[0].appendChild(style);
            boxstyle[2] = backgroundClass;
        }


        return boxstyle.join(' ');
    }
    function checkDuplicateStyle(elem) {
        for(let i = 0;i<elem.children.length;i++) {
            if (elem.children[i].tagName != 'STYLE') {
                continue;
            }
            console.log(elem.children[i]);
        }
    }


    return (
        <div className={boxstyle}>
            <div className={styles.title}>{article.title}</div>
            <div className={styles.subtitle}><a href={article.subtitlelink}>{article.subtitle}</a></div>
            <div className={styles.text}>{article.text}</div>
            <div className={button}><a href={article.subtitlelink}><span className={styles.nextIcon}></span></a></div>
        </div>
    )
}