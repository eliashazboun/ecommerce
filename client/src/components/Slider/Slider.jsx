import React from 'react'
import { useState } from 'react';
import "./Slider.scss"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "https://images.unsplash.com/photo-1562975327-29a8cbfd5be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    "https://images.unsplash.com/photo-1623522264952-8dff960ec8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1619163413327-546fdb903195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  ]
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }
  return (
    <div className='slider'>
      <div className="desktop">
        <div className='slogan'>
          <h1>Welcome to Eli's Corner!</h1>
        </div>
          <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
              <img src={data[0]} alt="" />
              <img src={data[1]} alt="" />
              <img src={data[2]} alt="" />
          </div>
          <div className="icons">
              <div className="icon" onClick={prevSlide}>
                  <WestOutlinedIcon/>
              </div>
              <div className="icon" onClick={nextSlide}>
                  <EastOutlinedIcon/>
              </div>
          </div>
        </div>
        <div className="mobile">
          <div className="slogan">
            <h1>Welcome to Eli's Corner!</h1>
          </div>
          <div className="container">
            <img src={data[2]} alt="" />
          </div>

        </div>
    </div>
  )
}

export default Slider