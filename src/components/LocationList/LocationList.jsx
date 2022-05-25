import {useEffect, useState} from 'react';

// import data from "/db.json";
import Location from "../Location/Location";

export default function LocationList() {

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
                setLocation(data);
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
    console.log("location: " + locations.location);
    console.log("Objects:" + Object.keys(locations));

    return (
        <>
            {locations.map((location, i) => (
                <Location location={location}/>
            ))}
        </>
    );

}
