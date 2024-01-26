import React from 'react'
import './routinechest.css'
import Back1 from './routineback/back1';
import Back2 from './routineback/back2';
import Back3 from './routineback/back3';
import Back4 from './routineback/back4';
import Header from './Header/Header';

const routineback = () => {
  return (
    <>
    
        <div className='pushday-con'>
            <h2>PULL DAY</h2>        
        </div>
        <Back1/>
        <Back2/>
        <Back3/>
        <Back4/>
    </>
    
  )
}

export default routineback