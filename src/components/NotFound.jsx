import React from 'react'
import errorImg from "../media/images/404.png"


const NotFound = () => {
  return (
    <div className='flex'>
        <img src={errorImg} alt="" className='m-auto'/>
    </div>
  )
}

export default NotFound