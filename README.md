# Weather App

Weather App with Next.js.

### More Info

I built a simple weather app a whlie back using vanilla JavaScript to learn async and promises, but I wanted to come back and build a better and better-looking one with React (in this case Next.js with TypeScript). This time around went quite a bit faster, though I'm still figuring out TypeScript as I go.

For Weather App 2.0, I wanted to focus on incorporating multiple APIs and services,
including a map API. I went with Mapbox with the geocoder plugin to get accurate coordinates for the weather api, and used Open Weather Map again
for the JSON weather info. For now fetching is accomplished on the front end with useSWR and the JS fetch API.

### Basic Usage.

You can use it live at https://weather-app-9001.netlify.app/

Pretty simple! Just type any place or semblance of a place into the searchbar
on the map, and choose one of the options. The weather from the nearest weather station to that point will populate on the righthand panel.