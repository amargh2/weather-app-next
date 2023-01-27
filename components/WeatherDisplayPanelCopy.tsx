import Tabs from "./BasicTabs";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from "react";
import {FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa'
import {WiHumidity} from 'react-icons/wi'
import IconPicker from "./IconPicker";
import { CircularProgress } from "@mui/material";
import WeatherDisplay from "./WeatherDisplay";
export default function WeatherDisplayPanel(props: { data: any; query: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  
  //this component takes weather data from the map function
  //it populates with the data and appropriate graphics
  
  // future implementation: weather data will pass to another component that returns
  // an appropriate graphical weather representation of the weather; implemented!
  
  // other future implementation: 7 day forecast in a tabbed view in the same panel
  // while true, daily shows; while false, weekly shows; implemented!

  //set state -- daily weather vs weekly weather. daily = true ? shows daily weather, else weekly.
  const [daily, setDaily] = useState(true)
  const [date, setDate] = useState(new Date())
  const [dailyWeather, setDailyWeather] = useState()
  
  //daily weather display
  const currentWeather = () => {
    // data? display. if not, show loading.
    if (props.data) {
      const data = props.data
      return (
        <div className='current'>
            <div className='icon-container'><IconPicker weather={data.current.weather[0].description} /></div> 

            <div><FaTemperatureHigh size={30}/> {JSON.stringify(data.current.temp)} F</div>
            <div><WiHumidity size={34}/> {JSON.stringify(data.current.humidity)}%</div>
        </div>
      )} if (!props.data) {
        return <div><CircularProgress/></div>
      }
  }
  //weekly weather display
  const weeklyWeather = () => {
    //check for data; if data, display; if not, display loading message;
    if (props.data) {
      const data = props.data
      return (
        <div className='weeklycontainer'>
          {data.daily.map((day:any) => {
            return (<div key='key' className='day'>
                      <div className='icon-container'><IconPicker className='icon' weather={day.weather[0].description}></IconPicker></div>
                      <div><FaTemperatureHigh size={28}/>{day.temp.max} F</div> 
                      <div><FaTemperatureLow size={28}/>{day.temp.min} F</div> 
                    </div>)})}
          </div>)
    } if (!props.data) {
      return (
        <div><CircularProgress /></div>
      )
    }
  }
  //header, buttons
  const headingAndButtons = () => {
    if (props.data) {
      return (
        <div className='header-buttons'>
          <div>
            <h3>Weather in {props.query} on {date.toLocaleDateString()}</h3>
          </div>
            <Tabs />
        </div>
        )
    } if (!props.data) {
      return (<div></div>)
    }
    
  }


  return (
    
    <div className='displaypanel'>
      {headingAndButtons()}
      
      <div style={daily ? {display:'flex'} : {display:'none'}}>{currentWeather()}</div>
      <div style={daily ? {display:'none'} : {display:'flex'}}>{weeklyWeather()}</div>
    </div>
  )
}