import {
    STORE_USER_PROFILE
} from '../../constants/userProfile';

const initialState = {
    userProfile: {}
}

const userProfile = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        default:
            return state
    }
}

export default userProfile;