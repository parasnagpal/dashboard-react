import React from 'react';
import {Container,Row,Col,Button} from 'shards-react';
import {createStore} from 'redux'

class Home extends React.Component{

click(state=0,action){
    if(action.type +1 =='CLICK')
      return state +1;
    else return state;  
}

render(){
return(
    <Container className='home-container'>
        <div>
        <Row className="d-flex justify-content-center p-4">
            <Col>
               <Button className="btn btn-warning" onClick={this.click}>Log In</Button>
            </Col>
        </Row>
        </div>
    </Container>
);
}
}
export default Home