const key = 'JrAxTfFhnb3eso770DJatRdlKB9kDcwC';

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
    console.log(city);

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    
    const response = await fetch(base + query);
    console.log(response);
    if(response.status !== 200){
        throw new Error("Cannot fetch the data");
    }
    const data = await response.json();
    console.log(data);
    return data[0];
}    


