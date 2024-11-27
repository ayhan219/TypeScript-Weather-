import React from 'react'
import SideBar from '../components/SideBar'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {}

const Cities = (props: Props) => {
  return (
    // <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100px", width: "30%" }}>
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   />
    //   <Marker position={[51.505, -0.09]}>
    //     <Popup>A sample location</Popup>
    //   </Marker>
    // </MapContainer>
    <div className='w-full h-screen bg-blue-950'>

    </div>
  )
}

export default Cities