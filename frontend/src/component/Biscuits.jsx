import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../context/CartContext';
export const products = [
    {
      id: 1,
      name: 'Mix BIscuits with Dry Fruits 250g',
      weight: '250g',
      price: 450,
      image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1745295528/Baklava-Box-big_s8edro.webp',
      soldOut:false,
    },
    {
      id: 2,
      name: 'BADAMIKA WITH SUGAR FREE',
      weight: '200g',
      price: 225,
      image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1745295528/badamika_5805e9bb-d45a-49c7-bc1f-a2a262c98e12_apw6im.webp',
      soldOut:false,
    },
    {
        id: 3,
        name: 'BADAMIKA BISCUITS 200g',
        weight: '200g',
        price: 200,
        image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1745295527/badamika_5805e9bb-d45a-49c7-bc1f-a2a262c98e12_1_t2gu1f.webp',
        soldOut:false,
      },
      {
        id: 4,
        name: 'CHOCOMIKA BISCUITS 200g',
        weight: '200g',
        price: 155,
        image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1745295549/chocomika_3ce57f42-fe18-4f57-b788-417890ca6690_1_rapnuu.webp',
        soldOut:false,
      },
      {
        id: 5,
        name: 'PISTAMIKA BISCUITS 150g',
        weight: '150g',
        price: 140,
        image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1745295638/PistamikaFOP_mofury.webp',
        soldOut:false,
      },
      {
        id: 6,
        name: 'BADAMIKA BOX PACKAGING 100g',
        weight: '300g',
        price: 325,
        image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1745295639/PremiumBiscottiTrioPackFront_uuy5f5.webp',
        soldOut:false,
      },
      {
        id: 7,
        name: 'BADAMIKA WITH SUGAR FREE 150g',
        weight: '150g',
        price: 150,
        image: 'https://res.cloudinary.com/dvo3apbag/image/upload/v1745295589/Indian_BISCOTTIS_2_1_pxtcnv.webp',
        soldOut:false,
      },
];  

const Biscuits = () => {
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
    
    return(
    
        <><div className="sweet-section background-rgb(241, 221, 168)" data-aos="fade-up" data-aos-delay="300">
            <h1 className='text-center py-4' style={{ fontFamily: "-moz-initial" }}>Biscuits</h1>
            <div className="row py-4 text-center ">
                <div className="col-3" style={{ fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>
                    <i className="fa-solid fa-box-open py-2" style={{ color: "rgb(224, 166, 96)", fontSize: "35px" }}>
                    </i><br />Internatioal Shipping</div>
                <div className="col-3" style={{ fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>
                    <i className="fa-solid fa-clock py-2" style={{ color: "rgb(224, 166, 96)", fontSize: "35px" }}></i><br />
                    15 Days Self Life</div>
                <div className="col-3" style={{ fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>
                    <i className="fa-solid fa-earth-americas py-2" style={{ color: "rgb(224, 166, 96)", fontSize: "35px" }}></i>
                    <br />Delivery within 5 Days</div>
                <div className="col-3" style={{ fontSize: "20px", fontFamily: "monospace", fontWeight: "bold" }}>
                    <i className="fa-solid fa-leaf py-2" style={{ color: "rgb(224, 166, 96)", fontSize: "35px" }}></i><br />No Preservation</div>
            </div>
        </div>
        
        <div className="container"  data-aos="fade-up" data-aos-delay="500">
              <div className="row sweets-img">
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1744130087/all-products_1_vdm7lz.webp'/>
                  <h4>All Product</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1744129892/sweets_yjfo3k.webp'/>
                  <h4>Sweets</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743953741/PremiumBiscottiTrioPackFront_zfznwa.webp'/>
                  <h4>Indian Biscuits</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1744130256/guilt_free_qylgts.webp'/>
                  <h4>Guilt Free</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1745296396/tea-time-snacks_h881cr.webp'/>
                  <h4>Tea Time Snacks</h4>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1745296329/KharaMixtureAnand_y0qhld.webp'/>
                  <h4>Namkeen</h4>
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

        <div className="container my-4 py-5" data-aos="fade-up" data-aos-delay="300">
  <div className="row">
      {products.map((product)=>(
        <div className="col-md-6 col-lg-3 mb-4 " key={product.id}>
        <div className="card h-100 text-center p-3 position-relative">
          <img src={product.image} className="card-img-top h-100" alt={product.name} />
      
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
                  <button className="btn btn-outline-warning px-2 py-1"   onClick={() => decrementQuantity(product.id)}>−</button>
                  <span className="mx-2">{quantities[product.id]}</span>
                  <button className="btn btn-outline-warning px-2 py-1"   onClick={() => incrementQuantity(product.id)}>+</button>
                </div>
                <button className="btn btn-warning w-100"
                variant="warning"
                 onClick={(e) => {
                  e.preventDefault(); // Prevent link click
                  addToCart(product, quantities[product.id]);
                }}
                >Add to cart</button>
              </>
            )}
          </div>
        </div>
      </div>
      
      ))};
  </div>
</div> 

        </>
    );
};
export default Biscuits;