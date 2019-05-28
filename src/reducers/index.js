import { combineReducers } from 'redux';

const FetchdataReducer =(oldlist=[], action)=>{
  if(action.type==='POST_LIST'){
    return action.payload
  }
  return oldlist
}

 export default combineReducers({
  data: FetchdataReducer
})
 
