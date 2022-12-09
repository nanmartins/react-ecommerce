import React from 'react';
import "./Cart.scss";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Cart = () => {

  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/11664718/pexels-photo-11664718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/11664719/pexels-photo-11664719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Lether Jacket",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aperiam cupiditate blanditiis totam praesentium",
      isNew: true,
      oldPrice: 95,
      price: 70,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/8764407/pexels-photo-8764407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/8764475/pexels-photo-8764475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Blazer",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aperiam cupiditate blanditiis totam praesentium",
      oldPrice: 80,
      price: 39,
    },
  ]

  return (
    <div className='cart'>
      <h1>Your products cart:</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 50)}...</p>
            <div className="price">1 x £{item.price}</div>
          </div>
          <RemoveCircleOutlineIcon className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>£135</span>
      </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
