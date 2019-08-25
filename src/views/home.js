import React from 'react';
import {Container,Row,Col,Button} from 'shards-react';


class Home extends React.Component{

 

render(){
    let state=this.props.loggedin
    let text='LOGIN'
    if(state)
      text='LOGGED IN'
    
return(
    <Container className='home-container'>
        <div>
        <Row className="d-flex justify-content-center p-4">
            <Col>
               <Button className="btn btn-warning" onClick={this.props.login}>{text}</Button>
            </Col>
        </Row>
        </div>
    </Container>
);
}
}
export default Home