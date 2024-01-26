import React from 'react'
import './routinechest.css'
import Leg1 from './routineleg/LEG1';
import Leg2 from './routineleg/LEG2';
import Leg3 from './routineleg/LEG3';
import Leg4 from './routineleg/LEG4';
import Header from './Header/Header';

const routineback = () => {
  return (
    <>
        <div className='pushday-con'>
            <h2>LEG DAY</h2>        
        </div>
        <Leg1/>
        <Leg2/>
        <Leg3/>
        <Leg4/>

    </>
    
  )
}

export default routineback