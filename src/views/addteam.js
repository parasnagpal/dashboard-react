import React from 'react';
import {
    Container,
    Row,
    
    Button
  } from "shards-react";
  
import axios from 'axios'  
import './css/bootstrap.min.css'




class Home extends React.Component{
    constructor(props){
       super(props)
       this.state={
           name:null,
           key:null,
           status:null
       }
       this.updatekey=this.updatekey.bind(this)
       this.updatname=this.updatename.bind(this)
       this.updatestatus=this.updatestatus.bind(this)
    }

      updatename(e){
        this.setState({
            name:e.target.value
        },()=>{
            console.log(this.state)
        })
     }
     
      updatekey(e){
         this.setState({
           key:e.target.value
         })
      }
     
      updatestatus(e){
         this.setState({
             status:e.target.value
         })
      }

      addteam(){
        axios({
            method:'post',
            url:'http://cricsurf.com/api/team/',
            'Content-Type': 'application/json',
            formData:{
                name:'abc',
                status:0
            }
            }).then((res)=>console.log(res))
            .catch(err=>console.log(err))
     }
    render(){
        return(
            <div className='d-flex justify-content-center m-4 p-4'>
            <Container className="main-content-container px-4 pb-4">
                <Row className='my-3'>
                    <div className='col'>Name</div>
                    <input type='text' className='col-5 form-control' onChange={this.updatename.bind(this)} name='name' />
                </Row>
                <Row className='my-3'>
                    <div className='col'>Key</div>
                    <input type='text' className='col-5 form-control'onChange={this.updatekey.bind(this)} name='key' />
                </Row>
                <Row className='my-3'>
                    <div className='col'>Status</div>
                    <input type='text' className='col-5 form-control' onChange={this.updatestatus.bind(this)} name='status' />
                </Row>
                <Row>
                    <div className='col'></div>
                    <Button size="sm" theme="primary" className="mb-2 mr-1" onClick={this.addteam} >Add</Button>
                    <div className='col'></div>
                </Row>
            </Container>
            </div>
        );
    }
    
};

export default Home