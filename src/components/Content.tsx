import React from 'react'
import { FaTemperatureHigh } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { SiRainmeter } from "react-icons/si";
import { SiSunrise } from "react-icons/si";

type Props = {}

const Content = (props: Props) => {
  return (
    <div className='w-[50%] h-full ml-8 flex flex-col'>
        <div>
        <input className='w-full h-10 bg-[#202B3D] outline-none rounded-lg text-white text-xl' placeholder='Search for cities' type="text" />
        </div>
        <div className='w-full h-auto text-white flex justify-between p-8'>
            <div className='flex flex-col w-full justify-evenly'>
            
            <div className='flex flex-col gap-3 '>
            <h2 className='text-4xl font-bold'>Madrid</h2>
            <div className='text-[#3b475a] font-semibold flex gap-2'>
            <p>Chance of rain:</p>
            <span>%0</span>
            </div>
            </div>
            <div className='font-bold text-5xl'>
                32° 
            </div>
            </div>
            <div className='w-full h-auto flex justify-end'>
                <img className='w-64 h-64' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
            </div>
        </div>
        <div className='w-full h-72 rounded-xl bg-[#202B3C] '>
            <div className='p-5'>
                <h3 className='text-base text-[#828D9E] font-semibold'>TODAY'S FORECAST</h3>
            </div>
            <div className='w-full h-auto'>
                <div className='p-8 flex gap-8 '>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>6:00 AM</p>
                    <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                    <p className='text-white font-bold text-xl'>32°</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>6:00 AM</p>
                    <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                    <p className='text-white font-bold text-xl'>32°</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>6:00 AM</p>
                    <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                    <p className='text-white font-bold text-xl'>32°</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>6:00 AM</p>
                    <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                    <p className='text-white font-bold text-xl'>32°</p>
                    </div>
                    <div className='w-28  border-r border-[#828D9E] flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>6:00 AM</p>
                    <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                    <p className='text-white font-bold text-xl'>32°</p>
                    </div>
                    <div className='w-28   flex flex-col items-center justify-center gap-5'>
                    <p className='text-[#828D9E] font-semibold'>6:00 AM</p>
                    <img className='w-14 h-14' src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                    <p className='text-white font-bold text-xl'>32°</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-60 mt-5 bg-[#202B3C] rounded-xl '>
        <div className='p-3 w-full flex justify-between'>
                <h3 className='text-base text-[#828D9E] font-semibold'>AIR CONDITIONS</h3>
                <button className='w-20 h-10 bg-blue-500 text-white font-bold rounded-full'>See more</button>
            </div>
            <div className='flex'>
                <div className='w-[50%] h-auto text-[#656F81] flex flex-col pl-10'>
                    <div className=' flex gap-3'>
                    <FaTemperatureHigh className='text-3xl' />
                    <h3 className='text-xl font-semibold'>Real Feel</h3>
                    </div>
                    <p className='text-[#B7C0CC] font-bold text-2xl pl-11'>32°</p>
                </div>
                <div className='w-[50%] h-auto text-[#656F81] flex flex-col pl-10'>
                    <div className=' flex gap-3'>
                    <FaWind className='text-3xl' />
                    <h3 className='text-xl font-semibold'>Wind</h3>
                    </div>
                    <p className='text-[#B7C0CC] font-bold text-2xl pl-11'>0.2 km/h</p>
                </div>
            </div>
            <div className='flex pt-3'>
                <div className='w-[50%] h-auto text-[#656F81] flex flex-col pl-10'>
                    <div className=' flex gap-3'>
                    <SiRainmeter className='text-3xl' />
                    <h3 className='text-xl font-semibold'>Change of rain</h3>
                    </div>
                    <p className='text-[#B7C0CC] font-bold text-2xl pl-11'>0%</p>
                </div>
                <div className='w-[50%] h-auto text-[#656F81] flex flex-col pl-10'>
                    <div className=' flex gap-3'>
                    <SiSunrise className='text-3xl' />
                    <h3 className='text-xl font-semibold'>UV index</h3>
                    </div>
                    <p className='text-[#B7C0CC] font-bold text-2xl pl-11'>3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content