import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import axios from 'axios'

import PageTitle from "../components/common/PageTitle";



class Home extends React.Component{ 
  
  constructor(props){
    super(props)
    this.state={
      teams:[]
    }
    this.fetchCards=this.fetchCards.bind(this)
  }

  componentDidMount(){
    //fetch teams
    axios({
      method:'get',
      url:'http://cricsurf.com/api/teams/',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
      }).then(res=>{console.log(res)  
        this.setState({
          teams:res.data
        })
        
      }).catch(err=>console.log(err))
  }
  
  fetchCards(){
    let teams=this.state.teams
    return teams.map((value)=>
      <tr>
        <td>{value.key}</td>
        <td>{value.name}</td>
        <td>{value.status}</td>
      </tr>
    )
     
    
  }

  
  render(){
  return(
    <React.Fragment>
    <div>
        Hello, welcome to teams page.
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
                    Key
                  </th>
                  <th scope="col" className="border-0">
                    Name
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                {this.fetchCards()}
                
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
  </React.Fragment>
);}
}

export default Home