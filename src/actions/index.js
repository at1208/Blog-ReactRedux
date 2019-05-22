import axios from 'axios';


const Fetchdata  = () => {

  const Data = async (dispatch, getState) => {
  const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  return response }

  return {
    type:'POST_LIST',
    payload: Data
  }
}
