import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <>
      <Form className='my-4'>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username'
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Password'
            name='username'
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Confirm password'
            name='username'
            required
          />
        </Form.Group>
        <Button variant='success' type='submit'>
          Register
        </Button>
      </Form>
      <p>
        {' '}
        Already have an account
        <Link to='/register' />
        <Button variant='info' size='sm' className='ml-2'>
          Login
        </Button>
      </p>
    </>
  );
};

export default RegisterForm;
