const initialState={
    loggedin:false
}


const login=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN': return {
          loggedin:true  
        };
        default: return {
            loggedin:false
        };
    }
 }

 export default login