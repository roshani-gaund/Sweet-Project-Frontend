import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './BestSeller.css';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const products = [
  {
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
  },
];


const BestSeller = function () {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState(
     products.reduce((acc, product) => {
       acc[product.id] = 1; // default quantity is 1
       return acc;
     }, {})
   );
   const incrementQuantity = (id) => {
     setQuantities((prev) => ({
       ...prev,
       [id]: prev[id] + 1
     }));
   };
   
   const decrementQuantity = (id) => {
     setQuantities((prev) => ({
       ...prev,
       [id]: prev[id] > 1 ? prev[id] - 1 : 1
     }));
   };
  return (

    <>
      <div className="best-seller-section px-4" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-center my-4 font-monospace">Best Seller</h2>
        <div className="scroll-container d-flex overflow-auto gap-3">
          {products.map((product)=> (
            <>
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
            <Card style={{ minWidth: '350px' }}>
              <Card.Img variant="top" src={product.image} />
             
             
              
              <Card.Body>
                <Card.Title>{product.name} {product.weight}</Card.Title>
                <Card.Text>₹ {product.price}</Card.Text>

                <Form.Select className="mb-2">
                  <option>{product.weight}</option>
                </Form.Select>

                <div className="d-flex align-items-center mb-2">
                  <Button variant="outline-secondary" size="sm" onClick={() => decrementQuantity(product.id)}>-</Button>
                  <span className="mx-2">{quantities[product.id]}</span>
                  <Button variant="outline-secondary" size="sm" onClick={() => incrementQuantity(product.id)}>+</Button>
                </div>

                <Button
                  variant="warning"
                  className="w-100"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent link click
                    addToCart(product, quantities[product.id]);
                  }}
                  >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
            </Link>
            </>
          ))}

        </div>
      </div>
      <button className=' explore ' data-aos="fade-up" data-aos-delay="500">Explore More</button>
    </>
  );
};

export default BestSeller;
