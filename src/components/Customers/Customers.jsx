import styles from './Customers.module.css'
import CustomersTile from "./CustomersTile";

export default function Customers({title,references,referenceLink,pictureData}) {
    title = 'Unsere Kunden';
    references = 'Zu allen Referenzen';
    referenceLink = 'https://power.cloud/referenzen/';
    pictureData = [
        'https://power.cloud/wp-content/uploads/2021/12/GCE_Logo_WB_cmyk_black_pos.jpg',
        'https://power.cloud/wp-content/uploads/2020/07/EON_Logo.png',
        'https://power.cloud/wp-content/uploads/2020/07/enbw.png',
        'https://power.cloud/wp-content/uploads/2020/07/EWE-4C_OnLight_M.jpg',
        'https://power.cloud/wp-content/uploads/2020/09/logo-hell-1.png',
        'https://power.cloud/wp-content/uploads/2020/07/Yello_Logo_Standardform_RGB.png',
        'https://power.cloud/wp-content/uploads/2021/03/Marke_SachsenEnergie_4c-scaled.jpg',
        'https://power.cloud/wp-content/uploads/2021/04/EWII-logo-rgb-pos.jpg',
        'https://power.cloud/wp-content/uploads/2020/11/stadtenergie-logo-RGB.png',
        'https://power.cloud/wp-content/uploads/2020/07/Lition.png',
        'https://power.cloud/wp-content/uploads/2020/07/Logo_Q_CELLS_PM.jpg',
        'https://power.cloud/wp-content/uploads/2020/11/yippie-logo.png',
        'https://power.cloud/wp-content/uploads/2021/04/ostrom_Logo.png',
        'https://power.cloud/wp-content/uploads/2021/05/Logo-PNG_freigestellt.png',
        'https://power.cloud/wp-content/uploads/2020/07/Logogermany.png',
        'https://power.cloud/wp-content/uploads/2021/02/mycity_4c_R-1.jpg',
        'https://power.cloud/wp-content/uploads/2020/07/ewb_logo_rgb_v2_trans.png',
        'https://power.cloud/wp-content/uploads/2021/12/prokon-strom-z-181029-prokon-regenerative-energien-eg-640x600-1.jpg'
    ];

    return (
      <div className={styles.container}>
          <div className={styles.headLine}>
              <div className={styles.whiteBar}></div>
              <div className={styles.title}>{title}</div>
              <div className={styles.references}><a href={referenceLink}>{references}</a> > </div>
          </div>
          <div className={styles.customersContainer}>
              {pictureData.map((picture,i)=>(
                  <CustomersTile key={i} picture={picture} />
              ))}
          </div>
      </div>
    );
}