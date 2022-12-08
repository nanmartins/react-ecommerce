import React from 'react';
import "./Product.scss";

const Product = () => {

  const [ selectedImg, setSelectedImg ] = React.useState(0);
  const [ quantity, setQuantity ] = React.useState(1);

  const images = [
    "https://images.pexels.com/photos/6979708/pexels-photo-6979708.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6979737/pexels-photo-6979737.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span>£120</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quaerat natus soluta. Rerum eveniet quam iste sed est ipsam, voluptatibus soluta quidem illum dignissimos debitis iure molestias, quos vel nam.</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Product
