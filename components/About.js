import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import profileImg from '../public/profile.jpg'

const About = () => {
  useEffect(() => {
    const aboutTimeline = gsap.timeline()
    const textTimeline = gsap.timeline()
    aboutTimeline.from(".box",{
      scale:0,
      duration:11,
      scrollTrigger:{
        trigger:".box",
        start:"top center",
        end:"+=2000px",
        markers:false,
        scrub:true,
        pin:".about"
      }
    })
    textTimeline.from(".info-text",{
      opacity:-1,
      duration:5,
      ease:"power4.out",
      scrollTrigger:{
        trigger:".info-text",
        start:"500px",
        end:"+=1000px",
        markers:false,
        scrub:true
      }
    })
  })
  
  return (
    <div className='flex justify-center items-center about -z-50'>
        <div className={`text-black  ${styles.infoDiv} box p-20`}>
          <p className='lg:leading-snug text-3xl lg:text-6xl info-text opacity-1 font-thin'>
            Hi, I&apos;am Apurv 👋 I&apos;m Frontend Developer based in India who like making fun and interactive things with code and focuses on writing clean and efficient code.
            Hi, I&apos;am Apurv 👋 I&apos;m Frontend Developer based in India who like making fun and interactive things with code and focuses on writing clean and efficient code.
            Hi, I&apos;am Apurv 👋 I&apos;m Frontend Developer based in India who like making fun and interactive things with code and focuses on writing clean and efficient code.
          </p>
          <div className='profile absolute bottom-10 right-10'>
                
          </div>
        </div>
    </div>
  )
}

export default About