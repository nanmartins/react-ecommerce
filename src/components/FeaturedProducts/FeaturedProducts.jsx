
import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from '../../Hooks/useFetch';


const FeaturedProducts = ({type}) => {


  const { data, loading, error } =  useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aperiam cupiditate blanditiis totam praesentium, inventore odit! Delectus explicabo, reiciendis quod unde nam officiis quo ipsam facere nobis in rerum? Dolorem.
        Similique, itaque porro? Accusantium amet praesentium veniam animi.</p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts

// const data = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/11664718/pexels-photo-11664718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     img2: "https://images.pexels.com/photos/11664719/pexels-photo-11664719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Lether Jacket",
//     isNew: true,
//     oldPrice: 95,
//     price: 70,
//   },
//   {
//     id: 2,
//     img: "https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     img2: "https://images.pexels.com/photos/10040312/pexels-photo-10040312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Slim Trousers",
//     isNew: true,
//     oldPrice: 35,
//     price: 29,
//   },
//   {
//     id: 3,
//     img: "https://images.pexels.com/photos/2040422/pexels-photo-2040422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "T-shirt",
//     oldPrice: 22,
//     price: 15,
//   },
//   {
//     id: 4,
//     img: "https://images.pexels.com/photos/8764407/pexels-photo-8764407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     img2: "https://images.pexels.com/photos/8764475/pexels-photo-8764475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Blazer",
//     oldPrice: 80,
//     price: 39,
//   },
// ]
