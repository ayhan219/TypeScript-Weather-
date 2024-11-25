import React from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Content'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-full h-screen bg-[#0B121E] p-8 flex'>
        <SideBar />
        <Content />
    </div>
  )
}

export default Home