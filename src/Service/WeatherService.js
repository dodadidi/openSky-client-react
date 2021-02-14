import Weather from '../Components/Weather/Weather';
import HttpService from './httpService'

export const flightService = {
    getByCity
  }
  
  function getByCity(city) {
    return HttpService.get(`weathers/${city}`)
  }
 