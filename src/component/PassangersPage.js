import React, { Component } from 'react';

import {connect} from 'react-redux';
import *as actions from "./actions";
import "./PassangersPage.css";
import {PASSANGER_DEFAULT_SIZE, PASSANGER_START_PAGE, FETCH_PAGE} from './types';
 

export class PassangersPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       page: PASSANGER_START_PAGE,
       size: PASSANGER_DEFAULT_SIZE,
       visible: 40
    }
    this.handleFetchData =this.handleFetchData.bind(this);
    this.loadMoreData =this.loadMoreData.bind(this);
  }

  componentDidMount(){
   this.handleFetchData();
 }

  handleFetchData(){
    const {page, size } = this.state;
    // this.setState({page: page + 1, size: size});
    console.log("state", page, size);
    this.props.fnfetchData({ page, size });
  }
  
  loadMoreData(){
    const {page, size } = this.state;
    const newPage = page + FETCH_PAGE ;
    const newSize = size;
    console.log("new", newPage,newSize);
    const {visible} = this.state;
    this.setState({visible: visible +40, page: newPage, size: newSize})

    this.props.fetchLoadMoreData({ page: newPage, size: newSize, loadMoreDatas:true });
  }

  PassangersData = (x) =>{
    return(
    <div className="items" key= {x._id}>
     <h3>Passenger Name: {x.name}</h3><br></br>
        <ul>
          <p>Airline Name: {x.airline.name} </p> <br></br>
          <p>Airline Country: {x.airline.country} </p><br></br>
          <p>Airline Logo :</p><br></br>
          {<img src={x.airline.logo} alt=""/>}
        </ul> 
    </div>);
  }

  render() {
    const {user, loading, userLength, loadingMoreUser} = this.props;
    const {visible, page} = this.state;
    console.log("userLength", userLength);
    console.log("user", user, user.length);
    return (
      <>
      <h1>Passangers {this.state.visible}</h1><br></br>
      <div className= "container"> 
        { 
          loadingMoreUser || loading ? <h1>loading...</h1> :
          user.slice(0, visible).map(this.PassangersData)  
        }
        { 
         loadingMoreUser ? null :
         (page < userLength)? 
          <button
          onClick={this.loadMoreData}
          >Load More   {" "}
          { page> 0 ? page: null }
          </button> 
          : null
        }
      </div>
      </>
    )
  }
}

PassangersPage.defaultProps = {
 user: [],
}; 

const mapStateToProps=(state)=>{
  return{
    userLength: state.fetchDataReducer.userLength,
    loading: state.fetchDataReducer.loading,
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error,
    loadingMoreUser: state.fetchDataReducer.loadingMoreUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fnfetchData:(data)=>{dispatch(actions.fetchData(data))},
    fetchLoadMoreData:(data)=>{dispatch(actions.fetchLoadMoreData(data))}
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(PassangersPage)