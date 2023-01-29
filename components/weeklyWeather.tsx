import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa"
import IconPicker from "./IconPicker"
import { CircularProgress, Grid, Container, Box, Typography} from "@mui/material"
//weekly weather display
/*export default function WeeklyWeather(props){
  //check for data; if data, display; if not, display loading message;
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
}*/

export default function WeeklyWeather(props) {
  if (props.daily) {
    const weeklyWeather = props.daily;

    return (
      <Grid container spacing={2} rowSpacing={1} sx={{columns:4}}>  
        <Container sx={{p:2}}>
          <Typography variant='h5'>Weather in {props.query} on {new Date().toLocaleString()}</Typography>
        </Container>
        {weeklyWeather.map((day, i) => {
          return (  
            <Box  sx={{flexDirection:'column', p:1}}flexDirection='column' key={i} className='grid'>
              <IconPicker weather={day.weather[0].description}/>
              <Box sx={{flexDirection:'column'}}>
                <FaTemperatureHigh size={28}/>{day.temp.max}
              </Box>
              <Box sx={{flexDirection:'column'}}>
                <FaTemperatureLow size={28}/>{day.temp.min} F
              </Box>
            </Box>
          )
        })}
      </Grid>
    )
  } else return (
    <Container>
      <CircularProgress/>
    </Container>
  )
}