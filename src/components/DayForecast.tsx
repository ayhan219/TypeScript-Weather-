import React, { useState } from 'react'
import DayForecastSingle from './DayForecastSingle'



const DayForecast = () => {
  const [days, setDays] = useState<string[]>(["today", "tuesday", "wednessday", "thursday", "friday", "saturday", "sunday"]);

  
  return (
    <div className='w-[40%] h-[89%] bg-[#202B3C] ml-8 mt-24 rounded-xl p-5 '>
      <div className='p-5'>
                <h3 className='text-base text-[#828D9E] font-semibold'>7-DAY FORECAST</h3>
            </div>
            <div className='w-full h-[91%] flex justify-center flex-col '>
           
             {
              days.map((item,index)=>(
                <DayForecastSingle day={item} />
              ))
             }

            </div>
    </div>
  )
}

export default DayForecast