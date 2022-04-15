import React from 'react';
import { Form, Button } from 'react-bootstrap';
import logo from '../../../images/logo2.png';

const Login = () => {
  return (
    <div className="w-25 mx-auto py-5">
      <img src={logo} alt="" className="w-75 my-5" />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100 ">
          Sign In
        </Button>
      </Form>
      <p className="text-danger">Don't have an account</p>
    </div>
  );
};

export default Login;
