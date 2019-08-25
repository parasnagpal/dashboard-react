import React from 'react';
import {Form,FormInput,FormGroup,Button} from 'shards-react'

import Editor from '../components/add-new-post/Editor' 

import './css/bootstrap.min.css'
class Home extends React.Component{

render(){
  if(this.props.loggedin)
  return(
    <div className=' m-4 p-3'>
    <Form>
        <FormGroup>
            <label>Title</label>
            <FormInput type='text' placeholder='title'></FormInput>
        </FormGroup>
        <FormGroup>
            <label>Content</label>
            <Editor/>
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
  else return <>Not authorized.</>

}
}
 export default Home