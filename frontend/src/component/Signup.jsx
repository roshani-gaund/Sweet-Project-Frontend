import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './sweets.css';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup({ showLogin, setShowLogin,showSignup, setShowSignup }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleSignupSubmit = async (data) => {
    const userInfo={
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }

try{
 await axios.post('http://localhost:4001/api/users/signup', userInfo)
.then((res)=>{
  if(res.data){ 
    console.log(res.data)
     toast.success('Successfully created!');
     setShowSignup(false);
  }
  localStorage.setItem('user',JSON.stringify(res.password));
}) }
catch(err){
 if(err.response){
  console.log(err);
  alert('error:' + err.response.data.message);
  
 }
};

}
const handleloginSubmit = async (data) => {
  const userInfo={
    email: data.email,
    password: data.password,
  }
  console.log("Login Data being sent:", userInfo);

try{
await axios.post('http://localhost:4001/api/users/login', userInfo)
.then((res)=>{
console.log(res.data)
console.log("Login Data being sent:", userInfo);

if(res.data){
  toast.success('Login Successful!');
  console.log("Login response:", res.data);
  setShowLogin(false);
  localStorage.setItem('user', JSON.stringify(res.data.user));
}

}) }
catch(err){
if(err.response){
console.log(err);
console.log("Login response:", err.response.data);

toast.error('error:' + err.response.data.message);
}
};

}

  
 const switchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const switchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };
  return (
    <>
      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Form onSubmit={handleSubmit(handleloginSubmit)}>
            <Form.Group controlId="loginEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email.."  {...register("email", { required: true })} /><br/>
              {errors.email && <span style={{color:'red' ,fontSize:"12px"}}>This field is required</span>}

            </Form.Group>
            <Form.Group controlId="loginPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password.."  {...register("password", { required: true })}/><br/>
              {errors.password && <span style={{color:'red' ,fontSize:"12px"}}>This field is required</span>}

            </Form.Group>
            <button type='submit' className="px-4 rounded login-btn">Login</button>
          </Form>
          <div className="text-end">
            Not Registered? <span onClick={switchToSignup} style={{ color: 'blue', cursor: 'pointer' }}>Signup</span>
          </div>  
        </Modal.Body>

      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handleSignupSubmit)}>
            <Form.Group controlId="signupName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name.."  {...register("fullname", { required: true })}/>
<br/>              {errors.fullname && <span style={{color:'red' ,fontSize:"12px"}}>This field is required</span>}
            </Form.Group>
            <Form.Group controlId="signupEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email.."  {...register("email", { required: true })}/><br/>
              {errors.email && <span style={{color:'red' ,fontSize:"12px"}}>This field is required</span>}
            </Form.Group>
            <Form.Group controlId="signupPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password.."  {...register("password", { required: true })}/><br/>
              {errors.password && <span style={{color:'red' ,fontSize:"12px"}}>This field is required</span>}
            </Form.Group>
            <Button variant="success" className="px-4 rounded" type='submit'>Signup</Button>
          </Form>
          <div className="mt-3 text-end">
            Already have an account? <span onClick={switchToLogin} style={{ color: 'blue', cursor: 'pointer' }}>Login</span>
          </div>
             
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default Signup;
// import React from 'react';