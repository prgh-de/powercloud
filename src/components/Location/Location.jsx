import styles from './Location.module.css';
import PropTypes from 'prop-types';

export default function Location( {image, city, companyName, address }) {

    return (<>
        <img className={styles.image} src={image} alt={city}/>

        <h3>{city}</h3>
        <p className={styles.companyName}>{companyName}</p>
        <p className={styles.address}>
            {address}
        </p>

    </>);
}

Location.propTypes = {
    image: PropTypes.string,
    city: PropTypes.string,
    companyName: PropTypes.string,
    address: PropTypes.string,
}