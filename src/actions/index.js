import axios from 'axios';
 export const  Fetchdata  = () => {
  async function data(){
    const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response
   }

  return {
    type:'POST_LIST',
    payload: data()

  }
}
