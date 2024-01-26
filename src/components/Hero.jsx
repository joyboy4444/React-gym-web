import React, { useState } from 'react'
import './hero.css'
import Header from './Header/Header'
import hero_image from '../../photo/kindpng_615159.png'
import BMI from './BMI/BMI'

import { motion } from 'framer-motion'
const Hero = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const transition = {type: 'spring', duration : 3}

  return (
    <div className="hero" id='Home'>
        <div className="Left-h">
            <Header />
            {/*the best ad*/}
            <div className="the-best-ad">
                <motion.div
                  initial={{left: '238px'}}
                  whileInView={{left:'8px'}}
                  transition={{...transition, type:'tween'}}
                ></motion.div>
                <span>ทางเลือกในการรักษาสุขภาพของคุณ</span>
            </div>

        {/*Hero Heading*/}
          <div className="hero-text">
              <div>
                <span className='stroke-text'>MAKE </span>
                <span>YOUR</span>
              </div>
              <div>
                <span>Strong body</span>
              </div>
              <div className='text-grey'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti doloribus sapiente labore reiciendis? Cupiditate odio impedit et quod fugiat.
              </div>
            </div>
        

        {/*figure*/}
        <div className="figures">
          <div>
            <span>+3</span>
            <span>เทรนเนอร์ที่ใว้ใจได้</span>
          </div>
          <div>
            <span>+80</span>
            <span>สมาชิกของพวกเรา</span>
          </div>
          <div>
            <span>+30</span>
            <span>ท่าในการเล่น</span>
          </div>
        </div>

          {/*hero-button*/}
          <div className="hero-button">
            <button className="btn" onClick={() => setButtonPopup(true)}>คำนวณBMI</button>
            <button className="btn">Start</button>
          </div>
        </div>
        <div className="right-h">
        <span></span>
        <button className='btn'>Logout</button>

          {/*hero-images*/}
          <motion.img 
          initial={{right: '8rem'}}
          whileInView={{right:'15rem'}}
          transition={transition}
          src={hero_image} alt="" className="hero-image" />
          
        </div>
        <BMI trigger = {buttonPopup} setTrigger = {setButtonPopup}/>
    </div>
  );
}

export default Hero