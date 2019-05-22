import { combineReducers } from 'redux';
import FetchData from '../actions'

const apiReducer =(oldlist, action)=>{
  if(action.type==='CREATE API'){
    return action.payload
  }
  return null
}

 const dataapi = combineReducers({
  data:apiReducer
})
export default dataapi;
