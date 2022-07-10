import React, { useEffect } from "react";

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const styles = {
  height: 400
}

function Map({ lat, long }) {
  const geoLocation = [lat, long];

    useEffect(()=>{
        const map = L.map('map', {
          attributionControl: false
        }
        ).setView(
          geoLocation,
          7
        );

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        minZoom: 4,
        attribution: 'Map',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);

    const myIcon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [24,36],
      iconAnchor: [12,36]
    })

    L.marker(geoLocation, {icon: myIcon}).addTo(map);

    return () => map.remove();
    });

    return <div id="map" style={styles}></div>;
}

export default Map;