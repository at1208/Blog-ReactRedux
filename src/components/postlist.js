import React from 'react';
import { Fetchdata } from '../actions/index'
import { connect } from 'react-redux'

const PostList = (props) => {
  console.log(props)
  return <div>
         Post List

         </div>
}
export default connect(null,{ data: Fetchdata} )(PostList);
