import React from 'react'
import HomeContent from '../components/HomeContent'
import HomeSearchBar from '../components/HomeSearchBar'
import SideBar from '../components/SideBar'

const HomePage = () => {
  return (
    <div className='md:flex h-[100vh] overflow-hidden'>
        <div className='hidden md:block md:w-2/12'>
            <SideBar category="home"/>
        </div>
        <div className='w-full md:w-7/12'>
            <HomeContent />
        </div>
        <div className="hidden md:block md:w-3/12">
          <HomeSearchBar />
        </div>
    </div>
  )
}

export default HomePage