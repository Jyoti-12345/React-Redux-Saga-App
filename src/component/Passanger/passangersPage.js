import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './passangersPage.css';
import {
  PASSANGER_DEFAULT_SIZE,
  PASSANGER_START_PAGE,
  FETCH_PAGE,
  VISIBLE_QUANTITY,
} from './constants';
import Button from './comman/button';
import ProductList from './comman/productList';
import PropTypes from 'prop-types';

export class passangersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: PASSANGER_START_PAGE,
      size: PASSANGER_DEFAULT_SIZE,
      visible: VISIBLE_QUANTITY,
    };
    this.handleFetchData = this.handleFetchData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  }

  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData() {
    const { page, size } = this.state;
    this.props.fetchData({ page, size });
  }

  loadMoreData() {
    const { page, size } = this.state;
    const newPage = page + FETCH_PAGE;
    const newSize = size;
    const { visible } = this.state;
    this.setState({ visible: visible + VISIBLE_QUANTITY, page: newPage, size: newSize });

    this.props.fetchLoadMoreData({ page: newPage, size: newSize, loadMoreDatas: true });
  }

  render() {
    const {
      user, loading, userLength, loadingMoreUser,
    } = this.props;
    const { visible, page } = this.state;
    return (
      <>
        <h1>
          Total Passangers
          {visible}
        </h1>
        <br />
        <div className="container">
          {
            loading ? <h1>loading...</h1>
              : user.slice(0, visible).map((data) => <ProductList data={data} key={data._id} />)
          }
          {
            loadingMoreUser ? <h1>loading...</h1>
              : (page < userLength)
                ? <Button loadMoreData={this.loadMoreData} /> : null
          }
        </div>
      </>
    );
  }
}

passangersPage.defaultProps = {
  user: [],
};

passangersPage.propTypes = {
  fetchData: PropTypes.func,
  fetchLoadMoreData: PropTypes.func,
  user: PropTypes.array,
  userLength: PropTypes.number
}

const mapStateToProps = (state) => ({
  userLength: state.fetchDataReducer.userLength,
  loading: state.fetchDataReducer.loading,
  user: state.fetchDataReducer.user,
  loadingMoreUser: state.fetchDataReducer.loadingMoreUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (data) => { dispatch(actions.fetchData(data)); },
  fetchLoadMoreData: (data) => { dispatch(actions.fetchLoadMoreData(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(passangersPage);
