import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../comman/actions';
import ProductList from '../comman/productList';
import './newPassangers.css';
import PropTypes from 'prop-types';
import { PASSANGER_START_PAGE, PASSANGER_DEFAULT_SIZE, VISIBLE_QUANTITY } from '../comman/constants';
import ReactPaginate from 'react-paginate';
// import Pagination from './pagination';

export class newPassangers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: PASSANGER_START_PAGE,
      size: PASSANGER_DEFAULT_SIZE,
      posts: VISIBLE_QUANTITY,
    };
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    // this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData() {
    const {page, size} = this.state;
    this.props.fetchData({ page, size });
  }

  handlePageClick(e){
    const {size} = this.state;
    const selectedPage = e.selected;
    const currentPage = selectedPage ;
    const newPage = currentPage;
    const newSize = size;
    this.setState({ page:newPage , size: size, currentPage:currentPage });

    console.log("currentPage", currentPage, "selected", selectedPage);

    this.props.fetchData({ page:newPage, size: newSize });
  }

  // paginate(pageNumber){
  //   const {size} =this.state;
  //   const newPage = pageNumber;
  //   const newSize = size;
  //   this.props.fetchData({ page:newPage, size: newSize });
  // }

  render() {
    const {
      user, loading, userLength,
    } = this.props;
    console.log(user);
    const {posts}=this.state;

    const pageCount = Math.ceil(userLength);

    return (
      <>
        <div className="container">
          {
            loading ? <h1>loading...</h1>
              :
               user.map((data) => 
              <ProductList 
               data={data} 
               key={data._id} 
              />)    
          }
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        {/* <Pagination
          paginate={this.paginate}
          userLength={userLength}
          posts={posts}
        /> */}
      </>
    );
  }
}

newPassangers.defaultProps = {
  user: [],
};

newPassangers.propTypes = {
  fetchData: PropTypes.func,
  user: PropTypes.array,
  userLength: PropTypes.number
}

const mapStateToProps = (state) => ({
  userLength: state.fetchDataReducer.userLength,
  loading: state.fetchDataReducer.loading,
  user: state.fetchDataReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (data) => { dispatch(actions.fetchData(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(newPassangers);
