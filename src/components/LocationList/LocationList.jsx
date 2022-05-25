import {useEffect, useState} from 'react';

// import data from "/db.json";
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
        <>

            {locations.map((location, i) => (
                <Location key={i} location={location}/>
            ))}
        </>
    );

}
