import React, { useState } from 'react';
import './routinechest.css'
import Back1 from './routineback/back1';
import Back2 from './routineback/back2';
import Back3 from './routineback/back3';
import Back4 from './routineback/back4';

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
        displaycomponent = <Back4/>;
        console.log({ bmi });
      } else if (bmi >= 25 && bmi < 30) {
        displaycomponent = <Back3/>;
      } else if (bmi >= 18.6 && bmi < 25) {
        displaycomponent = <Back2/>;
      } else {
        displaycomponent = <Back1/>;
      }
    }

    // Set the state for displaycomponent
    setDisplayComponent(displaycomponent);
  };

  const [displayComponent, setDisplayComponent] = useState(null);

  return (
    <>
    
        <div className='pushday-con'>
            <h2>PULL DAY</h2>  
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