import React, { useState } from 'react'
import './About.scss'
import AboutView from '../../components/AboutView/AboutView';



const About = () => {

  const [active, setActive] = useState('1');

  const handleClick = (e) => {
    setActive(e.target.id)
  }

  return (
    <div className='about'>
      <div className="wrapper">
        <div className="heading">
          <h1>About Me</h1>
        </div>
        <div className="slider">
          <div className="content">
            <div className="left">
              <img src={require('../../images/elias.jpg')} alt="" />
            </div>
            <div className="right">
              <span className="name">Elias Hazboun</span>
              <span className="work">Full Stack Developer</span>
              <span className="quote">“Work to become, not to acquire.”</span>
            </div>
          </div>
          <div className="buttons">
            <button 
              id={1} 
              onClick={handleClick}
              className={active === '1' ? 'active' : 'inactive'}>
                Skills
            </button>
            <button 
              id={2} 
              onClick={handleClick}
              className={active === '2' ? 'active' : 'inactive'}>
                Education
            </button>
            <button 
              id={3} 
              onClick={handleClick}
              className={active === '3' ? 'active' : 'inactive'}>
                Contact
            </button>
            
          </div>
          <AboutView id={active}></AboutView>
        </div>
      </div>
    </div>
  )
}

export default About