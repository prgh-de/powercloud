import {useEffect, useState} from 'react';
import styles from './LocationList.module.css';
import Location from "../Location/Location";
import Title from "../Title/Title";

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
                        <Title key={i} text={location.continent} />
                        <Location key={i} jsonfile={location}/>
                    </>
                ))}
            </div>
    );

}
