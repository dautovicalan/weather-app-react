import {useState, useEffect} from 'react';
import { getData } from '../Hooks/WeatherApi';


const WeatherCard = ({inputCity}) => {
    const[city, setCity] = useState(null);
    const[weatherCondition, setWeatherCondition] = useState(null);
    const[temp, setTemp] = useState(null);
    const[imgWeatherIcon, setImgWeatherIcon] = useState(null);
    const[isDay, setIsDay] = useState(null);
    const[isWrong, setIsWrong] = useState(null);

    const updateUI = (data) => {

        const{cityDetails, weather} = data;

        setCity(cityDetails.EnglishName);
        setWeatherCondition(weather.WeatherText);
        setTemp(weather.Temperature.Metric.Value);
        setIsDay(weather.IsDayTime ? 'day' : 'night');
        setImgWeatherIcon(weather.WeatherIcon);

    };

    // const handleSubmit = (e) =>{
        
    //     e.preventDefault();
    //     //Dohvacanje value pute event-a
    
    //     getData(e.target.location.value.trim()).then(data => {
    //         setIsWrong(false);
    //         updateUI(data);
    //     }).catch((err) => {
    //         setIsWrong(true);
    //         console.log(err.message);
    //     })  
    // };

    return (
        <div className="weather-card">  
            <div className="flexbox-container">
                <div className="flexbox-item">
                    <form className="input-form">
                        <p>Enter your location</p>
                        <input type="text" name="location" placeholder="Location..."/>
                    </form>
                </div>
                {isWrong && <div>Enter a valid city</div>}
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
