
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import BestSeller from './BestSeller';
import { Link } from 'react-router-dom';
import Sliderheader from '../collection/Sliderheader';
import axios from 'axios';
import { useState,useEffect } from 'react';
const home = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(' https://sweet-shop-backend-vm7r.onrender.com/api/products',{
      withCredentials:true
    })
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
  
  return (
    <>
     <div  data-aos="fade-up" data-aos-delay="200">
      <Sliderheader/>
      </div>    

      <div class="container-flex" data-aos="fade-up" data-aos-delay="300">
        <div className="row">
          <div className="col-lg-12 heading ">
            <h2>Excellence in Every Bite of Our Sweets, Snacks, and Treats</h2>
          </div>
          <div className="col-md-6 offset-md-3">
            <p className='sub-heading centered-text'>With over three decades of expertise in the art of crafting heritage sweets, Anand Sweets has
              a symbol of quality and tradition,dedicated to one singular goal - a commitment to bringing the
              authentic taste of Royal India to your homes.
            </p>
          </div>
        </div>

        <div className='container' data-aos="fade-up" data-aos-delay="200">
          <p className='range'>
            Shop Our Range
          </p>
          <div className="row" id='shopRange'>
            <div className="col-md-3">
            <Link to="/Gifting" style={{ textDecoration: 'none', color: 'inherit' }}>
           <img src='s.webp' />
              <h3 id='imgtag'>Sweets & Gifting</h3>
              </Link>
            </div>
            <div className="col-md-3">
            <Link to="/Biscuits" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src='b.webp' />
              <h3 id='imgtag'>Biscuits</h3>
             </Link>
            </div>
            <div className="col-md-3">
            <Link to="/sweets" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src='Sweets.webp' />
              <h3 id='imgtag'>Sweets</h3>
              </Link>
            </div>
            <div className="col-md-3">
            <Link to="/Snacks" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src='Snacks.webp' />
              <h3 id='imgtag'>Snacks</h3>
              </Link> 
            </div>

          </div>
        </div>
      </div>

      <div className="container-" id='cont' data-aos="fade-up" data-aos-delay="200">
        <div className="row" id='cont-row'>
          <div className="col-md-3">

            <i class="fa-solid fa-map-marker-alt"></i><br /> Loved By India
            <p> Loved By 5 Lakh + customers</p>
          </div>
          <div className="col-md-3">
            <i className="fa-solid fa-hand-sparkles"></i><br /> Made with Loved
            <p> Every Piece is Made With Love</p>
          </div>
          <div className="col-md-3">
            <i className="fa-solid fa-clock"></i><br />  Ships in 1-2 Days
            <p>Write to us to expedite your order</p>
          </div>
          <div className="col-md-3">
            <i className="fa-solid fa-flask"></i><br />  No Preservatives
            <p>Pure test, naturally fresh</p>
          </div>
        </div>
      </div>

     <BestSeller/>

      <div className="container"  data-aos="fade-up" data-aos-delay="300">
        <div className="row" id='crafted'>
          <div className="col-md-12">
            <h2>The essence Of Celebration Crafted To Perfection</h2>
            <div className='col-md-6 offset-md-3'>Exquisitely packaged to benefit every ocassion,we celebrated your pride,happiness and</div>
            <div className='col-md-4 offset-md-4'> relationship with absolute grandeur.</div>
          </div>
          <div className="row" id='Crafted-img'>
            <div className="col-md-4" >
              <img src='ass.webp'  data-aos="slide-right" data-aos-delay="300"/>
              <h3 className='image-content' data-aos="zoom-in" data-aos-delay="400">Assorted Gift Boxes</h3>
              <p className='centered-text'>Choose from exquisite Hand-picked premium Gifting collection</p>
              <Link to="/Collection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button className='button'>View Collection</button></Link>
            </div>
            <div className="col-md-4">
              <img src='Dry_FRuits_Giftboxes.webp' data-aos="fade-up" data-aos-delay="200" />
              <h3 className='image-content' data-aos="zoom-in" data-aos-delay="400">Dry Fruits Gift Boxes</h3>
              <p className='centered-text'>Sumptuous assortment of dry fruits & nuts packaged with a touch of Royalty</p>
              <Link to="/Collection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button className='button'>View Collection</button></Link>
            </div>
            <div className="col-md-4">
              <img src='gg.webp'  data-aos="slide-left" data-aos-delay="300"/>
              <h3 className='image-content' data-aos="zoom-in" data-aos-delay="400">Souvenir Gift Boxes</h3>
              <p className='centered-text'>This collection is our ode to the beauty and culture of India- each box has a story to tell
              </p>
              <Link to="/Collection" style={{ textDecoration: 'none', color: 'inherit' }}>
              <button className='button'>View Collection</button></Link>

            </div>
          </div>
        </div>
      </div>

    <div className="container-flex" id='News-component' data-aos="fade-up" data-aos-delay="300">
      <h1>In The News</h1>
      <p> The Essence of Shiv Shakti Capture</p>
      <div className="row">
        <div className="col-md-12 col-xs-12 news-img">
          <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,w_360,h_240/v1744004249/1280px-Hindustan_Times_logo.svg_vte9qn.png' className='col-xs-2'></img>
       <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,w_200,h_80/v1744004734/1280px-VOGUE_LOGO.svg_bmcy4r.png' className='col-xs-2'/>
       <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,w_300,h_200/v1744004923/bazar-logo-png-transparent_kwwf6k.png'className='col-xs-2'/>
       <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,w_200,h_100/v1744005145/1200px-FORTUNE-LOGO-2016_yvgwc6.png'className='col-xs-2'/>
        </div>
      </div>
    </div>


      <div className="container" data-aos="fade-up" data-aos-delay="200">
        <div className="row" id='posture'>
          <div className="col-lg-7 col-xs-12  posture-pic">
            <img src='guilt-free.webp' data-aos="slide-right" data-aos-delay="400" />
          </div>
          <div className="col-md-5" id='posture-cont'>
            <h1>Guilt Free Sweets</h1>
            <p>Indulge guilt-free in our wide range of sugar-
              free treats, bursting with flavor and
              healthfulness</p>
              <Link to="/Sweets" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button> Shop Guilt Free Sweets</button></Link>
          </div>
        </div>
      </div>
      {/* our specailty */}
      <div className="container-flex speciality" data-aos="fade-up" data-aos-delay="300">
        <div className="row">
          <div className="col-md-4" id='special'>
            <h2>Our Speciality</h2>
            <p>handmade sweet confections that always<br /> get a little more love!</p>
           <a href='Collection'>See All</a>
           
          </div>
          <div className="col-md-7 special-img">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743501620/AJMER_KALAKAND_z3iusp.webp' data-aos="slide-right" data-aos-delay="400"></img>
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743501637/Motichoor_Laddu_ynzotd.webp' data-aos="fade-up" data-aos-delay="400" />
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743501651/Mysore_Pak_0e3d7d6a-2f73-4c9c-8db3-1955e46d0388_lkiik4.webp' data-aos="slide-left" data-aos-delay="400" />
          </div>
        </div>
      </div>

      <div className="container"  data-aos="fade-up" data-aos-delay="300">
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
      <div className="container-flex" data-aos="fade-up" data-aos-delay="200">
        <div className="row snacks">
          <div className="col-md-12 text-center py-5">
      <h1>Shop Our Snacks Range</h1>
          </div>
          <div className='image-text-wrapper'>
          <div className="col-md-2  snacks-img">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866635/South_Indian_Special-1_jjcfuq.webp' data-aos="fade-up" data-aos-delay="500"/>
            <button><h4>South Indian Special</h4></button>
            </div>
            <div className="col-md-2 snacks-img">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866807/Indian_BISCOTTIS_2_xxsghk.webp' data-aos="fade-up" data-aos-delay="500"/>
            <button><h4>Indian Biscuits</h4></button>
            </div>
            <div className="col-md-2 snacks-img">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866863/bakery_doabdu.webp' data-aos="fade-up" data-aos-delay="500"/>
            <button><h4>Indian Bakery</h4></button>
            </div>
            <div className="col-md-2 snacks-img">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866653/North_Indian_Special_2_n5vdj1.webp'  data-aos="fade-up" data-aos-delay="400"/>
            <button><h4>North Indian Special</h4></button>
            </div>
            <div className="col-md-2 snacks-img">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743866636/Tea_Time_ny4siz.webp' data-aos="fade-up" data-aos-delay="500"/>
            <button><h4>Tea Time Snacks</h4></button>

          </div> 
          </div>
        </div>
      </div>

      <div className="container"  data-aos="fade-up" data-aos-delay="300">
        <div className="row">
          <div className="col-6 story-img py-5">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743854973/s_ng2z4p.webp' data-aos="slide-right" data-aos-delay="400"/>
          </div>
          <div className="col-6 Story">
            <h1>Our Story</h1>
            <p>Shiv Shakti success stems from its blend of tradition, innovation, and unwavering quality. Its dynamism is fueled by a 
              continuous effort to revamp products and packaging to align with the evolving demographics of India.
<br/>
<br/>
Shiv Shakti is dedicated to authenticity, sourcing ingredients like saffron from Kashmir for Malpua and paneer from Delhi for savory delights, 
proving that great taste knows no boundaries.</p>
          </div>
        </div>
      </div>

      {/* latest blog */}
      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <div className="row">
          <div className="col-md-12 Blogs">
            <h2>Latest Blogs</h2>
          </div>
          <div className="col-md-4 Blogs-col">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1745307274/Mango_1_3722c48b-f1be-4d83-ace0-7c3effebf927_vltxyt.webp' 
            data-aos="slide-right" data-aos-delay="300"></img>
            <p>March 25, 2025</p>
            <h4>For The Love Of Mango</h4>
            <button>Read more</button>
          </div>
          <div className="col-md-4 Blogs-col">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743319218/b_w3gibe.webp' data-aos="zoom-in" data-aos-delay="400" />
            <p>February 11, 2025</p>
            <h4>Old Delhi Mohabbat ka Sarbat</h4>
            <button>Read more</button>
          </div>
          <div className="col-md-4 Blogs-col">
            <img src='6.webp' data-aos="slide-left" data-aos-delay="400" />
            <p>January01, 2025</p>
            <h4>Zepto Want to make delivery</h4>
            <button>Read more</button>
          </div>
          <div className="col-md-4 Blogs-col">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743319235/c_l1ft1r.webp' data-aos="slide-right" data-aos-delay="500" />
            <p>December25,2024</p>
            <h4>The Timeless Art of India</h4>
            <button>Read more</button>
          </div>
          <div className="col-md-4 Blogs-col">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743402666/d_bcyflr.webp' data-aos="zoom-in" data-aos-delay="500" />
            <p>November14, 2024</p>
            <h4>Children day Special Sweets</h4>
            <button>Read more</button>
          </div>
          <div className="col-md-4 Blogs-col">
            <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743402684/e_ewhswu.jpg' data-aos="slide-left" data-aos-delay="500" />
            <p>september05, 2024</p>
            <h4>Teacher Day Specials Cakes</h4>
            <button>Read more</button>
          </div>
        </div>
      </div>
      <div className="container logo-footer" data-aos="fade-up" data-aos-delay="300">
        <div className="row">
          <div className="col-12">
            <h1>We are Available On</h1>
          </div>
          <div className="col-md-12 offset-md-1 logo-img">
            <img  src='https://res.cloudinary.com/dvo3apbag/image/upload/t_new/zepto-logo-black-65c0c32a434ec42578a5f41b369ed2a646fc8c941bd014d0471b9691f5d40179_n1qjmx' />
           <img src='https://res.cloudinary.com/dvo3apbag/image/upload/v1743511772/Swiggy-Black-Logo-Vector.svg-_u9exkt.png'/>
           <img src='https://res.cloudinary.com/dvo3apbag/image/upload/t_new/amazon-logo-black-transparent_fymioy'/>
           <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_fit,h_700,w_500/zomato_hiatxk'></img>
            </div>
          </div>
        </div>
      </>
  );
};




export default home;