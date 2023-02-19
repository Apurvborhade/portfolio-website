import Head from 'next/head'
import styles from '../styles/Home.module.css'
// Components
import Header from '../components/Header'

import { useEffect } from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import Works from '../components/Works'
import Services from '../components/Services'
import { FiArrowUpRight } from 'react-icons/fi'
import Lenis from '@studio-freight/lenis'





export default function Home() {

  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    
    //get scroll value
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress })
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })
  

  return (
    <div className="" id="main-container">
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
      <Head>
        <title>Apurv Borhade</title>
        <meta name="description" content="Apurv Borhade Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Unbounded:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,100&display=swap" rel="stylesheet"/>
      </Head>


        <div className='smooth-content'>
              <Header />
              <Landing />
              <About />
              <Works />
              <Services />
              <footer className={`${styles.footer} footer-wrapper flex flex-col justify-center items-center`}>
                <div className={`${styles.socials} socials border-y grid lg:grid-cols-3 grid-rows-1`}>
                  <div className='border-r col-span-2 flex items-center lg:block hidden'>
                    <p className={`lg:text-biggest md:text-big line-h-90 text-big `}>APURV <br/> BORHADE</p>
                  </div>
                  <div className='grid grid-rows-3 grid-cols-1'>
                    <a href='https://instagram.com/apurvagen' target="_blank"  rel="noreferrer" className='flex  justify-center items-center border-b text-5xl'>Instagram <FiArrowUpRight size={50} /></a>
                    <a href='mailto:apurvaborhadee@gmail.com' className='flex  justify-center items-center border-b text-5xl'>Mail <FiArrowUpRight size={50} /></a>
                    <a href='https://github.com/Apurvborhade' target="_blank" rel="noreferrer"  className='flex  justify-center items-center text-5xl'>Github <FiArrowUpRight size={50} /></a>
                  </div>
                </div>

              </footer>
        </div>



    </div>
  )
}

