import styles from "./Footer.module.css"

export default function Footer() {
    // copyRight
    // impressum
    // datenschutz

//seit bis
    return (
        <div className={styles.footer}>


            Footer

            <p className={styles.pTag}>&copy; {new Date(2012, 1, 1).getFullYear()}-{new Date().getFullYear()} powercloud
                GmbH, Offenburg.</p>

            <a href="">
                Impressum
            </a>
            <a href="">
                Datenschutz
            </a>

            <a href="">
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x"></i>
                    <i className={`${styles.icon} fa-brands fa-facebook fa-stack-1x fa-inverse`}></i>
                </span>
            </a>
            <a href="">
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x"></i>
                    <i className={`${styles.icon} fa-brands fa-xing fa-stack-1x fa-inverse`}></i>
                </span>
            </a>
            <a href="">
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x"></i>
                    <i className={`${styles.icon} fa-brands fa-linkedin fa-stack-1x fa-inverse`}></i>
                </span>
            </a>
            <a href="">
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x"></i>
                    <i className={`${styles.icon} fa-brands fa-twitter fa-stack-1x fa-inverse`}></i>
                </span>
            </a>

            <a href="">
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x"></i>
                    <i className={`${styles.icon} fa-brands fa-youtube fa-stack-1x fa-inverse`}></i>
                </span>
            </a>


            <a href="">
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x"></i>
                    <i className={`${styles.icon} fa-brands fa-instagram fa-stack-1x fa-inverse`}></i>
                </span>
            </a>

        </div>
    );
}