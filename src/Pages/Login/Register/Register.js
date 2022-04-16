import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    createUserWithEmailAndPassword(email, password);
    navigate('/home');
  };

  return (
    <div className="w-25 mx-auto py-5">
      <img src={logo} alt="" className="w-75 my-5" />
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="name" name="name" placeholder="Enter Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" required />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100 ">
          Sign Up
        </Button>
      </Form>
      <p className="text-danger btn btn-link text-decoration-none" onClick={() => navigate('/login')}>
        Already have an account
      </p>
    </div>
  );
};

export default Register;
