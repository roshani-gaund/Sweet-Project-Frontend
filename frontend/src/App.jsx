import React from 'react'
import Header from './headers/header'
import Footer from './footer/footer';
import {Route, Router, Routes } from 'react-router-dom';
import Home from './component/home';
import Snacks from './component/Snacks';
import Contact from './component/Contact';
import Gifting from './component/Gifting';
import DryFruits from './component/DryFruits';
import AboutUs from './component/AboutUs';
import Sweets from './component/Sweets';
import Navbar from './headers/NavBar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Biscuits from './component/Biscuits';
import Collection from './collection/Collection';
import ProductDetail from './collection/ProductDetails';
import BestDetail from './component/BestDetail.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from 'react';
import CartPage from './component/CartPage.jsx';
import './App.css';

import SignUp from './component/Signup';
import  { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/AuthContext';
import PrivateRoute from '../context/PrivateRoute';

const App = () => {
  //give true value for bydefault coming form
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (<>
  <AuthProvider>
   <Header/>

{/* // render loginpage  */}
   <Navbar onUserClick={() => setShowLogin(true)} />
   
      <SignUp
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        showSignup={showSignup}
        setShowSignup={setShowSignup}
      />
        


          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/sweets' element={<Sweets />} />
            <Route path='/snacks' element={<Snacks />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gifting' element={<Gifting />} />
            <Route path='/dryfruits' element={<DryFruits />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Biscuits' element={<Biscuits />} />
            <Route path='/Collection' element={<Collection />} />
            <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />
            <Route path="/products/:id" exact={true} element={<ProductDetail />} />
            <Route path="/product/:id" exact={true} element={<BestDetail />} />
           
          </Routes>
        <Footer />
        </AuthProvider>
          <Toaster/>
        </>
   
      )};
  
export default App;
