import { Link } from 'react-router-dom'
import {weatherService} from '../../Service/WeatherService'
import { useState, useEffect, React} from 'react'

const Weather = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeather()
})
  const getWeather= async () =>{
    const data = await weatherService.getByCity("Tel-Aviv")
    console.log(data)
    setWeather(data)
  }
  
  return (
    <div>
      <input id="outlined-basic" label="City Name" name="CityName" placeholder="City Name" variant="outlined" /> 
      <button type="submit">Check Weather</button>
      {/* <a href='/'>Go Back</a> */}
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Weather