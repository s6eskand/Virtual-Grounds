import {
    createSelector
} from 'reselect';

export const taskSelector = createSelector(state => state && state.tasks && state.tasks.tasks, taskSelector => taskSelector);