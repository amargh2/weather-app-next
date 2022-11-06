import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import useSWR from 'swr'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { on } from 'process';

// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});

export default function TestMap () {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(30);
  const [lat, setLat] = useState(50);
  const [zoom, setZoom] = useState(1.5);
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  //adding  user selected clicked coordinates *this might end up getting lifted up*
  const [clickedLng, setClickedLng] = useState(-70.9)
  const [clickedLat, setClickedLat] = useState(42.35);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [lng, lat],
    zoom: zoom,
    projection:'globe'
    });
    map?.current?.addControl(
      geocoder
        .on('result', (e) => (console.log(e.result.geometry.coordinates)))
    )
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map?.current?.on('move', () => {
    setLng(map?.current?.getCenter().lng.toFixed(4));
    setLat(map?.current?.getCenter().lat.toFixed(4));
    setZoom(map?.current?.getZoom().toFixed(2));
    });
    });
  
  useEffect(() => {
    if (!map.current) return;
    map.current.on('click', (event) => {
      setClickedLng(event.lngLat.lng)
      setClickedLat(event.lngLat.lat)
      console.log(clickedLat, clickedLng)
    })
  })
 
  //const {data, error} = useSWR(`https://api.openweathermap.org/data/3.0/onecall?lat=${clickedLat}&lon=${clickedLng}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`, fetcher)
  //console.log(data)
  return (
    <div className='mapbox'>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className='map-container'></div>
    </div>
  )

};