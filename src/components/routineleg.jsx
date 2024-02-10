import React, { useState } from 'react';
import './routinechest.css'
import Leg1 from './routineleg/LEG1';
import Leg2 from './routineleg/LEG2';
import Leg3 from './routineleg/LEG3';
import Leg4 from './routineleg/LEG4';

const routineback = () => {

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
        displaycomponent = <Leg4 />;
        console.log({ bmi });
      } else if (bmi >= 25 && bmi < 30) {
        displaycomponent = <Leg3/>;
      } else if (bmi >= 18.6 && bmi < 25) {
        displaycomponent = <Leg2 />;
      } else {
        displaycomponent = <Leg1/>;
      }
    }

    // Set the state for displaycomponent
    setDisplayComponent(displaycomponent);
  };

  const [displayComponent, setDisplayComponent] = useState(null);

  return (
    <>
        <div className='pushday-con'>
            <h2>LEG DAY</h2> 
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

export default routineback