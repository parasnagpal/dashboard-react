import Team from '../views/teams';

import { connect } from "react-redux";
import login from '../redux/actions'

const mapStatetoProps=(state)=>{
    return{
      loggedin:state.loggedin
    }
  }
  const mapdispatchtoProps=(dispatch)=>{
    return{
      login:()=>{
        console.log('login')
        dispatch(login())
      }
    }
  }
  
  export default connect(mapStatetoProps,mapdispatchtoProps)(Team)