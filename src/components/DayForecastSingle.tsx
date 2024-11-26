import React from 'react';

type dailyData ={
    time: string,
    temp:string,
    icon: string,
    desc:string
  }

type Props = {
    day: string;
    data:dailyData
};

const DayForecastSingle = ({ day,data }: Props) => {
  return (
    <>
      <div className='w-[90%] h-32 flex justify-between items-center border-b border-[#828D9E]'>
        {/* Gün Adı */}
        <div className='w-[20%]'>
          <h1 className='text-[#656F81] font-bold text-xl truncate'>{day}</h1>
        </div>
        
        {/* Hava Durumu */}
        <div className='w-[40%] flex items-center justify-center gap-5'>
          <img
            className='w-12 h-12'
            src={`https://openweathermap.org/img/wn/${data?.icon}@2x.png`}
            alt='Weather Icon'
          />
          <h1 className='text-white font-bold text-xl'>{data?.desc}</h1>
        </div>

        {/* Sıcaklık */}
        <div className='w-[20%] flex justify-end items-center'>
          <h1 className='text-[#FFFFFF] font-bold'>{Math.floor(Number(data?.temp))}</h1>
          <span className='text-[#828D9E]'>/22</span>
        </div>
      </div>
    </>
  );
};

export default DayForecastSingle;
