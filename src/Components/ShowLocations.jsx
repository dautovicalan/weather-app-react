import { useState } from "react"
import WeatherCard from "./WeatherCard"

const ShowLocations = () => {

    // const{data: weather, isPending, error} = useFetch()
    const[city, setCity] = useState('test');

    const handleOnSubmit = (e) => {

        e.preventDefault();
        console.log(e.target.location.value.trim());
        setCity(e.target.location.value.trim());
        console.log(city);

    }

    return (
        <div className="content">
            <form className="input-form" onSubmit={handleOnSubmit}>
                <p>Enter your location</p>
                <input type="text" name="location" placeholder="Location..."/>
            </form>
            {city && <WeatherCard city={city}/>}
        </div>
    )
}

export default ShowLocations;
