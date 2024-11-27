import React, { useState } from 'react'
import { MdTornado } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";
import { PiCityBold } from "react-icons/pi";
import { FaMap } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { useWeatherContext } from '../context/WeatherContext';

type Props = {}

const SideBar = (props: Props) => {
    // const [activeMenu,setActiveMenu] = useState<string>("weather");
    const {activeMenu,setActiveMenu} = useWeatherContext();



    const changeActive = (e: React.MouseEvent<HTMLDivElement>, parameter: string)=>{
        e.preventDefault();
        setActiveMenu(parameter);
    }
  return (
    <div className='w-32 h-full bg-[#202B3D] rounded-lg'>
        <div className='text-5xl text-white flex justify-center pt-4 cursor-pointer'>
            <MdTornado />
        </div>
        <div className='text-white flex flex-col gap-6 pt-10 '>
            <div onClick={(e)=>changeActive(e,"weather")} className={`flex flex-col text-xl items-center cursor-pointer ${activeMenu==="weather" && "text-yellow-300"}`}>
                <TiWeatherCloudy className='text-4xl' />
                <a href="">Weather</a>
            </div>
            <div onClick={(e)=>changeActive(e,"cities")} className={`flex flex-col text-xl items-center cursor-pointer ${activeMenu==="cities" && "text-yellow-300"}`}>
                <PiCityBold className='text-4xl' />
                <a href="">Cities</a>
            </div>
            <div onClick={(e)=>changeActive(e,"map")} className={`flex flex-col text-xl items-center cursor-pointer ${activeMenu==="map" && "text-yellow-300"}`}>
                <FaMap className='text-4xl' />
                <a href="">Map</a>
            </div>
            <div onClick={(e)=>changeActive(e,"settings")} className={`flex flex-col text-xl items-center cursor-pointer ${activeMenu==="settings" && "text-yellow-300"}`}>
                <CiSettings className='text-4xl' />
                <a href="">Settings</a>
            </div>

        </div>

    </div>
  )
}

export default SideBar