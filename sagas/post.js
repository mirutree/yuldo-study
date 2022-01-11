import axios from "axios";
import {fork, takeLatest, put,all, call} from "redux-saga/effects";
import { BOARD_ALL_REQUEST, BOARD_ALL_SUCCESS, BOARD_ALL_FAILURE } from '../reducers/post';

function loadBoardAPI(data) {
    return axios.get(`/post`);
}

function* loadBoard(action) {
    try {
        const result = yield call(loadBoardAPI);
        yield put({
            type: BOARD_ALL_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: BOARD_ALL_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLoadBoard() {
    yield takeLatest(BOARD_ALL_REQUEST, loadBoard); //  2. 리퀘스트를 가로채서 loadBoard실행
}

export default function* userSaga() {
    yield all([
        fork(watchLoadBoard), // 1. 리듀서 중간에 가로채는 애가 사가임. 사가가 감시하고 있다가
    ]);
}