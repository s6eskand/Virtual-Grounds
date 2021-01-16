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
    AUTH_LOGOUT, 
    VALIDATE_USER, 
    EDIT_ACCOUNT_INFO
} from "../../constants/auth";

export default function* authSagas() {

}