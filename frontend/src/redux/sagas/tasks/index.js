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
    GET_USER_TASKS
} from '../../constants/tasks';
import {
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

export default function* taskSagas() {
    yield takeLatest(GET_USER_TASKS, getUserTasks);
}