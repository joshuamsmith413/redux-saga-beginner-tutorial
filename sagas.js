import { put, takeEvery, all, call } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* decrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'DECREMENT'})
}

function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync()
  ])
}
