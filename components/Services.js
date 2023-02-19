import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import ServiceCard from './ServiceCard'

const Services = () => {   
    
  return (
    <div className={`mt-20 ${styles.services}`}>
        <div class="marquee flex items-center border-y overflow-hidden">
            <div class="track flex w-pcent justify-around">
                <div class="content lg:text-8xl text-3xl">&nbsp;SERVICES</div>
                <div class="content lg:text-8xl text-3xl">&nbsp;SERVICES</div>
                <div class="content lg:text-8xl text-3xl">&nbsp;SERVICES</div>
            </div>
            <div class="track1 flex w-pcent justify-around">
                <div class="content lg:text-8xl text-3xl">&nbsp;SERVICES</div>
                <div class="content lg:text-8xl text-3xl">&nbsp;SERVICES</div>
                <div class="content lg:text-8xl text-3xl">&nbsp;SERVICES</div>            
            </div>
        </div>

        <div className='service-options flex flex-col justify-center items-center mt-44'>
            
            
         <ServiceCard />
         <ServiceCard />
          
            
        </div>
    </div>
  )
}

export default Services