import {
    GET_USER_TASKS,
    STORE_USER_TASKS
} from '../../constants/tasks';

export const getUserTasks = () => ({
    type: GET_USER_TASKS,
})

export const storeUserTasks = (tasks) => ({
    type: STORE_USER_TASKS,
    tasks,
})