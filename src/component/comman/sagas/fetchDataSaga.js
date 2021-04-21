import { takeEvery, call, put } from 'redux-saga/effects';
import { SEND_REQUEST, LOAD_MORE_DETAILS } from '../constants';
import { fetchDataSuccess, fetchDataFailure, fetchLoadMoreDataSuccess, fetchLoadMoreDataError } from '../actions';
import { buildApiQuery } from '../helpers';
import axios from 'axios';

function* getPassangerData(action) {
    try {
        const { loadMoreDatas } = action.payload;
        const queryFilter = buildApiQuery(action.payload);
        const url = `https://api.instantwebtools.net/v1/passenger?${queryFilter}`
        const response = yield call(() => axios.get(url))
        const myData = response.data;

        if (loadMoreDatas) {
            yield put(fetchLoadMoreDataSuccess(myData));
        } else {
            yield put(fetchDataSuccess(myData));
        }
    }
    catch (error) {
        const { loadMoreDatas } = action.payload;
        if (loadMoreDatas) {
            yield put(fetchLoadMoreDataError(error));
        } else {
            yield put(fetchDataFailure(error));
        }
        console.log(error);
    }
}

export function* watchFetchDataSaga() {

    yield takeEvery(SEND_REQUEST, getPassangerData);
    yield takeEvery(LOAD_MORE_DETAILS, getPassangerData);
}