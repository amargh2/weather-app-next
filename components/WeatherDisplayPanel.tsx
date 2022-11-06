import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { json } from "stream/consumers";

export default function WeatherDisplayPanel(props: { data: any; query: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  //this component takes weather data from the map function
  //it populates with the data and appropriate graphics
  const chooseContent = () => {
    if (props.data) {
      const data = props.data
      return (
        <div>
          <h3>Weather in {props.query}</h3>
          <ul>
            <li>Temperature: {JSON.stringify(data.current.temp)} F</li>
            <li>Humidity: {JSON.stringify(data.current.humidity)}%</li>
            <li>Feels Like: {JSON.stringify(data.current.feels_like)} F</li>
            <li>Description: {JSON.stringify(data.current.weather[0].description)}</li>
          </ul>
        </div>
      )
    } else {
      return  <div>No Weather Data</div>
    }
  }
  return (
    
    <div className='displaypanel'>
      {chooseContent()}
    </div>
  )
}