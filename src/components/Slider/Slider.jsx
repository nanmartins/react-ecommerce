import React from 'react'

const Slider = () => {

  const data = [
    "https://images.unsplash.com/photo-1523950704592-ee4866469b4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80",
    "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1611428813653-aa606c998586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2665&q=80",
  ];

  return (
    <div className='slider'>
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
    </div>
  )
}

export default Slider
