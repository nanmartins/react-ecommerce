import React from 'react';
import "./Products.scss";

const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Women</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Men</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Kids</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <span>1</span>
            <input type="range" min={1} max={1000} />
          <span>1000</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" />
            <label htmlFor='desc'>Price (Heighest first)</label>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Products
