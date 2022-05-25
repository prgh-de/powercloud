import styles from './Location.module.css';

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

ProductList.propTypes = {
    image: PropTypes.string,
    headline: PropTypes.string,
    text: PropTypes.string,
}