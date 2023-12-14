import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/shelf'
        })
        yield put({
            type: 'SET_ITEMS',
            payload: response.data
        })
    }
    catch (error) {
        console.error('Shelf GET failed:', error)
    }
}

function* deleteItem(action) {
    try {
        const response = yield axios({
            method: 'DELETE',
            url: `/api/shelf/${action.payload}`,
        })
        yield fetchItems()
    }
    catch (error) {
        console.error('Shelf DELETE failed:', error)
    }
}

function* postItem(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/shelf',
            data: action.payload
        })
        yield fetchItems()
    }
    catch (error) {
        console.error('Shelf POST failed:', error)
    }
}


function* shelfSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems)
    yield takeLatest('DELETE_ITEM', deleteItem)
    yield takeLatest('POST_ITEM', postItem)
}

export default shelfSaga
