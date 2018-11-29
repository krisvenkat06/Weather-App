import { currentWeatherUrl, API_KEY } from '../config';

const getcurrentWeather = event =>{
    let url = currentWeatherUrl.replace('$API_KEY',API_KEY).replace('$latitude$',event.latitude).replace('$longtitude$',event.longtitude);
    console.log("url",url);
    return fetch(url).then(response => 
        response.json());
};

export default getcurrentWeather;