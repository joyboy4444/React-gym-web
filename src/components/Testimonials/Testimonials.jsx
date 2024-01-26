import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/TestimonialsData'
import leftArrow from '../../../photo/leftArrow.png'
import rightArrow from '../../../photo/rightArrow.png'
import { motion } from 'framer-motion'

const transition = {type: 'spring', duration : 3}
const Testimonials = () => {

    const [selected,setSelected] = useState(0);
    
    const prevSlide = ()=>{
        const isFristSlide = selected === 0;
        const newIndex = isFristSlide ? testimonialsData.length - 1 : selected -1;
        setSelected(newIndex);
    };

    const nextSlide = () =>{
        const isLastSlide = selected === testimonialsData.length -1;
        const newIndex = isLastSlide ? 0 : selected + 1;
        setSelected(newIndex);
    };


  return (
    <div className="Testimonials" id='testimonial'>
        <div className="left-t">
            <span>Testimonials</span>
            <span style={{color: 'red'}}>เรื่องราว</span>
            <span>ของพวกเรา</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x:-100}}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 0, x:100}}
            transition={transition}>
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color: 'var(--red)'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{...transition, duration:2}}
            ></motion.div>
            <motion.div
                initial={{opacity:0,x:100}}
                whileInView={{opacity:1,x:0}}
                transition={{...transition, duration:2}}
            ></motion.div>
            <motion.img 
            key={selected}
            initial={{opacity: 0, x:100}}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 0, x:-100}}
            transition={transition}
            src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img 
                    onClick=
                    {prevSlide}
                
                src={leftArrow} alt="" />
                <img 
                    onClick=
                    {nextSlide}
                
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials