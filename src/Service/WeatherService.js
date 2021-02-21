import Weather from '../Components/Weather/Weather';
import HttpService from './httpService'

export const weatherService = {
    getByCity
  }
  
  function getByCity(cityName='') {
    let queryStr = '?';
    // for (const key in cityName) {
    //   queryStr += `${key}=${cityName[key]}&`;
    // }
    queryStr+=cityName;
    
    console.log(queryStr);
    return HttpService.get(`weather?q=${cityName|| ''}`);
  }
 