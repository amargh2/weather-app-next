import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import useSWR from 'swr'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { fetcher } from '../utils/fetcher';
import WeatherDisplay from '../components/WeatherDisplay';
import { Grid, Container } from '@mui/material';
import 'mapbox-gl/dist/mapbox-gl.css';
import Head from 'next/head';
//added or statement to stop ts possibly undefined error
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'iejreijreij';

//instantiating the geocoder
const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});



export default function Map () {
  //setting ref so that map and container don't re-render after initial load
  const mapContainer = useRef(null);
  const map:any= useRef(null);
  
  //setting defaults for map
  const [lng, setLng] = useState(30);
  const [lat, setLat] = useState(50);
  const [zoom, setZoom] = useState(1.5);
  const [query, setQuery] = useState('New York')
  
  //adding  user selected clicked coordinates *this might end up getting lifted up*
  const [searchedLng, setSearchedLat] = useState(-70.9)
  const [searchedLat, setSearchedLng] = useState(42.35);
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [lng, lat],
    zoom: zoom,
    });
    //add geocoder and store lat and lng in state
    map.current.addControl(
      geocoder
        .on('result', (e) => {
          setSearchedLat(e.result.geometry.coordinates.at(0))
          setSearchedLng(e.result.geometry.coordinates.at(1))
          setQuery(e.result.place_name)
        })
    )
  });

 
  const {data, error} = useSWR(`https://api.openweathermap.org/data/3.0/onecall?lat=${searchedLat}&lon=${searchedLng}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`, fetcher)
  return (
      <Grid container spacing={4} rowSpacing={{sm:2, md:1}}>  
      <Head>
        <title>Weather</title>
        <link></link>
      </Head>  
        <Grid item sm={12} lg={6} ref={mapContainer} sx={{height:'60vh', width:'100%'}}>
        </Grid>
        <Grid item sm={12} lg={6} sx={{width:'100%'}}>
          <WeatherDisplay {...data} query={query} {...error}/>
        </Grid>
    </Grid>
  )

};