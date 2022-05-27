import styles from './Location.module.css';
//import PropTypes from 'prop-types';

export default function Location({jsonfile}) {
    return (<>
        {jsonfile.locations.map((location, i) => (
            <div key={"location" + i} className={styles.locationContainer} >
                <img className={styles.image} src={location.picture} alt={location.picture}/>
                <div className={styles.locationDescription}>
                    <h3 className={styles.titleCity}>{location.city}</h3>
                    <p><b>{location.addressTitle}</b></p>
                    <p className={styles.companyName}>{location.addressTitle}</p>
                    <p className={styles.address}>{location.address}</p>
                </div>
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