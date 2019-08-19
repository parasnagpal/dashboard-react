import { createStore } from 'redux'

function login(state=0,action){
   switch(action.type){
       case 'LOGIN': return state+1;
       default: return 0;
   }
}