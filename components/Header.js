import React from 'react'
import styles from '../styles/Home.module.css'


const Header = () => {
    
  return (
    <>
        <div className={`${styles.header} flex flex-col justify-between p-8`}>
            <div className='upper flex justify-between'>
                <h1 className=' text-xl'>APURVA <br/> BORHADE</h1>
                <p>
                    <a className='font-light'>apurvborhadee@gmail.com</a>
                </p>
            </div>
        </div>
    </>
  )
}

export default Header