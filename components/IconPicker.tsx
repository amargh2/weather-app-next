import {BsCloudSnow, BsCloudSun, BsCloud, BsSun, BsCloudRainHeavy} from 'react-icons/bs'
import {FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa'
import { Container } from '@mui/system'
//not much to this, just if then's for the most common keywords in the weather description

export default function IconPicker (props:any,{}) {
  const weather = props.weather
  return (
    <Container>{weather.includes('snow') ? <BsCloudSnow size={50}/> : 
    weather.includes('overcast') ? <BsCloud size={50}/> :
    weather.includes('scattered') ? <BsCloud size={50}/> :
    weather.includes('clear') ? <BsSun size={50}/> :
    weather.includes('heavy rain') ? <BsCloudRainHeavy size={50}/> :
    weather.includes('heavy intensity rain') ? <BsCloudRainHeavy size={50}/> :
    weather.includes('rain') ? <BsCloudRainHeavy size={50}/> :
    weather.includes('few') ? <BsCloudSun size={50}/> :
    weather.includes('broken') ? <BsCloudSun size={50}/> :
    weather}
  </Container>)
  
}
