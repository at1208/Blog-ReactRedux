 import axios from 'axios';

 export const Fetchdata = () => {
   return async function(dispatch){
     const response = await axios.get('')
     dispatch({ type: 'POST_LIST', payload:response })
   }
 }
