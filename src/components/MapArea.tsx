import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useWeatherContext } from '../context/WeatherContext';

const MapArea = () => {
  const { setLatitude, setLongitude } = useWeatherContext();
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null);


  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setLatitude(lat);
        setLongitude(lng);
        setMarkerPosition([lat, lng]);
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      },
    });

    return markerPosition ? (
      <Marker position={markerPosition}>
        <Popup>
          Selected Location<br /> Latitude: {markerPosition[0]}, Longitude: {markerPosition[1]}
        </Popup>
      </Marker>
    ) : null;
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker /> 
    </MapContainer>
  );
};

export default MapArea;
