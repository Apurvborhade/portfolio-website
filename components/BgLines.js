import React from 'react'

const BgLines = () => {
  return (
    <div className='lines'>
        <div className='w-pcent bg-transparent absolute h-pcent flex flex-col justify-evenly'>
          <div className='line-x'></div>
          <div className='line-x'></div>
          <div className='line-x'></div>
          <div className='line-x'></div>
          <div className='line-x'></div>
          <div className='line-x'></div>
          <div className='line-x'></div>
          <div className='line-x'></div>
        </div>
        <div className='w-pcent h-pcent flex absolute justify-evenly'>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
          <div className='line-y'></div>
        </div>
      </div>
  )
}

export default BgLines