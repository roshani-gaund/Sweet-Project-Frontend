// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useCart } from '../../context/CartContext';
import { Card, Button } from 'react-bootstrap';


const products = [ {
    id: 1,
    name: 'Premium Peda trio Box 650g',
    weight: '675g',
    price: 1100,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743952943/peda_m9fpaf.webp', 
  },
  {
    id: 2,
    name: 'Royal Baklava Box (Round Tin Pack)',
    weight: '200g',
    price: 225,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743953144/Baklawa_1_wlbdyz.webp',
  },
  {
    id: 3,
    name: ' Best Ajmeri Kalakand ',
    weight: '350g',
    price: 745,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743953141/AjmeriKalakand_bb1zqe.webp',
  },
  {
    id: 4,
    name: 'Royal Sweet Made',
    weight: '200g',
    price: 245,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743952891/de_a4mnaw.webp',
  },
  {
    id: 5,
    name: 'Royal Baklava Box (Round Tin Pack)',
    weight: '350g',
    price: 745,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743956978/laddo-indian-pakistani-sweet-made-260nw-2368925025_wsuix9.jpg',
  },
  {
    id: 6,
    name: 'Famous MysorPak(trio Box Pack)',
    weight: '350g',
    price: 745,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743953727/MysorePak_mgd7v9.webp',
  },
  {
    id: 7,
    name: 'Mix Sweets with Dry Fruits (Round Tin Pack)',
    weight: '350g',
    price: 745,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743953164/fg_eoy5nt.webp',
  },
  {
    id: 8,
    name: 'Rasogulla Box (Round Tin Pack)',
    weight: '350g',
    price: 745,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743953960/odishas-rasagola-or-west-bengals-rasogolla-which-one-wins-the-battle-of-flavours_bxd3l9.jpg',
  },
  {
    id: 9,
    name: 'Jalebi (Round Tin Pack)',
    weight: '350g',
    price: 745,
    image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1743954049/53099699_f2cxjy.jpg',
  },];

const BestDetail = () => {
     const { addToCart } = useCart();
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <div>Product not found</div>;
  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="container">
    <div className="row">
   <div className=" col-lg-6 col-xs-12  mt-5">
       <img src={product.image} alt={product.name} style={{border:'1px solid black' , width:'100%',opacity:'0.8',borderRadius:'10px',height:"400px"}}/> 
    </div>
    <div className="col-lg-5  col-xs-12">
      <h2 className='mt-5'>{product.name}</h2>
    <Rating name="half-rating-read" defaultValue={4}  precision={0.5} readOnly className='mt-5'/>
      <p className='mt-4'>Price: ₹{product.price}</p>
      <p className='mt-4'>Weight: {product.weight}</p>
      <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias odio, perspiciatis quia dolore, quam
         quod placeat modi velit, quasi 
        necessitatibus laudantium illum veniam voluptatem. Obcaecati ipsa facilis totam distinctio!</p>
      <button className="btn btn-warning mt-3 align-item-center m-5"  onClick={handleAddToCart}>Add to Cart</button>
    </div>
    </div>
    </div>
  );
};

export default BestDetail;
