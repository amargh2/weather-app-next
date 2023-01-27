import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa"
import IconPicker from "./IconPicker"
import { CircularProgress } from "@mui/material"
//weekly weather display
export default function WeeklyWeather(props){
  //check for data; if data, display; if not, display loading message;
  console.log(props)
  if (props.daily) {
    const data = props
    return (
      <div className='weeklycontainer'>
        {props.daily.map((day:any, i) => {
          return (<div key={i} className='day'>
                    <div className='icon-container'>
                      <IconPicker className='icon' weather={day.weather[0].description} />
                    </div>
                    <div><FaTemperatureHigh size={28}/>{day.temp.max} F</div> 
                    <div><FaTemperatureLow size={28}/>{day.temp.min} F</div> 
                  </div>)})}
        </div>)
  } else {
    return (
      <CircularProgress />
    )
  }
}