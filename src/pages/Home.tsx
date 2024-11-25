import React from 'react'
import SideBar from '../components/SideBar'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-full h-screen bg-[#0B121E] p-8'>
        <SideBar />
    </div>
  )
}

export default Home