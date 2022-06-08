import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function FooterManuel() {
  return (
    <footer className={styles.container}>
      <div className={styles.powercloud}>
        <img
          src="https://power.cloud/wp-content/uploads/2020/09/powercloud-logo-1.svg"
          alt=""
        />
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.copyright}>
          © 2012 - 2022 powercloud GmbH, Offenburg.
        </div>
        <div className={styles.legals}>
          <p className={styles.textLink}>
            <Link
              className={styles.textLink}
              to={"https://power.cloud/impressum/"}
            >
              Impressum
            </Link>
          </p>
          <p className={styles.textLink}>
            <Link
              className={styles.textLink}
              to={"https://power.cloud/datenschutz/"}
            >
              Datenschutz
            </Link>
          </p>
        </div>
        <div className={styles.socials}>
          <p className={styles.socialItem}>
            <Link to="/impressum">
              <span className="fa-stack fa-2x">
                <i
                  className={`${styles.square} fa-solid fa-square fa-stack-1x`}
                ></i>
                <i
                  className={`${styles.icon} fa-brands fa-facebook-f fa-stack-1x fa-inverse`}
                ></i>
              </span>
            </Link>
          </p>
          <p className={styles.socialItem}>
            <Link to="/impressum">
              <span className="fa-stack fa-2x">
                <i
                  className={`${styles.square} fa-solid fa-square fa-stack-1x`}
                ></i>
                <i
                  className={`${styles.icon} fa-brands fa-xing fa-stack-1x fa-inverse`}
                ></i>
              </span>
            </Link>
          </p>
          <p className={styles.socialItem}>
            <Link to="/impressum">
              <span className="fa-stack fa-2x">
                <i
                  className={`${styles.square} fa-solid fa-square fa-stack-1x`}
                ></i>
                <i
                  className={`${styles.icon} fa-brands fa-linkedin-in fa-stack-1x fa-inverse`}
                ></i>
              </span>
            </Link>
          </p>
          <p className={styles.socialItem}>
            <Link to="/impressum">
              <span className="fa-stack fa-2x">
                <i
                  className={`${styles.square} fa-solid fa-square fa-stack-1x`}
                ></i>
                <i
                  className={`${styles.icon} fa-brands fa-twitter fa-stack-1x fa-inverse`}
                ></i>
              </span>
            </Link>
          </p>
          <p className={styles.socialItem}>
            <Link to="/impressum">
              <span className="fa-stack fa-2x">
                <i
                  className={`${styles.square} fa-solid fa-square fa-stack-1x`}
                ></i>
                <i
                  className={`${styles.icon} fa-brands fa-youtube fa-stack-1x fa-inverse`}
                ></i>
              </span>
            </Link>
          </p>
          <p>
            <Link className={styles.socialItem} to="/impressum">
              <span className="fa-stack fa-2x">
                <i
                  className={`${styles.square} fa-solid fa-square fa-stack-1x`}
                ></i>
                <i
                  className={`${styles.icon} fa-brands fa-instagram fa-stack-1x fa-inverse`}
                ></i>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
