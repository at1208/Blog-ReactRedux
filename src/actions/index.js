import axios from 'axios';
 export const  Fetchdata  =  async () => {
 const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return {
    type:'POST_LIST',
    payload:  response
  }

}
