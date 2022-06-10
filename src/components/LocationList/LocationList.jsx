import {useEffect, useState} from 'react';
import styles from './LocationList.module.css';
import Location from "../Location/Location";
import Title from "../Title/Title";

export default function LocationList() {

    const [locations, setLocation] = useState([]);

    useEffect(() => {

        fetch('https://localhost/locations/all', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                setLocation(data.location);
                //console.log('Success:', data);
            })
            .catch((error) => {
                //console.error('Error:', error);
            });
    }, []);

    return (
            <div className={styles.container}>
                {locations.map((location, i) => (
                    <div key={i}>
                        <Title key={"title"+ i} text={location.continent}/>
                        <Location key={"Location" + i} jsonfile={location} />
                    </div>
                ))}
            </div>
    );
}
