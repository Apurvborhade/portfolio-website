import React, { useEffect } from 'react'
import gsap from 'gsap';
import styles from '../styles/Home.module.css'
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
import profile from '../public/profile.jpg'
const Landing = () => {
  useEffect(() => {
    const textAnim = gsap.timeline()
    
    textAnim.to(".anim-left",{
      x:-200,
      duration:1,
      scrollTrigger:{
        trigger:".anim-left",
        start:"top center",
        end:"=+2000px",
        scrub:true,
        markers:false,
      }
    })
    .to(".anim-right",{
      x:200,
      duration:1,
      scrollTrigger:{
        trigger:".anim-left",
        start:"top center",
        end:"=+1000px",
        scrub:true,
        markers:false,
      }
    })
    
  })
  return (
    <>
    <div className={`flex landing-wrapper justify-center items-center ${styles.landing}`}>
      <div className=''>
        <h1 className='text-6xl lg:text-9xl bg-white text-black anim-left'>FRONT-END</h1>
        <h1 className='text-6xl lg:text-9xl my-3 anim-right'>DEVELOPER</h1>
        <h1 className='text-6xl lg:text-9xl  bg-white text-black my-3 anim-left'>BASED IN </h1>
        <h1 className='text-6xl lg:text-9xl anim-right'>INDIA</h1>
      </div>
    </div>
    </>
  )
}

export default Landing