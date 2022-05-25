import styles from './Location.module.css';
import PropTypes from 'prop-types';

//export default function Location( {continent, image, city, companyName, address }) {
export default function Location({jsonfile}) {
    return (<>
        {jsonfile.locations.map((location, i) => (
            <div key={i}>
                <img className={styles.image} src={location.image} alt={location.picture}/>
                <h3>{location.addressTitle}</h3>
                <p className={styles.companyName}>{location.addressTitle}</p>
                <p className={styles.address}>{location.address}</p>
            </div>
            ))}
    </>);
}
/*
Location.propTypes = {
    continent: PropTypes.string,
    image: PropTypes.string,
    city: PropTypes.string,
    companyName: PropTypes.string,
    address: PropTypes.string,
} */