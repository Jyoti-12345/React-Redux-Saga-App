import {
  SEND_REQUEST,
  SEND_REQUEST_SUCESS,
  SEND_REQUEST_FAILURE,
  LOAD_MORE_DETAILS,
  LOAD_MORE_DETAILS_SUCCESS,
  LOAD_MORE_DETAILS_ERROR,
} from '../comman/constants';

export const fetchData = (data) => ({
    type: SEND_REQUEST,
    payload: data,
});
export const fetchDataSuccess = (data) => ({
  type: SEND_REQUEST_SUCESS,
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: SEND_REQUEST_FAILURE,
  payload: {},
  error,
});
export const fetchLoadMoreData = (data) => ({
    type: LOAD_MORE_DETAILS,
    payload: data,
});
export const fetchLoadMoreDataSuccess = (data) => ({
  type: LOAD_MORE_DETAILS_SUCCESS,
  payload: data,
});
export const fetchLoadMoreDataError = (error) => ({
  type: LOAD_MORE_DETAILS_ERROR,
  payload: {},
  error,
});
