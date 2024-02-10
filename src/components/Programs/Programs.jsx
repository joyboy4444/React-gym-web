import React from 'react'
import './Programs.css'
import { Link} from 'react-router-dom';
import chest from '../../../photo/bench_press.png'
import back from '../../../photo/Dumbbells_Exercise.png'
import leg from '../../../photo/Weightlifting.png'

  const Programs = () => {

   
  return (
    <div className="Programs" id="programs"> 
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our  </span>
            <span>   Programs   </span>
            <span className='stroke-text'>  to shape you</span>
        </div>
      <div className='Programs-Box'>
          <Link to = {"/Routinechest"}>
            <button>
              <img src={chest} alt="" />
              <h2>Chest and Shoulders</h2>
              <h5>กล้ามเนื้อหน้าอกเป็นกล้ามเนื้อที่ใครก็อยากมี เราจะมาแนะนำท่าออกกำลังเบสิคง่ายๆด้วยดัมเบลที่สามารถทำได้ที่บ้าน โดยดัมเบลและม้านั่งออกกำลังกาย มีท่าอะไรกันบ้างรวมไปถึงองศาของม้านั่งออกกำลังกายและวิธียกดัมเบลเราไปดูกันเลย</h5>
              
            </button>
          </Link>
          <Link to = {"/Routineback"}>
            <button >
              <img src={back} alt="" />
              <h2>Back and Biceps</h2>
              <h5>สำหรับใครที่ชอบในการเล่นเวทยกน้ำหนัก ดัมเบล,บาร์เบล เป็นประจำ แต่ประสบปัญหากล้ามหลังไม่โต เวลายก ดัมเบล,บาร์เบล แล้วมีอาการเจ็บ เวลายกดัมเบลโฟกัสไม่ถูกจุด ท่าสร้างกล้ามเนื้อหลังด้วย ดัมเบล,บาร์เบล ให้แน่นฟิตแข็งแรงและเซ็กซี่ถูกใจสาว จัดเต็มกันเลยแค่มีเซต ดัมเบล ก็สามารถทำที่บ้านได้ชิลๆ</h5>
            </button>
            </Link>
            <Link to = {"/Routineleg"}>
            <button >
              <img src={leg} alt="" />
              <h2>Legs and Abs</h2>
              <h5>หากคุณมีร่างกายท่อนบนที่ใหญ่โตบึกบึน มีกล้ามเป็นมัดๆ แต่กลับมีขาที่เล็กลีบเสียยิ่งกว่าผู้หญิงที่กำลังทำท่าสควอตอยู่ข้างๆ เสียอีก นั่นจึงเป็นที่มาของคำว่า ‘Chicken Leg’ หรือไอ้หนุ่มขาไก่ ที่ฝรั่งตั้งไว้ล้อเลียนคนที่เล่นแต่ท่อนบน แต่ท่อนล่างกลับเล็กลีบฟีบแบน สวนทางกับแผ่นอกที่หนาใหญ่นั่นเอง</h5>
            </button>
            </Link>
      </div>
    </div>
  )
}

export default Programs