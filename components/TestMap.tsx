import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import useSWR from 'swr'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { on } from 'process';
import WeatherDisplayPanel from './WeatherDisplayPanel'
//added or statement to stop ts possibly undefined error
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'iejreijreij';

//instantiating the geocoder
const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});



export default function TestMap () {
  //setting ref so that map and container don't re-render after initial load
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(30);
  const [lat, setLat] = useState(50);
  const [zoom, setZoom] = useState(1.5);
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())
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
    projection:'globe'
    });
    map.current.addControl(
      geocoder
        .on('result', (e) => {
          (console.log(e.result.geometry.coordinates.at(0)))
          setSearchedLat(e.result.geometry.coordinates.at(0))
          setSearchedLng(e.result.geometry.coordinates.at(1))
        })
    )
  });

 
  const {data, error} = useSWR(`https://api.openweathermap.org/data/3.0/onecall?lat=${searchedLat}&lon=${searchedLng}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`, fetcher)
  if (data) console.log(JSON.stringify(data.daily))
  return (
    <div className='mapbox'>
      <div ref={mapContainer} className='map-container'>  <div>
        {data? JSON.stringify(data.daily) : ''}
      </div></div>
    
    </div>
  )

};