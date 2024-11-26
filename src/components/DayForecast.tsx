import React from 'react'
import DayForecastSingle from './DayForecastSingle'

type Props = {}

const DayForecast = (props: Props) => {
  return (
    <div className='w-[40%] h-[89%] bg-[#202B3C] ml-8 mt-24 rounded-xl p-5 '>
      <div className='p-5'>
                <h3 className='text-base text-[#828D9E] font-semibold'>7-DAY FORECAST</h3>
            </div>
            <div className='w-full h-[91%] flex justify-center '>
            <div className='w-[90%] h-32 flex justify-between items-center border-b border-[#828D9E] '>
             <DayForecastSingle />
            </div>

            </div>
    </div>
  )
}

export default DayForecast