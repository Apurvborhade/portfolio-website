import Head from 'next/head'
import styles from '../styles/Home.module.css'
// Components
import Header from '../components/Header'
import  gsap  from "gsap"
import { useEffect } from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import useLensiScroll from '../hooks/useLenisScroll'
import Works from '../components/Works'
import Services from '../components/Services'
import { FiArrowUpRight } from 'react-icons/fi'




export default function Home() {

  useEffect(() => {
    useLensiScroll()
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
      </Head>


        <div className='smooth-content'>
              <Header />
              <Landing />
              <About />
              <Works />
              <Services />
              <footer className={`${styles.footer} flex flex-col justify-center items-center`}>
                <div className={`${styles.socials} socials border-y grid lg:grid-cols-3 grid-rows-1`}>
                  <div className='border-r col-span-2 flex items-center lg:block hidden'>
                    <p className={`lg:text-biggest md:text-big line-h-90 text-big ${styles.fontDelirium}`}>APURV <br/> BORHADE</p>
                  </div>
                  <div className='grid grid-rows-3 grid-cols-1'>
                    <a href='https://instagram.com/apurvagen' target="_blank" className='flex  justify-center items-center border-b text-5xl'>Instagram <FiArrowUpRight size={50} /></a>
                    <a href='mailto:apurvaborhadee@gmail.com' className='flex  justify-center items-center border-b text-5xl'>Mail <FiArrowUpRight size={50} /></a>
                    <a href='https://github.com/Apurvborhade' target="_blank" className='flex  justify-center items-center text-5xl'>Github <FiArrowUpRight size={50} /></a>
                  </div>
                </div>

              </footer>
        </div>



    </div>
  )
}
