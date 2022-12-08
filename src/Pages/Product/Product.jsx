import React from 'react';
import "./Product.scss";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Contact from '../../components/Contact/Contact';


const Product = () => {

  const [ selectedImg, setSelectedImg ] = React.useState(0);
  const [ quantity, setQuantity ] = React.useState(1);

  const images = [
    "https://images.pexels.com/photos/6979708/pexels-photo-6979708.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/6979737/pexels-photo-6979737.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]

  return (
    <>
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
          <h1>Animal Print Coat</h1>
          <span className='price'>£120</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minus eum tempore. Quo distinctio sint nihil ex repudiandae. Id aliquam facilis pariatur omnis laborum sequi ad impedit hic asperiores voluptatibus!
          Nostrum, rerum vero! Ducimus voluptas eveniet expedita officia! Mollitia voluptatem rem, minima odit vel nemo laboriosam nihil error illum ipsum porro sequi quia cupiditate ducimus aliquid fugit.</p>
          <div className="quantity">
            <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartOutlinedIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <ShareIcon /> SHARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: zStore</span>
            <span>Product Type: Coat</span>
            <span>Tag: Coat, Women, Winter</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Product
