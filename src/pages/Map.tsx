import React, { useEffect, useState } from "react";
import { FaWind, FaTachometerAlt, FaTint } from "react-icons/fa";
import { WiThermometer, WiSunset } from "react-icons/wi";
import  MapArea  from "../components/MapArea";
import axios from "axios"
import API from "../API";
import { useWeatherContext } from "../context/WeatherContext";


type WeatherData ={
    speed:string,
    temp:string,
    humidity:string,
    pressure:string,
    location:string
}


const Map = () => {
    const {latitude,longitude} = useWeatherContext();
    const [weatherData,setWeatherData] = useState<WeatherData[]>([]);

    const getMapData = async()=>{
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`)
            console.log(response.data);

            const newWeatherData:WeatherData[]=[
                {
                    speed: response.data.wind.speed,
                    humidity:response.data.main.humidity,
                    pressure:response.data.main.pressure,
                    location:response.data.name,
                    temp:response.data.main.temp
                }


            ]
            setWeatherData(newWeatherData);

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getMapData();
    },[latitude,longitude])
  return (
    <div className="w-full h-screen bg-[#0B121E] flex flex-col items-center">
      {/* Başlık */}
      <div>
        <h1 className="text-white font-bold text-4xl pt-10">Map</h1>
      </div>

      {/* Harita Alanı */}
      <div className="w-full h-[40%] flex justify-center items-center ml-20">
        <div className="w-[60%] h-[90%] bg-white rounded-lg shadow-lg">
          <MapArea />
        </div>
      </div>

      {/* Hava Durumu Bilgileri */}
      <div className="w-full h-96 flex justify-center items-center ml-20">
        <div className="w-[70%] h-full bg-[#202B3D] p-5 rounded-lg shadow-md text-white">
          {/* Başlık ve Genel Hava Durumu */}
          <div className="w-full h-[50%] flex justify-between items-center border-b border-gray-600 pb-4">
            <div>
              <h1 className="text-3xl font-bold">{weatherData[0]?.location}</h1>
              <p className="text-gray-300 text-sm">Current Weather Overview</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">{Math.floor(Number(weatherData[0]?.temp))}°C</p>
              <p className="text-gray-400 text-sm">Sunny</p>
            </div>
          </div>

          {/* Hava Durumu Bilgileri */}
          <div className="w-full h-[50%] flex justify-between items-center pt-4">
            <div className="flex flex-col items-center">
              <FaWind className="text-3xl text-yellow-400" />
              <p className="text-lg font-semibold">Wind</p>
              <p className="text-xl font-bold">{weatherData[0]?.speed} km/h</p>
            </div>

            <div className="flex flex-col items-center">
              <WiThermometer className="text-3xl text-red-400" />
              <p className="text-lg font-semibold">Humidity</p>
              <p className="text-xl font-bold">{weatherData[0]?.humidity}%</p>
            </div>

            <div className="flex flex-col items-center">
              <FaTint className="text-3xl text-blue-400" />
              <p className="text-lg font-semibold">Pressure</p>
              <p className="text-xl font-bold">{weatherData[0]?.pressure} hPa</p>
            </div>

            <div className="flex flex-col items-center">
              <FaTachometerAlt className="text-3xl text-green-400" />
              <p className="text-lg font-semibold">Air Pressure</p>
              <p className="text-xl font-bold">{weatherData[0]?.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
