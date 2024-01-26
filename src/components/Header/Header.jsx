import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className="header">
        <img src="../../../photo/Black Beige Modern Luxury Minimalist Typographic Personal Brand Monogram Logo .png" alt="" />
        <ul className='header-menu'>
            <li >
            <Link
              to='Home'
              span={true}
              smooth={true}
            >Home</Link></li>
            <li ><Link
              to='programs'
              span={true}
              smooth={true}
            >Programs</Link></li>
            <li ><Link
              to='reasons'
              span={true}
              smooth={true}
            >Why us</Link></li>
            <li ><Link
              to='testimonial'
              span={true}
              smooth={true}
            >Testimonial</Link></li>
        </ul>
    </div>
  )
}

export default Header