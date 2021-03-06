import React, {useRef} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef =useRef('');
const passwordRef = useRef('');
const navigate =useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname|| "/"


const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);

if (user){
  navigate(from ,{ replace:true});
}





const handleSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    signInWithEmailAndPassword(email,password);
}
const navigateRegister = event =>{
    navigate('/register');

}
    return ( 
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">

  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>New to Genious Car? <Link to="/register" className='text-danger' onClick={navigateRegister}>Please Register</Link></p>
<SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;