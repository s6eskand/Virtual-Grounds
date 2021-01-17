import {
    combineReducers
} from "redux";

// reducers
import auth from './auth';
import userProfile from './userProfile';
import tasks from './tasks';

const rootReducer = combineReducers({
    auth,
    userProfile,
    tasks,
});

export default rootReducer;