import React, { useState } from 'react'
import './BMI.css'
import { FaX } from "react-icons/fa6";
import Table from './../TABLE/table';
import Hero from './../Hero'

export default function BMI(props) {


    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message,setMessage] = useState('')
    const [show,setShow] = useState(false)
    


    let imgSrc =''


    let calcBmi = (event) => {
        //prevent submitting
        event.preventDefault()

        if (weight === 0 , height === 0) {
            alert('โปรดใส่น้ำหนักและส่วนสูง')
        }else {
            let bmi = weight/((height/100)**2)
            setBmi(bmi.toFixed(1))

            //logic from message

            if (bmi >= 30) {
                setMessage('คุณอ้วน ควรออกกำลังกาย')
            }else if (bmi >= 25 && bmi < 30){
                setMessage('คุณเริ่มอ้วน ควรออกกำลังกาย')
            }else if (bmi >= 18.6 && bmi < 25){
                setMessage('อยู่ในเกณฑ์ปกติ มาเพิ่มกล้ามเนื้อกันเถอะ')
            }else{
                setMessage('ผอมเกินไป ควรออกกำลังกายเพื่อเสริมสร้างกล้ามเนื้อ')
            }
        }
    }

    let reload = () => {
        window.location.reload()
    }

  return (props.trigger) ? (
    <div className="app">
        <div className="container">
            <FaX  className='xmark' onClick={() => props.setTrigger(false)}/>
            <h2 className='center'>BMI Calculator</h2>
            <form onSubmit={calcBmi}>
                <div>
                    <label>Weight(KG)</label>
                    <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </div>
                <div>
                    <label>Height(CM)</label>
                    <input value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>
                <div>
                    <button className='btn-bmi' type='submit'>Submit</button>
                    <button className='btn-bmi btn-outline' onClick = {reload} type='submit'>Reload</button>
                </div>
            </form>

            <div className='center'>
                <h3>Your BMI is: {bmi}</h3>
                <p>{message}</p>
            </div>

            <div className='img-container'>
                <img src={imgSrc} alt='' />
            </div>
            {props.children}
        </div>
        <>{
            show?<Table Bmi = {bmi}/>:null
        }

        </>    
    </div>
  ) :"";
}

