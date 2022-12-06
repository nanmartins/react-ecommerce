import React from 'react';
import "./Categories.scss";
import {Link} from "react-router-dom";

const Categories = () => {
  return (
    <div className='categories'>

      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/10131810/pexels-photo-10131810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link className="link" to="/products/1">Women</Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link className="link" to="/products/1">Men</Link>
          </button>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg" alt="" />
          <button>
            <Link className="link" to="/products/1">Kids</Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <button>
                <Link className="link" to="/products/1">Acessories</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <button>
                <Link className="link" to="/products/1">Sales</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <button>
            <Link className="link" to="/products/1">New Season</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
