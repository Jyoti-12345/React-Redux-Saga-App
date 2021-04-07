import {types} from '../types';
import { combineReducers} from 'redux';

const initalState ={
    loading:false,
    user:[],
    error:{},
    userLength:null,
    loadingMoreUser: false, 
    errorMoreStores: false            
}

export const fetchDataReducer =(state = initalState, action)=>{

    switch(action.type){
        case types.SEND_REQUEST:
            return{
                ...state,
                loading:true,
                data: state.data,
                userLength: null, 
                loadingMoreUser: false, 
                errorMoreStores: false            
            }
            // return Object.assign({}, state, { isFetching: true, error: false, data: state.data });
        case types.SEND_REQUEST_SUCESS:
            return{
                ...state,
                loading:false,
                user: action.payload.data,
                userLength: action.payload.totalPages,
                error: {},
                loadingMoreUser: false, 
                errorMoreStores: false            
            }
            // return Object.assign({}, state, { isFetching: false, error: false, user: action.payload });
        case types.SEND_REQUEST_FAILURE:
            return{
                ...state,
                loading:false,
                user:[],
                error: action.error,
                loadingMoreUser: false, 
                errorMoreStores: false            
            }
            // return Object.assign({}, state, { isFetching: false, error: true, user: [] });
        case types.LOAD_MORE_DETAILS:
            return{
                ...state,
                loading: false, 
                data: state.data,
                error: false,
                userLength: state.userLength,
                loadingMoreUser: true, 
                errorMoreStores: false            
            }
            // return Object.assign({}, state, { isFetching: false, error: false, data: state.data, totalStoresLength: state.totalStoresLength, isFetchingMoreStores: true, errorMoreStores: false });
        case types.LOAD_MORE_DETAILS_SUCCESS:
            const newUserData = [ ...state.user,...action.payload.data];
            return{
                ...state,
                loading: false, 
                error: false,
                user: newUserData, 
                userLength: action.payload.totalPages,
                loadingMoreUser: false, 
                errorMoreStores: {}
            }
            // const newStoreData = [...state.data, ...action.data.stores];
            // return Object.assign({}, state, { isFetching: false, error: false, data: newStoreData, totalStoresLength: action.data.totalStores, isFetchingMoreStores: false, errorMoreStores: false });
        case types.LOAD_MORE_DETAILS_ERROR:
                return{
                    ...state,
                    loading: false, 
                    error: false, 
                    data: state.data, 
                    userLength: state.userLength,
                    loadingMoreUser: false, 
                    errorMoreStores: action.error
                }
            // return Object.assign({}, state, { isFetching: false, error: false, data: state.data, totalStoresLength: state.totalStoresLength, isFetchingMoreStores: false, errorMoreStores: true });

        default: return{
            state
        }
    }
}

export default combineReducers({
  fetchDataReducer
});