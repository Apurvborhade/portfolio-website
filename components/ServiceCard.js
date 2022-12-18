import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const ServiceCard = () => {
    const slideDiv = useRef()

    const tl = gsap.timeline()
    const textAnimUp = () => {
        tl.to(slideDiv.current,{
            y:-100,
            ease:"power1.out",
            duration:1
        })
    }
    const textAnimDown = () => {
        tl.to(slideDiv.current,{
            y:0,
            ease:"power4.out",
            duration:1
        })
    }
  return (
    <div className='cursor-pointer service-option  border-t mt-3 pt-4 overflow-hidden' onMouseEnter={() => textAnimUp()} onMouseLeave={() => textAnimDown()}>
        <div className='service pt-3' ref={slideDiv}>
            <div className='text-5xl flex justify-between'  >
                <p>LANDING PAGE</p>
                <p>$1000</p>
            </div>
            <div className='text-3xl flex justify-between service-detail mt-10' >
                <p>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard