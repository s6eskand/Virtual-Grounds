import {
    put,
    call,
    takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import {
    SERVER
} from '../../constants/endpoints';

import {
    GET_TASK_ANALYTICS,
    GET_USER_TASKS
} from '../../constants/tasks';
import {
    storeTaskAnalytics,
    storeUserTasks
} from '../../actions/tasks';

function* getRequest() {
    return yield axios.get(SERVER.USER_TASKS, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
        .then(response => response)
}

function* postRequest(data) {
    return yield axios.post(SERVER.USER_ANALYTICS, data, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
        .then(response => response.data)
} 

function* getUserTasks(action) {
    try {
        const response = yield call(() => getRequest());
        if (response.status === 200) {
            yield put(storeUserTasks(response.data));
        }
    } catch {
        console.log('Error')
    }
}

function* getTaskAnalytics(action) {

    const response = yield call(() => postRequest(action.date));
    console.log(response)
    yield put(storeTaskAnalytics(response))
}

export default function* taskSagas() {
    yield takeLatest(GET_USER_TASKS, getUserTasks);
    yield takeLatest(GET_TASK_ANALYTICS, getTaskAnalytics);
}