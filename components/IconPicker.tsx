import {BsCloudSnow, BsCloudSun, BsCloud, BsSun, BsCloudRainHeavy} from 'react-icons/bs'
import {FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa'

export default function IconPicker (props) {
  const weather = props.weather
  return (<div>
    {weather.includes('snow') ? <BsCloudSnow size={40}/> : 
    weather.includes('overcast') ? <BsCloud size={40}/> :
    weather.includes('scattered') ? <BsCloud size={40}/> :
    weather.includes('clear') ? <BsSun size={40}/> :
    weather.includes('heavy rain') ? <BsCloudRainHeavy size={40}/> :
    weather.includes('heavy intensity rain') ? <BsCloudRainHeavy size={40}/> :
    weather.includes('light rain') ? <BsCloudRainHeavy size={40}/> :
    weather.includes('few') ? <BsCloudSun size={40}/> :
    weather.includes('broken') ? <BsCloudSun size={40}/> :
    weather}
  </div>)
  
}
