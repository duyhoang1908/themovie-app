import React from 'react'

const MovieOverall = ({movie}) => {
  return (
    <div className='mt-10 text-lg text-[#989898]'>
        <p className='text-white font-medium  mb-3'>STORY</p>
        <span>{movie.overview}</span>
        <p className='text-white font-medium mt-8 mb-3'>DETAILS</p>
        <p>Status: {movie.status}</p>
        <p>Last air date: {movie.release_date}</p>
        <p>Spoken language: {movie.original_language}</p>
    </div>
  )
}

export default MovieOverall