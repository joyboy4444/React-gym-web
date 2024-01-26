import React from 'react'
import './Programs.css'
import Routinechest from './../routinechest'
import Routineback from './../routineback'
import Routineleg from './../routineleg'
import { Route,Routes, useNavigate} from 'react-router-dom';

  const Programs = () => {

    const navigate = useNavigate();
  return (
    <div className="Programs" id="programs"> 
            <Routes>
                <Route exact path ='/Routinechest' element={<Routinechest/>}/>
                <Route exact path ='/Routineback' element={<Routineback/>}/>
                <Route exact path ='/Routineleg' element={<Routineleg/>}/>
            </Routes>
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our  </span>
            <span>   Programs   </span>
            <span className='stroke-text'>  to shape you</span>
        </div>
      <div className='Programs-Box'>
            <button onClick={() => {
              navigate("/Routinechest")
            }}>
              <img src="../../../photo/bench_press.png" alt="" />
              <h2>Chest and Shoulders</h2>
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sed obcaecati nostrum eos, dolore sequi!</h5>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button onClick={() => {
              navigate("/Routineback")
            }} >
              <img src="../../../photo/Dumbbells_Exercise.png" alt="" />
              <h2>Back and Biceps</h2>
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sed obcaecati nostrum eos, dolore sequi!</h5>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button onClick={() => {
              navigate("/Routineleg")
            }}>
              <img src="../../../photo/Weightlifting.png" alt="" />
              <h2>Legs and Abs</h2>
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sed obcaecati nostrum eos, dolore sequi!</h5>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
      </div>
    </div>
  )
}

export default Programs