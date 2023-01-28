import IconPicker from "./IconPicker"
import { WiHumidity } from "react-icons/wi"
import { FaTemperatureHigh } from "react-icons/fa"
import { CircularProgress, Grid, Container } from "@mui/material"

export default function CurrentWeather(props) {
    if (props.current) {
      const currentWeather = props.current
      return (
        <Grid container>
          <Grid item>
            <IconPicker weather={currentWeather.weather[0].description}/>
          </Grid>
          <Grid item>
            <FaTemperatureHigh size={30}/> {JSON.stringify(currentWeather.temp)}
          </Grid>
          <Grid item>
            <WiHumidity size={34}></WiHumidity> {JSON.stringify(currentWeather.humidity)}
          </Grid>
        </Grid>
      )
    } else return (
      <Container>
        <CircularProgress/>
      </Container>
    )
  }