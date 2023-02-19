import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)
import projectImage from '../public/project.jpg'
import {FiArrowUpRight} from 'react-icons/fi'
import BgLines from './BgLines'
import {useCustomScroll} from '../hooks/useCustomScroll'
const Works = () => {
  useCustomScroll(e)
  
  useEffect((e) => {
    const tl = gsap.timeline()
    tl.to(".projects",{
      yPercent:-100,
      scrollTrigger:{
        trigger:".projects",
        markers:false,
        start:"top top",
        end:"+=801px",
        pin:".pin",
        scrub:true
      }
    })
    .to(".work1",{
      yPercent:-100,
      scrollTrigger:{
        trigger:".work1",
        markers:false,
        start:"+=800px top",
        end:"+=901px",
        pin:".pin",
        scrub:true
      }
    }).to(".work2",{
      yPercent:-100,
      scrollTrigger:{
        trigger:".work1",
        markers:false,
        start:"+=1700px top",
        end:"+=1001px",
        pin:".pin",
        scrub:true
      }
    })

    

    
  })
  
  return (
    <div className='pin relative h-pcent'>
      <div className={`px-10 projects bg-black  ${styles.projects} flex justify-center items-center absolute`}>
      <BgLines />
       <div className=''>
          <h2 className='mt-20 text-works-title lg:text-biggest inline-block text-9xl'>PERSONAL </h2>
          <h2 className='text-works-title lg:text-biggest text-9xl'>PROJECTS</h2>
        </div>
      </div>

      <div className={`${styles.works} relative`}>
        
        {/* WORK */}
        <div className='work work1 text-black p-5'>
          <p className='work-page-no text-9xl'>001</p>
          <div className='work-heading mr-10 absolute bottom-4 left-8'>
            <p className='text-xl work-category'>Web Development</p>
            <h2 className='text-big work-name'>BONA WEAR</h2>
          </div>
          <div className='work-info'>
            <div className='carausel-wrapper absolute bottom-4 right-8 overflow-hidden'>
              <div className='carousel flex'>
                <Image
                  src={projectImage}
                  width={750}
                  height={350}
                  />
                
                </div>
            </div>

            <div className='work-details inline-block p-3'>
              <p className='lg:text-6xl text-xl'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>

              <div className='view-btn border border-black inline-block p-2 rounded-full'>
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
        {/* WORK */}
        
        
        {/* WORK */}
        <div className='work work2 text-black p-5 -z-10'>
          <p className='work-page-no text-9xl'>002</p>
          <div className='work-heading mr-10 absolute bottom-4 left-8'>
            <p className='text-xl work-category'>Web Development</p>
            <h2 className='text-big work-name'>BONA WEAR</h2>
          </div>
          <div className='work-info'>
            <div className='carausel-wrapper absolute bottom-4 right-8 overflow-hidden'>
              <div className='carousel flex'>
                <Image
                  src={projectImage}
                  width={750}
                  height={350}
                  />
                
                </div>
            </div>

            <div className='work-details inline-block p-3'>
              <p className='lg:text-6xl text-xl'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>

              <div className='view-btn  border border-black inline-block p-2 rounded-full'>
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
        {/* WORK */}
      
        {/* WORK */}
        <div className='work work3 text-black p-5 -z-20'>
          <p className='work-page-no text-9xl'>003</p>
          <div className='work-heading mr-10 absolute bottom-4 left-8'>
            <p className='text-xl work-category'>Web Development</p>
            <h2 className='text-big work-name'>BONA WEAR</h2>
          </div>
          <div className='work-info'>
            <div className='carausel-wrapper absolute bottom-4 right-8 overflow-hidden'>
              <div className='carousel flex w-full'>
                <Image
                  src={projectImage}
                  width={750}
                  height={350}
                  />
                </div>
            </div>

            <div className='work-details inline-block p-3'>
              <p className='lg:text-6xl text-xl'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>

              <div className='view-btn border border-black inline-block p-2 rounded-full'>
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </div>
        </div>
        {/* WORK */}
      
      </div>
    </div>
  )
}

export default Works