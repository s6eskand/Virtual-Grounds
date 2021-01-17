import {
    createSelector
} from 'reselect';

export const userProfileSelector = createSelector(state => state && state.userProfile && state.userProfile.userProfile, userProfileSelector => userProfileSelector)
