import React from 'react'
import HomeContent from '../components/HomeContent'
import HomeSearchBar from '../components/HomeSearchBar'
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
        <div className="w-3/12">
          <HomeSearchBar />
        </div>
    </div>
  )
}

export default HomePage