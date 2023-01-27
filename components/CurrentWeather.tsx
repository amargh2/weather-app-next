import IconPicker from "./IconPicker"
import { WiHumidity } from "react-icons/wi"
import { FaTemperatureHigh } from "react-icons/fa"
import { CircularProgress } from "@mui/material"

export default function CurrentWeather(props) {
  // data? display. if not, show loading.
  if (props.current) {
    const data = props
    return (
      <div className='current'>
          <div className='icon-container'><IconPicker weather={data.current.weather[0].description} /></div> 

          <div><FaTemperatureHigh size={30}/> {JSON.stringify(data.current.temp)} F</div>
          <div><WiHumidity size={34}/> {JSON.stringify(data.current.humidity)}%</div>
      </div>
    )} 
    else {
      return <div><CircularProgress/></div>
    }
}