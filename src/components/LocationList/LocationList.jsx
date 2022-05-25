import { useState } from 'react';

import data from 'db.json';
import Location from "../Location/Location";

export default function LocationList(){

    const [locations, setLocation] = useState(data);

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
