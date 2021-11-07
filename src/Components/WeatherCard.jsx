import {useState} from 'react';
import { getCity, getWeather } from '../Hooks/WeatherApi';


const WeatherCard = ({title}) => {
    const[city, setCity] = useState(null);
    const[weatherCondition, setWeatherCondition] = useState(null);
    const[temp, setTemp] = useState(null);
    const[imgWeatherIcon, setImgWeatherIcon] = useState(null);
    const[isDay, setIsDay] = useState(null);

    const updateUI = (data) => {

        const{cityDetails, weather} = data;

        setCity(cityDetails.EnglishName);
        setWeatherCondition(weather.WeatherText);
        setTemp(weather.Temperature.Metric.Value);

        setIsDay(weather.IsDayTime ? 'day' : 'night');

        console.log(isDay);

        setImgWeatherIcon(weather.WeatherIcon);

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
                    { !weatherCondition && <img src="https://via.placeholder.com/400x300" alt="" />}
                    { isDay && <img src={require(`../icons/icons/${isDay}.svg`).default} alt="Day" />}
                    <div className="weather-icon">
                        {!imgWeatherIcon && <div>No image</div>}
                        {imgWeatherIcon && <img src={require(`../icons/icons/${imgWeatherIcon}.svg`).default} alt="Weater Condition" />}
                    </div>
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
