import React, { Component } from 'react';
import { Fetchdata } from '../actions/index'
import { connect } from 'react-redux'

class PostList extends Component {
  componentDidMount(){
    this.props.data()
    console.log(this.props.data)
  }
  render(){

    return(
              <div>
              Post List
              </div>
    )
  }

}
export default connect(null, { data: Fetchdata} )(PostList);
