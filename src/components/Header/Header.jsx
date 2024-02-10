import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import { GoArrowUp } from "react-icons/go";
import Bars from './../../../photo/bars.png'
import logo  from './../../../photo/Black Beige Modern Luxury Minimalist Typographic Personal Brand Monogram Logo .png'
const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuOpened] = useState(false)

  return (
    <div className="header">
      <img src={logo} alt="" />
    {menuOpened === false && mobile === true ?(
      <div className='Bars' onClick={() => setMenuOpened(true)}>
        <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/>
      </div>
    ):(
      <ul className='header-menu'>
        <li >
            <Link
              onClick={() => setMenuOpened(false)}
              to='Home'
              span={true}
              smooth={true}
            >Home</Link></li>
         <li ><Link
         onClick={() => setMenuOpened(false)}
              to='programs'
              span={true}
              smooth={true}
            >Programs</Link></li>
         <li ><Link
         onClick={() => setMenuOpened(false)}
              to='reasons'
              span={true}
              smooth={true}
            >Reasons</Link></li>
          <li ><Link
            onClick={() => setMenuOpened(false)}
              to='testimonial'
              span={true}
              smooth={true}
            >Testimonial</Link></li>
        </ul>
        )}
        
        <div className='arrowup'>
        <Link to='Home'
              span={true}
              smooth={true}>
        <GoArrowUp className='Arr' />
        </Link>
        </div>
    </div>
  )
}

export default Header