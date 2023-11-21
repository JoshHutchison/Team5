import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormText from 'react-bootstrap/esm/FormText';
import Header from './Header';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../Context';


function AddTicket() {

  const {ticketInfo, setTicketInfo} = useContext(DataContext)

  const handleChange = (e) => setTicketInfo({ ...ticketInfo, [e.target.id]: e.target.value })

  return (
    <>
      <Header />
      <Form className='add-form'>

        <Form.Group className="mb-3" >
          <Form.Control type="name" placeholder="Enter First Name" id='first' onChange={handleChange} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control type="name" placeholder="Enter Last Name" id='last' onChange={handleChange} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Topic" id='topic' onChange={handleChange} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control as="textarea" rows={3} placeholder='Additional Info' />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Link to='../Waitlist'
          className='btn'
          style={{
            border: '1px solid black',
            borderRadius: '6px',
            backgroundColor: 'rgb(98, 98, 98)',
            color: 'white',
            paddingRight: '50px',
            paddingLeft: '50px'
          }}
        >Confirm</Link>

      </Form>
    </>
  );
}
export default AddTicket;

