const key = 'Ufds5VKQz2CVkpu3GH9eerhsJN16ritV';

export const getWeather = async (cityKey) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityKey}?apikey=${key}`;

    const response = await fetch(base + query);
    if(response.status !== 200){
        throw new Error("Cannot fetch the data");
    }
    const data = await response.json();
    return data[0];
}

export const getCity = async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    
    const response = await fetch(base + query);
    if(response.status !== 200){
        throw new Error("Cannot fetch the data");
    }
    const data = await response.json();
    
    return data[0];
} 

export const getData = async (userInput) =>{

    const cityDetails = await getCity(userInput);

    if(cityDetails === undefined){
        throw new Error("Enter valid city");
    }

    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails,
        weather
    };

}


