import Weather from '../Components/Weather/Weather';
import HttpService from './httpService'

export const weatherService = {
  getByCity
}

function getByCity(cityName = '') {
  let queryStr = '?';
  queryStr += cityName;

  console.log(queryStr);
  return HttpService.get(`weather?q=${cityName || ''}`);
}
