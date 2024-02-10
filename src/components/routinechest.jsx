import React, { useState } from 'react';
import './routinechest.css';
import Table from './TABLE/table';
import Tablechest2 from './routinechest/tablechest2';
import Tablechest3 from './routinechest/tablechest3';
import Tablechest4 from './routinechest/tablechest4';

const Routinechest = () => {
  const [bmi, setBmi] = useState(0);

  const sumBmi = (event) => {
    // Prevent submitting
    event.preventDefault();

    let displaycomponent;

    if (bmi === 0) {
      alert('โปรดใส่ BMI ของคุณ');
    } else {
      setBmi(bmi);
      if (bmi >= 30) {
        displaycomponent = <Tablechest4 />;
        console.log({ bmi });
      } else if (bmi >= 25 && bmi < 30) {
        displaycomponent = <Tablechest3 />;
      } else if (bmi >= 18.6 && bmi < 25) {
        displaycomponent = <Tablechest2 />;
      } else {
        displaycomponent = <Table/>;
      }
    }

    // Set the state for displaycomponent
    setDisplayComponent(displaycomponent);
  };

  const [displayComponent, setDisplayComponent] = useState(null);

  return (
    <>
      <div className='pushday-con'>
        <h2>PUSH DAY</h2>
        <p>
          โปรแกรมเราออกแบบมาเพื่อสำหรับมือใหม่จะมีการแบ่งไหล่มาอยู่ในอกและหลังบ้างเพื่อรวบโปรเกรมจะมีความเข้มข้นในการเล่น
        </p>
        <input
          value={bmi}
          placeholder='   โปรดใส่ BMI ของคุณ'
          onChange={(e) => setBmi(e.target.value)}
        />
        <button type='submit' onClick={sumBmi}>
          SUBMIT
        </button>
      </div>
      <div>{displayComponent}</div>
    </>
  );
};

export default Routinechest;