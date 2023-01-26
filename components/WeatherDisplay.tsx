import BasicTabs from "./Tabs"
import { Grid, Paper, Container, Card} from "@mui/material"

export default function WeatherDisplay() {
  return (
    <Container >  
      <Grid>
        <Card>
          <BasicTabs/>
        </Card>
        <Card>
          yo
        </Card>
        <Card>
          yo
        </Card>
      </Grid>
    </Container>  
  )
}