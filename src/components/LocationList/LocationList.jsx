import {useEffect, useState} from 'react';
import styles from './LocationList.module.css';
import Location from "../Location/Location";

export default function LocationList() {

    const [locations, setLocation] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/location', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                setLocation(data);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
            <div className={styles.container}>
                {locations.map((location, i) => (
                    <>
                        <h1 key={i}>{location.continent} test h21</h1>
                        <Location key={i} jsonfile={location}/>
                    </>
                ))}
            </div>
    );

}
