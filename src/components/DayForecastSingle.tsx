import React from 'react'

type Props = {}

const DayForecastSingle = (props: Props) => {
  return (
    <>
     <h1 className='text-[#656F81] font-bold text-xl'>Today</h1>
              <div className='flex items-center gap-5'>
                <img className='w-12 h-12' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                <h1 className='text-[#656F81] font-bold text-xl'>Sunny</h1>
              </div>
             <div className='flex'>
             <h1 className='text-[#FFFFFF] font-bold'>36</h1><span className='text-[#828D9E]'>/22</span>
             </div>
    </>
  )
}

export default DayForecastSingle