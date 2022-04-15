import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../../images/logo2.png';

const Register = () => {
  return (
    <div className="w-25 mx-auto py-5">
      <img src={logo} alt="" className="w-75 my-5" />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="name" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100 ">
          Sign Up
        </Button>
      </Form>
      <p className="text-danger">Already have an account</p>
    </div>
  );
};

export default Register;
