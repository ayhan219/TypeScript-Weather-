import React, { useState } from 'react'
import { MdTornado } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";
import { PiCityBold } from "react-icons/pi";
import { FaMap } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { useWeatherContext } from '../context/WeatherContext';
import { Link } from 'react-router-dom';

type Props = {}

const SideBar = (props: Props) => {
    // const [activeMenu,setActiveMenu] = useState<string>("weather");
    const {activeMenu,setActiveMenu} = useWeatherContext();



    const changeActive = (e: React.MouseEvent<HTMLDivElement>, parameter: string)=>{
        setActiveMenu(parameter);
    }
  return (
    <div className='w-16 md:w-32 h-[90%] bg-[#202B3D] mt-7 rounded-lg absolute'>
        <div className='text-3xl md:text-5xl text-white flex justify-center pt-4 cursor-pointer'>
            <MdTornado />
        </div>
        <div className='text-white flex flex-col gap-6 pt-10 '>
            <Link to={"/"}>
            <div onClick={(e)=>changeActive(e,"weather")} className={`flex flex-col text-base md:text-xl items-center cursor-pointer ${activeMenu==="weather" && "text-yellow-300"}`}>
                <TiWeatherCloudy className='text-2xl md:text-4xl' />
                <a>Weather</a>
            </div>
            </Link>
            <Link to={"/cities"}>
            <div onClick={(e)=>changeActive(e,"cities")} className={`flex flex-col text-base md:text-xl items-center cursor-pointer ${activeMenu==="cities" && "text-yellow-300"}`}>
                <PiCityBold className='text-2xl md:text-4xl' />
                <a>Cities</a>
            </div>
            </Link>
            
            <Link to={"/map"}>
            <div onClick={(e)=>changeActive(e,"map")} className={`flex flex-col text-base md:text-xl items-center cursor-pointer ${activeMenu==="map" && "text-yellow-300"}`}>
                <FaMap className='text-2xl md:text-4xl' />
                <a href="">Map</a>
            </div>
            </Link>
            <Link to={"/settings"}>
            <div onClick={(e)=>changeActive(e,"settings")} className={`flex flex-col text-base md:text-xl items-center cursor-pointer ${activeMenu==="settings" && "text-yellow-300"}`}>
                <CiSettings className='text-2xl md:text-4xl' />
                <a href="">Settings</a>
            </div>
            </Link>

        </div>

    </div>
  )
}

export default SideBar