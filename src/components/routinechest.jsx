import React from 'react'
import './routinechest.css'
import Table from './TABLE/table';
import Tablechest2 from './routinechest/tablechest2'
import Tablechest3 from './routinechest/tablechest3'
import Tablechest4 from './routinechest/tablechest4'
import Header from './Header/Header';

const routinechest = () => {
  return (
    <>
        
        <div className='pushday-con'>
            <h2>PUSH DAY</h2>
            <p>โปรแกรมเราออกแบบมาเพื่อสำหรับมือใหม่จะมีการแบ่งไหล่มาอยู่ในอกและหลังบ้างเพื่อรวบโปรเกรมจะมีความเข้มข้นในการเล่น </p>
        </div>
        <Table/>
        <Tablechest2/>
        <Tablechest3/>
        <Tablechest4/>
        
    </>
    
  )
}

export default routinechest