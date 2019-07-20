import React from 'react';
import {
    Container,
    Row,
    
    Button
  } from "shards-react";
  
import '../assets/css/bootstrap.min.css'

  

const Home=()=>(
    <div className='d-flex justify-content-center m-4 p-4'>
    <Container className="main-content-container px-4 pb-4">
        <Row className='my-3'>
            <div className='col'>Name</div>
            <input type='text' className='col-5 form-control'/>
        </Row>
        <Row className='my-3'>
            <div className='col'>Key</div>
            <input type='text' className='col-5 form-control'/>
        </Row>
        <Row className='my-3'>
            <div className='col'>Status</div>
            <input type='text' className='col-5 form-control'/>
        </Row>
        <Row>
            <div className='col'></div>
            <Button size="sm" theme="primary" className="mb-2 mr-1">Add</Button>
            <div className='col'></div>
        </Row>
    </Container>
    </div>
);

export default Home