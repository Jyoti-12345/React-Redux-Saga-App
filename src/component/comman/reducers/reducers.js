import {
    SEND_REQUEST,
    SEND_REQUEST_SUCESS,
    SEND_REQUEST_FAILURE,
    LOAD_MORE_DETAILS,
    LOAD_MORE_DETAILS_SUCCESS,
    LOAD_MORE_DETAILS_ERROR,
} from '../constants';
import { combineReducers } from 'redux';

const initalState = {
    loading: false,
    user: [],
    error: false,
    userLength: null,
    loadingMoreUser: false,
    errorMoreStores: false
}

export const fetchDataReducer = (state = initalState, action) => {

    switch (action.type) {
        case SEND_REQUEST:
            return {
                ...state,
                loading: true,
                data: state.data,
                userLength: null,
                loadingMoreUser: false,
                errorMoreStores: false
            }
        case SEND_REQUEST_SUCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.data,
                userLength: action.payload.totalPages,
                error: false,
                loadingMoreUser: false,
                errorMoreStores: false
            }
        case SEND_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                user: [],
                error: action.error,
                loadingMoreUser: false,
                errorMoreStores: false
            }
        case LOAD_MORE_DETAILS:
            return {
                ...state,
                loading: false,
                data: state.data,
                error: false,
                userLength: state.userLength,
                loadingMoreUser: true,
                errorMoreStores: false
            }
        case LOAD_MORE_DETAILS_SUCCESS:
            const newUserData = [...state.user, ...action.payload.data];
            return {
                ...state,
                loading: false,
                error: false,
                user: newUserData,
                userLength: action.payload.totalPages,
                loadingMoreUser: false,
                errorMoreStores: false
            }
        case LOAD_MORE_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                error: false,
                data: state.data,
                userLength: state.userLength,
                loadingMoreUser: false,
                errorMoreStores: action.error
            }
        default: return {
            state
        }
    }
}

export default combineReducers({
    fetchDataReducer
});