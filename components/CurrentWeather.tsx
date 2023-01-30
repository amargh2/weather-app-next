import IconPicker from "./IconPicker"
import { WiHumidity } from "react-icons/wi"
import { FaTemperatureHigh } from "react-icons/fa"
import { CircularProgress, Box, Grid, Container, Typography } from "@mui/material"

//shows the weather for current day
export default function CurrentWeather(props) {
    if (props.current) {
      const currentWeather = props.current
      return (
        <Grid container rowSpacing={1} spacing={2} sx={{p:{lg:1}}}>
          <Container sx={{p:3}}>
            <Typography variant='h5'>Weather in {props.query} on {new Date().toLocaleString()}</Typography>
          </Container>
          <Box sx={{p:1}}>
            <IconPicker weather={currentWeather.weather[0].description}/>
          </Box>
          <Box sx={{p:1}}>
            <FaTemperatureHigh size={30}/> {JSON.stringify(currentWeather.temp)}
          </Box>
          <Box sx={{p:1}}>
            <WiHumidity size={34}></WiHumidity> {JSON.stringify(currentWeather.humidity)}
          </Box>
        </Grid>
      )
    } else return (
      <Container>
        <CircularProgress/>
      </Container>
    )
  }