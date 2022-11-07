import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from "react";
import {BsCloudSnow, BsCloudSun, BsCloud, BsSun, BsCloudRainHeavy} from 'react-icons/bs'
import {FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa'
import {WiHumidity} from 'react-icons/wi'
import IconPicker from "./IconPicker";
export default function WeatherDisplayPanel(props: { data: any; query: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  //this component takes weather data from the map function
  //it populates with the data and appropriate graphics
  
  // future implementation: weather data will pass to another component that returns
  // an appropriate graphical weather representation of the weather;
  
  // other future implementation: 7 day forecast in a tabbed view in the same panel
  // while true, daily shows; while false, weekly shows 
  const [daily, setDaily] = useState(true)
  const [date, setDate] = useState(new Date())
  console.log(props.data)
  const weatherDisplay = () => {
    if (props.data) {
      const data = props.data
      return (
        <div>
          <h3>Weather in {props.query} on {date.toLocaleString()}</h3>
            <div className="button-container">
              <button onClick={() => setDaily(true)}>Daily</button>
              <button onClick={()=> setDaily(false)}>Weekly</button>
            </div>
              {daily === true ? <div className='current'>
                <div><FaTemperatureHigh/> {JSON.stringify(data.current.temp)} F</div>
                <div><WiHumidity/> {JSON.stringify(data.current.humidity)}%</div>
                <div><IconPicker weather={data.current.weather[0].description}/></div>
              </div> : <div className='dayscontainer'>
                {data.daily.map(day => {
                  return (<div key='key' className='day'>
                            <div><IconPicker weather={day.weather[0].description}></IconPicker></div>
                            <div><FaTemperatureHigh size={28}/>{day.temp.max} F</div> 
                            <div><FaTemperatureLow size={28}/>{day.temp.min} F</div> 
                          </div>)
                })}
              </div>
          }
          </div>
        
      )
    } else {
      return  <div>No Weather Data</div>
    }
  }
  return (
    
    <div className='displaypanel'>
      {weatherDisplay()}
    </div>
  )
}