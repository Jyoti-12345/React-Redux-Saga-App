import {types} from './types'

export function fetchData(data){
    return{
        type: types.SEND_REQUEST,
        payload:data
    }
}
export const fetchDataSuccess = (data)=>{
        return{
            type : types.SEND_REQUEST_SUCESS,
            payload: data
        };
}
export const fetchDataFailure = (error)=>{
    return{
        type: types.SEND_REQUEST_FAILURE,
        payload:{},
        error: error
    }
}
export function fetchLoadMoreData(data){
    return{
        type: types.LOAD_MORE_DETAILS,
        payload:data
    }
}
export const fetchLoadMoreDataSuccess = (data)=>{
        return{
            type : types.LOAD_MORE_DETAILS_SUCCESS,
            payload: data
        };
}
export const fetchLoadMoreDataError = (error)=>{
    return{
        type: types.LOAD_MORE_DETAILS_ERROR,
        payload:{},
        error: error
    }
}