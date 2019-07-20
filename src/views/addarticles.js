import React from 'react';
import {Form,FormInput,FormGroup,Button} from 'shards-react'

import '../assets/css/bootstrap.min.css'
const Home=()=>(
    <div className='d-flex justify-content-start m-3'>
    <Form>
        <FormGroup>
            <label>Title</label>
            <FormInput type='text' placeholder='title'></FormInput>
        </FormGroup>
        <FormGroup>
            <label>Content</label>
            <FormInput type='text' placeholder='Place your content here'></FormInput>
        </FormGroup>
        <FormGroup>
            <label>Image</label>
            <FormInput type='file'placeholder='attach image'></FormInput>
        </FormGroup>
        <FormGroup>
            <label>Tags</label>
            <FormInput type='text'placeholder='#'></FormInput>
        </FormGroup>
        <Button className='btn-warning'>Publish</Button>
    </Form>
    </div>
);

export default Home