import Title from '../Title/Title';
import styles from './LocationMap.module.css';

export default function LocationMap() {
    return (
        <div className={styles.container}>
            <Title text={'powercloud global'}/>
            <img className={styles.image} src="https://power.cloud/wp-content/uploads/2021/03/world-map_w_NordicsPNGBLACK-02.png" alt="Map" />
        </div>
    )
}