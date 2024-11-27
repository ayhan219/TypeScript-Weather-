import React, { useEffect, useState } from 'react';
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { SiRainmeter, SiSunrise } from "react-icons/si";
import axios from 'axios';
import API from "../API";
import { useWeatherContext } from '../context/WeatherContext';

type daysData = {
  name: string;
  temp: string;
  icon: string;
  feels_like: string;
  speed: string;
  description: string;
};

const Content = () => {
  const [data, setData] = useState<daysData[]>([]);
  const { getLocation, setGetLocation, hourly, setHourly } = useWeatherContext();

  const getWeatherInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&units=metric&appid=${API}`
      );

      const newData: daysData[] = [
        {
          name: response.data.name,
          temp: response.data.main.temp,
          icon: response.data.weather[0].icon,
          feels_like: response.data.main.feels_like,
          speed: response.data.wind.speed,
          description: response.data.weather[0].description,
        },
      ];

      setData(newData);
    } catch (error) {
      console.error(error);
    }
  };

  const getHourlyInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${getLocation}&units=metric&appid=${API}`
      );

      const hourlyDataList = response.data.list.map((item: any) => ({
        time: item.dt_txt,
        temp: item.main.temp,
        icon: item.weather[0].icon,
        desc: item.weather[0].main,
      }));

      setHourly(hourlyDataList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (getLocation.trim() !== "") {
      getWeatherInfo();
      getHourlyInfo();
    }
  }, [getLocation]);

  const pressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setGetLocation(e.currentTarget.value);
    }
  };

  return (
    <div className="md:w-[50%] w-full h-full md:ml-32 ml-4 sm:ml-8 flex flex-col items-end mb-10  gap-5">
      {/* Search Input */}
      <div>
        <input
          onKeyDown={(e) => pressKey(e)}
          className="w-full max-w-lg h-10 bg-[#202B3C] outline-none rounded-lg text-white text-xl px-3"
          placeholder="Search for cities"
          type="text"
        />
      </div>

      {/* Weather Info */}
      <div className="md:w-full w-[80%] h-auto text-white flex  p-4 md:gap-8 gap-4 bg-[#202B3C]  rounded-lg">
        <div className="flex flex-col w-full md:w-[60%]  gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold">{data[0]?.name}</h2>
            <div className="text-[#3b475a] font-semibold flex gap-2">
              <p>Chance of rain:</p>
              <span>%0</span>
            </div>
          </div>
          <div className="font-bold text-5xl">
            {data.length > 0 && `${Math.floor(Number(data[0]?.temp))}°`}
          </div>
        </div>
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            className="w-32 h-32 object-cover"
            src={`https://openweathermap.org/img/wn/${data[0]?.icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
      </div>

      {/* Today's Forecast */}
      <div className="md:w-full w-[80%] h-72 bg-[#202B3C] shadow-lg rounded-xl overflow-hidden">
        <div className="p-5">
          <h3 className="text-base text-[#828D9E] font-semibold">
            TODAY'S FORECAST
          </h3>
        </div>
        <div className="p-6 flex justify-between gap-6 overflow-x-auto">
          {hourly.slice(0, 6).map((hour, index) => (
            <div
              key={index}
              className="w-24 flex flex-col items-center justify-center gap-3 bg-[#2A3B4C] rounded-lg py-3 px-2"
            >
              <p className="text-[#828D9E] font-semibold text-sm">
                {hour?.time.slice(10)}
              </p>
              <img
                className="w-16 h-16 object-contain"
                src={`https://openweathermap.org/img/wn/${hour?.icon}@2x.png`}
                alt={`Weather Icon for ${hour?.time}`}
              />
              <p className="text-white font-bold text-xl">
                {hour?.temp && `${Math.floor(Number(hour?.temp))}°`}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Air Conditions */}
      <div className="md:w-full w-[80%] h-auto mt-5 bg-[#202B3C] rounded-xl  p-6">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-sm md:text-base text-[#828D9E] font-semibold">
            AIR CONDITIONS
          </h3>
          <button className="w-12 h-12 md:w-20  md:h-10 bg-blue-500 text-sm md:text-base text-white font-bold rounded-full">
            See more
          </button>
        </div>
        <div className="flex justify-start flex-wrap gap-6 mt-6">
          <div className="w-[45%] text-[#656F81]">
            <div className="flex gap-3 items-center">
              <FaTemperatureHigh className="text-3xl" />
              <h3 className="text-xl font-semibold">Real Feel</h3>
            </div>
            <p className="text-[#B7C0CC] font-bold text-2xl pl-5 md:pl-10">
              {Math.floor(Number(data[0]?.feels_like))}°
            </p>
          </div>
          <div className="w-[45%] text-[#656F81]">
            <div className="flex gap-3 items-center">
              <FaWind className="text-3xl" />
              <h3 className="text-xl font-semibold">Wind</h3>
            </div>
            <p className="text-[#B7C0CC] font-bold text-2xl pl-5 md:pl-10">
              {data[0]?.speed} km/h
            </p>
          </div>
          <div className="w-[45%] text-[#656F81]">
            <div className="flex gap-3 items-center">
              <SiRainmeter className="text-3xl" />
              <h3 className="text-xl font-semibold">Chance of Rain</h3>
            </div>
            <p className="text-[#B7C0CC] font-bold text-2xl pl-5 md:pl-10">0%</p>
          </div>
          <div className="w-[45%] text-[#656F81]">
            <div className="flex gap-3 items-center">
              <SiSunrise className="text-3xl" />
              <h3 className="text-xl font-semibold">Description</h3>
            </div>
            <p className="text-[#B7C0CC] font-bold text-2xl pl-5 md:pl-10">
              {data[0]?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
