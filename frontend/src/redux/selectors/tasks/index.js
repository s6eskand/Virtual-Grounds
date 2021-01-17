import {
    createSelector
} from 'reselect';

export const taskSelector = createSelector(state => state && state.tasks && state.tasks.tasks, taskSelector => taskSelector);
export const analyticsSelector = createSelector(state => state && state.tasks && state.tasks.analytics, analyticsSelector => analyticsSelector);