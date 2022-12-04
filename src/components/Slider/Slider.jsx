import React from 'react'
import "./Slider.scss"

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Slider = () => {

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const data = [
    "https://images.unsplash.com/photo-1523950704592-ee4866469b4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80",
    "https://images.unsplash.com/photo-1656696160196-3c3039d2b200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
    "https://images.unsplash.com/photo-1611428813653-aa606c998586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2665&q=80",
  ];

  const prevSlide = () => {
    console.log(currentSlide);
  }

  const nextSlide = () => {
    console.log(setCurrentSlide(currentSlide + 100));
  }

  return (
    <div className='slider'>
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
