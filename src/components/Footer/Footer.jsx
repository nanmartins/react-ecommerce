import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo sint aut sit atque autem, unde natus, delectus quas repellat debitis eveniet laudantium ratione dolore, esse repellendus animi quisquam dolorum.</span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At molestias perferendis, vel adipisci aperiam consectetur mollitia in. Eos cumque reprehenderit, totam.</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">FashionStore</span>
          <span className="copyright">
          FashionStore. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
