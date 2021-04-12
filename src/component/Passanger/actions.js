import {
  SEND_REQUEST,
  SEND_REQUEST_SUCESS,
  SEND_REQUEST_FAILURE,
  LOAD_MORE_DETAILS,
  LOAD_MORE_DETAILS_SUCCESS,
  LOAD_MORE_DETAILS_ERROR,
} from './constants';

export function fetchData(data) {
  return {
    type: SEND_REQUEST,
    payload: data,
  };
}
export const fetchDataSuccess = (data) => ({
  type: SEND_REQUEST_SUCESS,
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: SEND_REQUEST_FAILURE,
  payload: {},
  error,
});
export function fetchLoadMoreData(data) {
  return {
    type: LOAD_MORE_DETAILS,
    payload: data,
  };
}
export const fetchLoadMoreDataSuccess = (data) => ({
  type: LOAD_MORE_DETAILS_SUCCESS,
  payload: data,
});
export const fetchLoadMoreDataError = (error) => ({
  type: LOAD_MORE_DETAILS_ERROR,
  payload: {},
  error,
});
