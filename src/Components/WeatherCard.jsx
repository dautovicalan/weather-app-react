import {useState} from 'react';
import { getCity, getWeather } from '../Hooks/WeatherApi';
import Image from './Image';


const WeatherCard = ({title}) => {
    const[city, setCity] = useState(null);
    const[weatherCondition, setWeatherCondition] = useState(null);
    const[temp, setTemp] = useState(null);
    const[img, setImg] = useState(null);

    const updateUI = (data) => {

        const{cityDetails, weather} = data;

        setCity(cityDetails.EnglishName);
        setWeatherCondition(weather.WeatherText);
        setTemp(weather.Temperature.Metric.Value);

        setImg(`../icons/icons/${weather.WeatherIcon}.svg`);

    };

    const getData = async (userInput) =>{

        const cityDetails = await getCity(userInput);
        const weather = await getWeather(cityDetails.Key);

        return {
            cityDetails,
            weather
        };

    }

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        //Dohvacanje value pute event-a

        const userInput = e.target.location.value.trim();
        console.log(userInput);
        
        getData(userInput).then(data => {
            console.log(data);
            updateUI(data);
        }).catch((err) => {
            console.log(err.message);
        })  
    };

    return (
        <div className="weather-card">  
            <div className="flexbox-container">
                <h2>{title + city}</h2>
                <div className="flexbox-item">
                    <form className="input-form" onSubmit={handleSubmit}>
                        <p htmlFor="location" className="location-input">Enter your location</p>
                        <input type="text" name="location" placeholder="Location..."/>
                    </form>
                </div>
                <div className="flexbox-item">
                    <img src="https://via.placeholder.com/400x300" alt="" />
                    { !img && <div>No image</div>}
                    { img && <Image source={img} />}
                    <h2 className="city-name">{city}</h2>
                    <div className="weather-condition">{weatherCondition}</div>
                    <div className="temperature-container">
                        <span>{temp}</span>
                        <span>&deg;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
