
import React from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useState } from 'react';

import { useCart } from '../../context/CartContext.jsx';
import { Button, Card, Table, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './sweets.css';

const CartPage = () => {
  //cart icon validate
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();
  const [showSignupModal, setShowSignupModal] = useState(!isLoggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    login({ email });
    setShowSignupModal(false);
  };
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const tax = subtotal * 0.05; // 5% tax
  const shipping = subtotal > 0 ? 50 : 0; // ₹50 shipping
  const grandTotal = subtotal + tax + shipping;
  
  return (
    <div className="container mt-5 cart-page text-center">
      <h2 className="mb-4">🛒 Shopping Cart</h2>

              {/* Signup Modal */}
              <Modal show={showSignupModal} onHide={() => { }} backdrop="static" keyboard={false} centered>
                <Modal.Header>
                  <Modal.Title> Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      /> 
                      <Form.Label>password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password here.."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="w-100 cart-page-btn">Continue</Button>
              </Form>
        </Modal.Body>
         </Modal>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  <Table bordered hover responsive className="text-center">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody className='p-5'>
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td className="d-flex align-items-center">
                            <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }} />
                            <div>
                              <strong className='p-5'>{item.name}</strong>
                              <p className="mb-1 p-3">Weight: {item.weight}</p>
                              <Button variant="link" onClick={() => removeFromCart(item.id)} style={{ padding: "0px", color: "maroon" }}>
                                Remove
                              </Button>
                            </div>
                          </td>

                          <td className='p-5'>₹{item.price}</td>

                          <td>
                            <div className="d-flex p-5 justify-content-center align-items-center">
                              <Button variant="light" onClick={() => decreaseQuantity(item.id)}>-</Button>
                              <span className="mx-2">{item.quantity}</span>
                              <Button variant="light" onClick={() => increaseQuantity(item.id)}>+</Button>
                            </div>
                          </td>

                          <td className='p-5'>₹{item.price * item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <Card className="p-4 shadow mt-5">
                    <h3 className="mb-4">🧾 Bill Summary</h3>
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td>₹{subtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td>Tax(5% GST):</td>
                          <td>₹{tax.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td>Shipping Charges</td>
                          <td>₹{shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <th>Grand Total</th>
                          <th>₹{grandTotal.toFixed(2)}</th>
                        </tr>
                      </tbody>
                    </Table>

                    <button className="cart-page-btn mt-3">Proceed to Checkout</button>
                  </Card>

                </>
              )}
            </div>

            );
};

            export default CartPage;
