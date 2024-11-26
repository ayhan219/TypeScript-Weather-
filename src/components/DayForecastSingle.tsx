import React from 'react';

type Props = {
    day: string;
};

const DayForecastSingle = ({ day }: Props) => {
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
            src='https://cdn-icons-png.flaticon.com/512/831/831682.png'
            alt='Weather Icon'
          />
          <h1 className='text-white font-bold text-xl'>Sunny</h1>
        </div>

        {/* Sıcaklık */}
        <div className='w-[20%] flex justify-end items-center'>
          <h1 className='text-[#FFFFFF] font-bold'>36</h1>
          <span className='text-[#828D9E]'>/22</span>
        </div>
      </div>
    </>
  );
};

export default DayForecastSingle;
