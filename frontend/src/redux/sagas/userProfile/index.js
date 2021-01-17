import {
    put,
    takeLatest,
    call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
    storeUserProfile
} from '../../actions/userProfile';

import {
    SERVER
} from '../../constants/endpoints'
import { GET_USER_PROFILE, POST_USER_PROFILE } from '../../constants/userProfile';

function* postRequest(data) {
    return yield axios.post(SERVER.USER_PROFILE, data, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
        .then(response => response)
}

function* getRequest() {
    return yield axios.get(SERVER.USER_PROFILE, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
        .then(response => response)
}

function* getUserProfile(action) {
    try {
        const response = yield call(() => getRequest())
        if (response.status === 200) {
            yield put(storeUserProfile(response.data))
        }
    } catch {
        console.log("Error")
    }
}

function* postUserProfile(action) {
    try {
        const response = yield call(() => postRequest(action.profileInfo))
        console.log(response)
        if (response.status === 201) {
            yield put(storeUserProfile(response.data))
        }
        window.location.replace('/')
    } catch {
        console.log("Error")
    }
}

export default function* userProfileSagas() {
    yield takeLatest(GET_USER_PROFILE, getUserProfile);
    yield takeLatest(POST_USER_PROFILE, postUserProfile);
}