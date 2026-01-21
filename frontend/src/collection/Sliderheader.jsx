import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import './collection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

const Sliderheader= () => {
  return (
    <Swiper
      // install Swiper modules
      loop={true}
      modules={[Navigation,EffectFade, Pagination,Autoplay]}
      effect={"fade"}
      spaceBetween={50}
      slidesPerView={1 }
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay:3000,
        disableOnInteraction:false
      }}
    className='ProductDetails '
    >
      <SwiperSlide>
        <div className="item rounded-md overflow-hidden swiper">
        <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_fill,w_800,h_600,ar_4:3/v1745476742/ASSORTED_SWEETS_giftboxes_mtp8aa.png'
         className="w-full h-full object-cover"/>
         <div className="info">
          <h1>Shiv Shakti favourite collection</h1>
          <Link to="/Collection" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className='color'>Try out our favourite collection of shiv shakti sweet shop with love and joy</h3>
          <button>Shop Now</button>
          </Link>
         </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
       <div className="item  rounded-md overflow-hidden swiper">
       <img src='https://res.cloudinary.com/dvo3apbag/image/upload/c_pad,h_600/v1745476866/Asha001_iokc4p.png'  className="w-full h-full object-cover"/>
       <div className="info">
          <h1 className='head-craft'>Crafted With Love</h1>
          <h3> shop Our Gift Boxes which make with love<br/> and ,timeless tradition </h3>
          <Link to="/Gifting" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button>Shop Gift Box</button>
          </Link>
         </div>
       </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Sliderheader;