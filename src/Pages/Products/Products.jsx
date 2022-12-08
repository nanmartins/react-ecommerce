import React from 'react';
import { useParams } from "react-router-dom";
import Contact from '../../components/Contact/Contact';
import List from "../../components/List/List";
import "./Products.scss";


const Products = () => {

  const catId = parseInt(useParams().id);
  const [ maxPrice, setMaxPrice ] = React.useState(1000);
  const [ sort, setSort ] = React.useState(null);

  return (
    <>
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
              <input type="range" min={1} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")} />
              <label htmlFor='asc'>Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("asc")} />
              <label htmlFor='desc'>Price (Heighest first)</label>
            </div>
          </div>
        </div>

        <div className="right">
          <img className='catImg' src="https://images.pexels.com/photos/206430/pexels-photo-206430.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <List catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Products
