import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useCart } from '../../context/CartContext';
import axios from 'axios';


const ProductDetails = () => {
  
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:4001/api/category/dryfruits/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Product not found:', err);
        setLoading(false);
      });
  }, [id]);
  useEffect(() => {
    axios.get(`http://localhost:4001/api/category/gifting/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Product not found:', err);
        setLoading(false);
      });
  }, [id]);
  useEffect(() => {
    axios.get(`http://localhost:4001/api/category/sweet/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Product not found:', err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:4001/api/category/snack/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Product not found:', err);
        setLoading(false);
      });
  }, [id]);

 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product Not Found</h2>;

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (<>   
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
    </>

  );
};

export default ProductDetails;
