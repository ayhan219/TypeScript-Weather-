import React, { useEffect, useState } from 'react'
import { FaTemperatureHigh } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { SiRainmeter } from "react-icons/si";
import { SiSunrise } from "react-icons/si";
import axios from 'axios';
import API from "../API"
import { useWeatherContext } from '../context/WeatherContext';

type daysData ={
    name:string,
    temp:string,
    icon:string,
    feels_like:string,
    speed:string,
    description:string,

    
  }

 
const Content = () => {
    const [data,setData] = useState<daysData[]>([]);
    // const [hourly,setHourly] =useState<hourlyData[]>([]);
    const{getLocation,setGetLocation,hourly,setHourly} = useWeatherContext();
    // const [getLocation,setGetLocation] = useState<String>("");

    const getWeatherInfo = async()=>{
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&units=metric&appid=${API}`)

            const newData: daysData[] = [{
               name: response.data.name,
               temp: response.data.main.temp,
               icon: response.data.weather[0].icon,
               feels_like: response.data.main.feels_like,
               speed: response.data.wind.speed,
               description: response.data.weather[0].description
              }];
              
              setData(newData);
        } catch (error) {
            console.log(error);
            
        }
    }

    const getHourlyInfo = async()=>{
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${getLocation}&units=metric&appid=${API}`)

            const hourlyDataList = response.data.list.map((item: any) => ({
                time: item.dt_txt, 
                temp: item.main.temp, 
                icon: item.weather[0].icon,
                desc: item.weather[0].main, 
              }));
              

              
            setHourly(hourlyDataList);
              
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        if (getLocation.trim() !== "") {
          getWeatherInfo();
          getHourlyInfo();
        }
      }, [getLocation]);

    const pressKey = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key ==="Enter"){
            setGetLocation(e.currentTarget.value);
        }
    }
    
  return (
    <div className='w-[50%] h-full ml-8 flex flex-col'>
        <div>
        <input onKeyDown={(e)=>pressKey(e)} className='w-full h-10 bg-[#202B3D] outline-none rounded-lg text-white text-xl' placeholder='Search for cities' type="text" />
        </div>
        <div className='w-full h-auto text-white flex justify-between p-8'>
            <div className='flex flex-col w-full justify-evenly'>
            
            <div className='flex flex-col gap-3 '>
            <h2 className='text-4xl font-bold'>{data[0]?.name}</h2>
            <div className='text-[#3b475a] font-semibold flex gap-2'>
            <p>Chance of rain:</p>
            <span>%0</span>
            </div>
            </div>
            <div className='font-bold text-5xl'>
            {data.length > 0 && (
  <div className='font-bold text-5xl'>
   {data[0]?.temp && `${Math.floor(Number(data[0]?.temp))}°`}
  </div>
)} 
            </div>
            </div>
            <div className='w-full h-auto flex justify-end'>
                <img className='w-64 h-64 object-cover' src={`https://openweathermap.org/img/wn/${data[0]?.icon}@2x.png`} alt="" />
            </div>
        </div>
        <div className='w-full h-72 rounded-xl bg-[#202B3C] '>
            <div className='p-5'>
                <h3 className='text-base text-[#828D9E] font-semibold'>TODAY'S FORECAST</h3>
            </div>
            <div className='w-full h-auto'>
                <div className='p-8 flex gap-8 '>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>{hourly[0]?.time.slice(10)}</p>
                    <img className='w-14 h-14' src={`https://openweathermap.org/img/wn/${hourly[0]?.icon}@2x.png`} alt="" />
                    <p className='text-white font-bold text-xl'>{hourly[0]?.temp && `${Math.floor(Number(hourly[0]?.temp))}°`}</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>{hourly[1]?.time.slice(10)}</p>
                    <img className='w-14 h-14' src={`https://openweathermap.org/img/wn/${hourly[1]?.icon}@2x.png`} alt="" />
                    <p className='text-white font-bold text-xl'>{hourly[1]?.temp && `${Math.floor(Number(hourly[1]?.temp))}°`}</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>{hourly[2]?.time.slice(10)}</p>
                    <img className='w-14 h-14' src={`https://openweathermap.org/img/wn/${hourly[2]?.icon}@2x.png`} alt="" />
                    <p className='text-white font-bold text-xl'>{hourly[2]?.temp && `${Math.floor(Number(hourly[2]?.temp))}°`}</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>{hourly[3]?.time.slice(10)}</p>
                    <img className='w-14 h-14' src={`https://openweathermap.org/img/wn/${hourly[3]?.icon}@2x.png`} alt="" />
                    <p className='text-white font-bold text-xl'>{hourly[3]?.temp && `${Math.floor(Number(hourly[3]?.temp))}°`}</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>{hourly[4]?.time.slice(10)}</p>
                    <img className='w-14 h-14' src={`https://openweathermap.org/img/wn/${hourly[4]?.icon}@2x.png`} alt="" />
                    <p className='text-white font-bold text-xl'>{hourly[4]?.temp && `${Math.floor(Number(hourly[4]?.temp))}°`}</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>{hourly[5]?.time.slice(10)}</p>
                    <img className='w-14 h-14' src={`https://openweathermap.org/img/wn/${hourly[5]?.icon}@2x.png`} alt="" />
                    <p className='text-white font-bold text-xl'>{hourly[5]?.temp && `${Math.floor(Number(hourly[5]?.temp))}°`}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-60 mt-5 bg-[#202B3C] rounded-xl '>
        <div className='p-3 w-full flex justify-between'>
                <h3 className='text-base text-[#828D9E] font-semibold'>AIR CONDITIONS</h3>
                <button className='w-20 h-10 bg-blue-500 text-white font-bold rounded-full'>See more</button>
            </div>
            <div className='flex'>
                <div className='w-[50%] h-auto text-[#656F81] flex flex-col pl-10'>
                    <div className=' flex gap-3'>
                    <FaTemperatureHigh className='text-3xl' />
                    <h3 className='text-xl font-semibold'>Real Feel</h3>
                    </div>
                    <p className='text-[#B7C0CC] font-bold text-2xl pl-11'>{Math.floor(Number(data[0]?.feels_like))}°</p>
                </div>
                <div className='w-[50%] h-auto text-[#656F81] flex flex-col pl-10'>
                    <div className=' flex gap-3'>
                    <FaWind className='text-3xl' />
                    <h3 className='text-xl font-semibold'>Wind</h3>
                    </div>
                    <p className='text-[#B7C0CC] font-bold text-2xl pl-11'>{data[0]?.speed} km/h</p>
                </div>
            </div>
            <div className='flex pt-3'>
                <div className='w-[50%] h-auto text-[#656F81] flex flex-col pl-10'>
                    <div className=' flex gap-3'>
                    <SiRainmeter className='text-3xl' />
                    <h3 className='text-xl font-semibold'>Change of rain</h3>
                    </div>
                    <p className='text-[#B7C0CC] font-bold text-2xl pl-11'>0%</p>
                </div>
                <div className='w-[50%] h-auto text-[#656F81] flex flex-col pl-10'>
                    <div className=' flex gap-3'>
                    <SiSunrise className='text-3xl' />
                    <h3 className='text-xl font-semibold'>Description</h3>
                    </div>
                    <p className='text-[#B7C0CC] font-bold text-2xl pl-11'>{data[0]?.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content