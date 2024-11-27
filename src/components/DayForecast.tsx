import React, { useState } from 'react'
import DayForecastSingle from './DayForecastSingle'
import { useWeatherContext } from '../context/WeatherContext';

const DayForecast = () => {
  const [days] = useState<string[]>(["today", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]);
  const { hourly } = useWeatherContext();

  // İlk 7 günün her biri için birer saat dilimi alıyoruz (örneğin 6 saatlik veriler)
  const hourlyUpdated = hourly.slice(7, 14); // İlk 7 öğeyi al


  return (
    <div className='w-full h-[89%] bg-[#202B3C] ml-0 md:ml-8 mt-16 rounded-xl p-5  '>
      <div className='p-5'>
        <h3  className='text-base text-[#828D9E] font-semibold'>7-DAY FORECAST</h3>
      </div>
      <div className='w-full h-[91%] flex justify-center flex-col'>
        {
          days.map((item, dayIndex) => (
            
            <DayForecastSingle
              key={dayIndex}  
              day={item} 
              data={hourlyUpdated[dayIndex]} 
            />
          ))
        }
      </div>
    </div>
  );
}

export default DayForecast;
