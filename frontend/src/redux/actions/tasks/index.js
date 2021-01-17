import {
    GET_USER_TASKS,
    STORE_USER_TASKS,
    STORE_TASK_ANALYTICS,
    GET_TASK_ANALYTICS,
} from '../../constants/tasks';

export const getUserTasks = () => ({
    type: GET_USER_TASKS,
})

export const storeUserTasks = (tasks) => ({
    type: STORE_USER_TASKS,
    tasks,
})

export const getTaskAnalytics = (date) => ({
    type: GET_TASK_ANALYTICS,
    date,
})

export const storeTaskAnalytics = (analytics) => ({
    type: STORE_TASK_ANALYTICS,
    analytics,
})