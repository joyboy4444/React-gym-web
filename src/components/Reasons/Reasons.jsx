import React from 'react'
import './Reasons.css'
import image1 from '../../../photo/image1.png'
import image2 from '../../../photo/image2.png'
import image3 from '../../../photo/image3.png'
import image4 from '../../../photo/image4.png'
import tick from '../../../photo/tick.png'
import { motion } from 'framer-motion'

const Reasons = () => {
  const transition = {type: 'spring', duration : 3}
  return (
    <div className="Reasons" id='reasons'>
      <motion.div className="left-r"
      initial={{opacity:0,x:-100}}
      whileInView={{opacity:1,x:0}}
      transition={transition}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </motion.div>
      <motion.div 
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={transition}
        className="right-r">
        <span>เหตุผลของคุณ</span>
        <div>
          <span >ทำไม</span>
          <span> ต้องเลือกเรา</span>
        </div>
        
        <div className='details-r'>
          <div>
            <img src={tick} alt=""></img>
            <span>มีโค้ชที่มากประสบการณ์</span>
          </div>
          <div>
            <img src={tick} alt=""/>
            <span>เสริมสร้างกล้ามเนื้อที่แข็งแรงและทนทาน</span>
          </div>
          <div>
            <img src={tick} alt=""/>
            <span>มีโปรแกรมที่เหมาะสำหรับคนหลากหลายประเภท</span>
          </div>
          <div>
            <img src={tick} alt=""/>
            <span>สามารถพูดคุยกับเราได้ทุกเมื่อ</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reasons