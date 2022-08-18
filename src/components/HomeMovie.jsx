import React from 'react'

import defaultAvatar from "../media/images/defaultAvatar.jpg"


const HomeMovie = ({isTVshow, setTVshow}) => {
  return (
    <div>
        <div className="flex justify-between items-center">
        <div className="flex items-center border-b border-[rgb(58,57,57)]">
          <div
            className="text-[20px] pb-3 mr-8 hover:cursor-pointer text-[#989898] font-light"
            onClick={() => setTVshow(!isTVshow)}
          >
            TV Show
          </div>
          <div
            className="text-[20px] pb-3 border-b-2 border-white hover:cursor-pointer text-white font-medium"
            onClick={() => setTVshow(!isTVshow)}
          >
            Movie
          </div>
        </div>
        <div className="flex items-center text-[18px] text-[#989898]">
            <p>Anonymous</p>
            <div className="w-[28px] h-[28px] ml-6 object-cover rounded-[50%] overflow-hidden">
                <img src={defaultAvatar} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeMovie