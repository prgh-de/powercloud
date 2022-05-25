import styles from './StatsContent.module.css';

export default function StatsContent({title,text}) {
    function countUp(start,end) {
        const intervalCounter = 10;
        let output = document.getElementById(id);
        let step = checkEndForSteps(end);
        let counter = setInterval(function(){
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(counter);
            }
            if (output) {
                output.innerHTML = start.toLocaleString('de-DE');
            }
        },intervalCounter)
    }

    function checkEndForSteps(end) {
        let step = 1;
        if (end > 10000000) {
            step = 150000;
        } else if (end > 1000000) {
            step = 80000;
        } else if (end > 100000) {
            step = 10000;
        } else if (end > 10000) {
            step = 800;
        } else if (end > 1000) {
            step = 100;
        } else if (end > 100) {
            step = 5;
        }
        return step;
    }
    const animationStart = 30;
    const resetValues = 2;
    const intervalAnimationStartCheck = 50;
    let id = `title${title}`;
    let i = 0;
    let start = 0;
    let end = parseInt(title);
    let startCounting = setInterval(function() {
        i+=1;
        if (i>animationStart) {
            clearInterval(startCounting);
            countUp(start,end);
        } else if (i>resetValues) {
            document.getElementById(id).innerHTML = '0';
        }
    },intervalAnimationStartCheck);

    return (
        <div className={styles.contentElement}>
            <div id={id} className={styles.contentTitle}>0</div>
            <div className={styles.contentText}>{text}</div>
        </div>
    )
}