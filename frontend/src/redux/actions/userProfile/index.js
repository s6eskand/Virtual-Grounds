import {
    STORE_USER_PROFILE,
    GET_USER_PROFILE,
    POST_USER_PROFILE
} from '../../constants/userProfile';

export const storeUserProfile = (userProfile) => ({
    type: STORE_USER_PROFILE,
    userProfile,
})

export const getUserProfile = () =>({
    type: GET_USER_PROFILE,
})

export const postUserProfile = (profileInfo) => ({
    type: POST_USER_PROFILE,
    profileInfo,
})