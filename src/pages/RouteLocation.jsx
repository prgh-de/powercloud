import LocationList from "../components/LocationList/LocationList";
import LocationMap from "../components/LocationMap/LocationMap";
import LocationHero from "../components/LocationHero/LocationHero";

export default function RouteLocation() {
    return (
        <>
            <LocationHero />
            <LocationMap />
            <LocationList />
        </>
    )
}