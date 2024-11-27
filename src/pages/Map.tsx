import React from 'react'
import MapArea from '../components/MapArea'

type Props = {}

const Map = (props: Props) => {
  return (
    <div className='w-full h-screen bg-[#0B121E] flex flex-col items-center'>
      <div className=''>
        <h1 className='text-white font-bold text-4xl pt-10 '>Map</h1>
      </div>
      <div className='w-full h-[40%] flex justify-center items-center '>
        <div className='w-[60%] h-[90%] bg-white  '>
            <MapArea />
        </div>
      </div>
    </div>
  )
}

export default Map