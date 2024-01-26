import React from 'react'
import './Footer.css'
import Github from "./../../../photo/github.png";
import IG from "./../../../photo/instagram.png";
import logo from "./../../../photo/Black Beige Modern Luxury Minimalist Typographic Personal Brand Monogram Logo .png";

const git =() => {
    window.open("https://github.com/joyboy4444")
}
const Ins =() => {
    window.open("https://www.instagram.com/sossy_xx/")
}

const Footer = () => {
  return (
    <div className="Footer-container">
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="" onClick={git}/>
                <img src={IG} alt="" onClick={Ins} />
            </div>
            <div className="logo-f">
                <img src={logo} />
            </div>
        </div>
    </div>
  )
}

export default Footer