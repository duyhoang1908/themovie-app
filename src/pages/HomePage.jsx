import React from 'react'
import HomeContent from '../components/HomeContent'
import SideBar from '../components/SideBar'

const HomePage = () => {
  return (
    <div className='flex'>
        <div className='w-2/12'>
            <SideBar />
        </div>
        <div className='w-7/12'>
            <HomeContent />
        </div>
    </div>
  )
}

export default HomePage