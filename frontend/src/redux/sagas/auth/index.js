import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';
import axios from 'axios';

// constants
import {
    AUTH_LOGIN,
    AUTH_REGISTER,
    AUTH_LOGOUT, VALIDATE_USER, EDIT_ACCOUNT_INFO
} from "../../constants/auth";
import {
    SERVER_ENDPOINTS
} from "../../../components/global/constants";

// actions
import {
    storeUser,
    storeToken, setIsAuthenticated
} from "../../actions/auth";
import {
    requestStatus,
    setLoadingStatus,
    setOpen,
    clearStatus
} from "../../actions/global";
import {storeGithubRepos} from "../../actions/project";

function* postRequest(endpoint, data) {
    return yield axios.post(endpoint, data, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(response => response)
}

function* noAuthRequest(endpoint, data) {
    return yield axios.post(endpoint, data)
        .then(response => response)
}

function* authLogin(action) {
    yield call(clearStatus);
    yield put(setLoadingStatus(true));
    try {
        const loginResponse = yield call(() => noAuthRequest(SERVER_ENDPOINTS.AUTH_LOGIN, action.loginData));
        let userResponse;
        if (loginResponse.status === 200) {
            localStorage.setItem('token', loginResponse.data.access_token);
            yield put(storeToken(loginResponse.data.access_token, false));
            const request = {username: loginResponse.data.username}
            userResponse = yield call(() => postRequest(SERVER_ENDPOINTS.GET_USER, request))
            if (userResponse.status === 200) {
                yield put(storeUser(userResponse.data))
            }
            yield put(setIsAuthenticated(true))
            yield action.close();
        }
        const status = {
            status: userResponse.status,
            statusText: userResponse.statusText,
            success: userResponse.status === 200,
        }
        yield put(requestStatus(status))
        yield put(setLoadingStatus(false))
        yield put(setOpen(true))
    } catch {
        const status = {
            status: 400,
            statusText: "Incorrect credentials",
            success: false,
        }
        yield put(requestStatus(status))
        yield put(setLoadingStatus(false))
        yield put(setOpen(true))
    }
}

function* authRegister(action) {
    yield call(clearStatus);
    yield put(setLoadingStatus(true));
    try {
        const registerResponse = yield call(() => noAuthRequest(SERVER_ENDPOINTS.AUTH_REGISTER, action.registerInfo))
        if (registerResponse.status === 200) {
            // Grails does not log you in after registration, so simulate userAction
            // action to log in after registration
            const userAction = {
                type: AUTH_LOGIN,
                loginData: {
                    username: action.registerInfo.username,
                    password: action.registerInfo.password,
                },
                close: action.close
            }
            yield call(() => authLogin(userAction))
        } else {
            const status = {
                status: registerResponse.status,
                statusText: registerResponse.statusText,
                success: registerResponse.status === 200,
            }
            yield put(requestStatus(status))
            yield put(setLoadingStatus(false))
            yield put(setOpen(true))
        }
    } catch (error) {
        const status = {
            status: 400,
            statusText: "Error with account information. Try again",
            success: false,
        }
        yield put(requestStatus(status))
        yield put(setLoadingStatus(false))
        yield put(setOpen(true))
    }
}

function* authLogout(action) {
    const response = yield call(() => postRequest(SERVER_ENDPOINTS.AUTH_LOGOUT, {}));
    yield put(storeToken(null, false));
    yield localStorage.clear();
    yield put(storeUser({}));
    yield put(storeGithubRepos([]))
    yield action.history.push('/')
}

function* validateUser() {
    const response = yield call(() => postRequest(SERVER_ENDPOINTS.AUTH_VALIDATE, {}));
    if (response.status === 200) {
        yield put(setIsAuthenticated(true))
    } else {
        yield put(setIsAuthenticated(false))
    }
}

function* editAccountInfo(action) {
    yield call(clearStatus);
    yield put(setLoadingStatus(true));
    try {
        const response = yield call(() => postRequest(SERVER_ENDPOINTS.EDIT_PROFILE, action.info));
        if (response.data.success) {
            const userResponse = yield call(() => postRequest(SERVER_ENDPOINTS.GET_USER, {username: action.info.username}));
            yield put(storeUser(userResponse.data));
            yield action.close();
        }
        yield put(setLoadingStatus(false));
        const status = {
            status: response.status,
            statusText: response.data.message,
            success: response.data.success,
        }
        yield put(requestStatus(status))
    } catch {
        yield put(setLoadingStatus(false));
        const status = {
            status: 400,
            statusText: "Error updating user info. Try again.",
            success: false,
        }
        yield put(requestStatus(status))
    }
    yield setOpen(true)
}

export default function* authSagas() {
    yield takeLatest(AUTH_LOGIN, authLogin);
    yield takeLatest(AUTH_REGISTER, authRegister);
    yield takeLatest(AUTH_LOGOUT, authLogout);
    yield takeLatest(VALIDATE_USER, validateUser);
    yield takeLatest(EDIT_ACCOUNT_INFO, editAccountInfo);
}