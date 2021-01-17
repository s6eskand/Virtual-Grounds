import {
    combineReducers
} from "redux";

// reducers
import auth from './auth';
import userProfile from './userProfile';

const rootReducer = combineReducers({
    auth,
    userProfile,
});

export default rootReducer;