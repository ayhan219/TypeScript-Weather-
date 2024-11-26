import React from 'react'

type Props = {}

const DayForecast = (props: Props) => {
  return (
    <div className='w-[40%] h-[89%] bg-[#202B3C] ml-8 mt-24 rounded-xl p-5 '>
      <div className='p-5'>
                <h3 className='text-base text-[#828D9E] font-semibold'>7-DAY FORECAST</h3>
            </div>
            <div className='w-full h-[91%] flex justify-center '>
            <div className='w-[90%] h-32 flex justify-between items-center border-b border-[#828D9E] '>
              <h1 className='text-[#656F81] font-bold text-xl'>Today</h1>
              <div className='flex items-center gap-5'>
                <img className='w-12 h-12' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                <h1 className='text-[#656F81] font-bold text-xl'>Sunny</h1>
              </div>
             <div className='flex'>
             <h1 className='text-[#FFFFFF] font-bold'>36</h1><span className='text-[#828D9E]'>/22</span>
             </div>
            </div>

            </div>
    </div>
  )
}

export default DayForecast