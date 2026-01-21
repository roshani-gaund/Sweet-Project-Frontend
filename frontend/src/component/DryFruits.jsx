import React from 'react'
import './sweets.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './BestSeller.css';
import { useCart } from '../../context/CartContext';
import  { useState,useEffect } from 'react';
import axios from'axios';  
import { Link } from 'react-router-dom';


const DryFruits = () => { 
  //access by productdetails
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1; // default quantity is 1
      return acc;
    }, {})
  );

  useEffect(() => {
    // 1) fetch from your backend
    axios
      .get(' https://sweet-shop-backend-vm7r.onrender.com/api/category/dryfruits',{
        withCredentials:true
      })
      .then(res => {
        setProducts(res.data);
        // initialize quantities to 1 for each product
        const q = {};
        res.data.forEach(p => { q[p._id] = 1 });
        setQuantities(q);
      })
      .catch(err => console.error('Error loading dryfruits:', err));
  }, []);
  const incrementQuantity = _id => 
    setQuantities(q => ({ ...q, [_id]: q[_id] + 1 }));
    const decrementQuantity = _id =>
      setQuantities(q => ({ ...q, [_id]: Math.max(1, q[_id] - 1) }));
  
  
   
  return (
        <>
          <div className="sweet-section background-rgb(241, 221, 168)" data-aos="fade-up" data-aos-delay="300">
            <h1 className='text-center py-4' style={{ fontFamily: "-moz-initial" }}>DryFruits</h1>
            <div className="row py-4 text-center ">
              <div className="col-3" style={{ fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>
                <i class="fa-solid fa-box-open py-2" style={{ color: "rgb(224, 166, 96)", fontSize:"35px"}}>
                </i><br />Internatioal Shipping</div>
              <div className="col-3" style={{ fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>
                <i class="fa-solid fa-clock py-2" style={{ color: "rgb(224, 166, 96)" ,fontSize:"35px"}}></i><br />
                15 Days Self Life</div>
              <div className="col-3" style={{ fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>
                <i className="fa-solid fa-earth-americas py-2" style={{ color: "rgb(224, 166, 96)",fontSize:"35px" }}></i>
                <br />Delivery within 5 Days</div>
              <div className="col-3" style={{ fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>
                <i className="fa-solid fa-leaf py-2" style={{ color: "rgb(224, 166, 96)",fontSize:"35px" }}></i><br />No Preservation</div>
            </div>
    
            <div className="container" data-aos="fade-up" data-aos-delay="300">
              <div className="row sweets-img">
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1744130087/all-products_1_vdm7lz.webp' data-aos="fade-up" data-aos-delay="500"/>
                  <h4>All Product</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1744129892/sweets_yjfo3k.webp' data-aos="fade-up" data-aos-delay="500"/>
                  <h4>Sweets</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743953741/PremiumBiscottiTrioPackFront_zfznwa.webp' data-aos="fade-up" data-aos-delay="500"/>
                  <h4>Indian Biscuits</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1744130256/guilt_free_qylgts.webp' data-aos="fade-up" data-aos-delay="500"/>
                  <h4>Guilt Free</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1744129916/Tea_Time_cuzbbg.webp' data-aos="fade-up" data-aos-delay="500"/>
                  <h4>Tea Time Snacks</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866635/South_Indian_Special-1_jjcfuq.webp' data-aos="fade-up" data-aos-delay="500"/>
                  <h4>Namkeen</h4>
                </div>
              </div>
            </div>
          </div>
  
 
       <div className="container-flex" id='News-component' data-aos="fade-up" data-aos-delay="300">
          <h1>In The News</h1>
          <p> The Essence of Shiv Shakti Capture</p>
          <div className="row">
            <div className="col-md-12  news-img" data-aos="fade-up" data-aos-delay="500">
              <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,w_360,h_240/v1744004249/1280px-Hindustan_Times_logo.svg_vte9qn.png'></img>
           <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,w_200,h_80/v1744004734/1280px-VOGUE_LOGO.svg_bmcy4r.png'/>
           <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,w_300,h_200/v1744004923/bazar-logo-png-transparent_kwwf6k.png'/>
           <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,w_200,h_100/v1744005145/1200px-FORTUNE-LOGO-2016_yvgwc6.png'/>
            </div>
          </div>
        </div>

{/* trying something new */}
<div className="container my-4 py-5" data-aos="fade-up" data-aos-delay="300">
  <div className="row">
      {products.map((product)=>(
        <div className="col-md-6 col-lg-3 mb-4 " key={product._id}>
        <div className="card h-100 text-center p-3 position-relative">
          <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

          <img src={product.image} className="card-img-top" alt={product.name}  style={{ height: '250px', objectFit: 'cover' }} /></Link>
      
          {product.soldOut && (
            <span className="position-absolute top-0 start-50 translate-middle badge bg-light text-dark">
              SOLD OUT
            </span>
          )}
      
          <div className="card-body">
            <h6 className="card-title">{product.name}</h6>
            
            <p className="card-text fw-bold">₹{product.price}</p>
      
            <select className="form-select mb-2">
              <option>{product.weight}</option>
              {/* You can add more options here if needed */}
            </select>
    
            {!product.soldOut && (
              <>
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <button className="btn btn-outline-warning px-2 py-1"   onClick={() => decrementQuantity(product._id)}>−</button>
                  <span className="mx-2">{quantities[product._id]}</span>
                  <button className="btn btn-outline-warning px-2 py-1"   onClick={() => incrementQuantity(product._id)}>+</button>
                </div>
                <button className="btn btn-warning w-100"
                  onClick={(e) => {
                    // Prevent link click
                    addToCart(product, quantities[product._id]);
                  }}
                  >
                Add to cart</button>
              </>
            )}
          </div>
        
          </div>
            </div>
      ))};
  </div>
</div>



          <div className="container-flex py-4" data-aos="fade-up" data-aos-delay="300">
            <div className="row snacks">
              <div className="col-xs-12 text-center py-5">
                <h1 className='text-center mx-4'>Shop Our Categories</h1>
              </div>
              <div className='image-text-wrapper'>
                <div className="col-md-2 snacks-img">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866635/South_Indian_Special-1_jjcfuq.webp' />
                  <button><h4>South Indian Special</h4></button>
                </div>
                <div className="col-md-2  snacks-img">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866807/Indian_BISCOTTIS_2_xxsghk.webp' />
                  <button><h4>Indian Biscuits</h4></button>
                </div>
                <div className="col-md-2  snacks-img">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866863/bakery_doabdu.webp' />
                  <button><h4>Indian Bakery</h4></button>
                </div>
                <div className="col-md-2 snacks-img">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866653/North_Indian_Special_2_n5vdj1.webp' />
                  <button><h4>North Indian Special</h4></button>
                </div>
                <div className="col-md-2 snacks-img">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866636/Tea_Time_ny4siz.webp' />
                  <button><h4>Tea Time Snacks</h4></button>
                </div>
              </div>
            </div>
          </div>
           
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-12 authentic">
                <p>You can trust Us</p>
                <h1>Clean, Authentic and sustainable</h1>
              </div>
              <div className="col-md-12 offset-md-2 authentic-img">
                <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743855273/Make_In_India_eofrtb.png'/>
               <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743855417/born-in-1998-vintage-retro-birthday-awesome-since-1998-original-parts-free-vector_mrryus.jpg'/>
                <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743864949/iso-9001-certified-label-vector-illustration_690789-7_bkb6ic.png'/>
                <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743864948/black-eco-friendly-icon-with-v-shaped-leaves-10-white-background_95164-12261_c4lsdw.jpg'/>
              </div>
            </div>
          </div>
    
        </>
      )
    };
export default DryFruits