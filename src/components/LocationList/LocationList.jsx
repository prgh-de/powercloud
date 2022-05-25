import {useEffect, useState} from 'react';

// import data from "/db.json";
import Location from "../Location/Location";

export default function LocationList(){

    const [locations, setLocation] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/locations', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    // async function loadLocation() {
    //     const apiLocations = await getAllLocations()
    //     setContacts(apiLocations);
    // }

    return (
        <>
            {locations.map((location) => (
                <Location location={location} />
            ))}
        </>
    );

}
