import React from 'react';

type dailyData = {
  time: string;
  temp: string;
  icon: string;
  desc: string;
};

type Props = {
  day: string;
  data: dailyData;
};

const DayForecastSingle = ({ day, data }: Props) => {
  return (
    <div className="w-full h-20 bg-[#1e2a37] rounded-lg shadow-md flex justify-between items-center p-4 mb-4">
      {/* Day */}
      <div className="w-[20%]">
        <h1 className="text-[#A1B2C1] font-semibold text-xl">{day}</h1>
      </div>

      {/* Weather Icon and Description */}
      <div className="w-[40%] flex items-center justify-center gap-3">
        <img
          className="w-16 h-16 object-contain"
          src={`https://openweathermap.org/img/wn/${data?.icon}@2x.png`}
          alt="Weather Icon"
        />
        <h1 className="text-[#C7D1D9] font-medium text-lg">{data?.desc}</h1>
      </div>

      {/* Temperature */}
      <div className="w-[20%] flex justify-end items-center">
        <h1 className="text-[#E9F1F6] font-bold text-3xl">{Math.floor(Number(data?.temp))}°</h1>
      </div>
    </div>
  );
};

export default DayForecastSingle;
