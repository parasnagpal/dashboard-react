import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody ,Button} from "shards-react";
import axios from 'axios'

import PageTitle from "../components/common/PageTitle";


class Home extends React.Component{
   constructor(props){
     super(props)
     this.state={
       articles:{},
       array:[]
     }
   }

   row(id,title,date){
     return(
       <tr>
         <td>{id}</td>
         <td>{title}</td>
         <td>{date}</td>
         <td><Button className='btn btn-warning'/></td>
       </tr>
     )
   }

   articles(){
     let array=this.state.array
     let articles=this.state.articles
     for(let article in articles)
     {
       array[article]=articles[article]
     }
     console.log(array)
     return array.map((value)=>
      <tr>
         <td>{value.id}</td>
         <td>{value.title}</td>
         <td>{value.created_on}</td>
         <td><Button className='btn btn-warning'>Edit</Button></td>
      </tr>
     )
     
   }

   componentDidMount(){
    axios({
      method:'get',
      url:'http://cricsurf.com/api/posts/',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
      }).then(res=>{
        console.log(res) 
        this.setState({
          articles:res.data
        })
      }).catch(err=>console.log(err))
   }
    
    render(){
      return(
    <React.Fragment>
    <div>
        Hello, welcome to articles page.
    </div>
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Teams Info" subtitle="TEAMS" className="text-sm-left" />
    </Row>

    
    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Teams And status</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    Id
                  </th>
                  <th scope="col" className="border-0">
                    Title 
                  </th>
                  <th scope="col" className="border-0">
                    Created at
                  </th>
                  <th>
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.articles()}
              </tbody>
            </table>
           </CardBody>
         </Card>
       </Col>
      </Row>
    </Container>
    </React.Fragment>
      )}
}

export default Home