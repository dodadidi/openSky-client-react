import { Link } from 'react-router-dom'

const Weather = () => {
  return (
    <div>
      <h4>Weather</h4>
      {/* <a href='/'>Go Back</a> */}
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Weather