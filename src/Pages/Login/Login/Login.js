import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo2.png';
import './Login.css';
import auth from './../../../firebase.init';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-25 mx-auto py-5">
      <img src={logo} alt="" className="w-75 my-5" />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100 ">
          Sign In
        </Button>
      </Form>
      <p className="text-danger btn btn-link text-decoration-none" onClick={() => navigate('/register')}>
        Don't have an account
      </p>
    </div>
  );
};

export default Login;
