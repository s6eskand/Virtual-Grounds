import {
    STORE_USER_TASKS,
    STORE_TASK_ANALYTICS
} from '../../constants/tasks';
import uuid from 'uuid/dist/v4';

const initialState = {
    tasks: [],
    analytics: {}
}

const columnsFromBackend = {
    [uuid()]: {
      name: "Requested",
      items: [],
      tag: "REQUESTED"
    },
    [uuid()]: {
      name: "To do",
      items: [],
      tag: "TO_DO"
    },
    [uuid()]: {
      name: "In Progress",
      items: [],
      tag: "IN_PROGRESS"
    },
    [uuid()]: {
      name: "Done",
      items: [],
      tag: "COMPLETED"
    }
};

const storeTasks = (tasks) => {
    const keys = Object.keys(columnsFromBackend)

    tasks.forEach(task => {
        keys.forEach(key => {
            if (task.status === columnsFromBackend[key].tag) {
                columnsFromBackend[key].items = [...columnsFromBackend[key].items, task]
            }
        })
    })

    return columnsFromBackend;
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER_TASKS:
            return {
                ...state,
                tasks: storeTasks(action.tasks)
            }
        case STORE_TASK_ANALYTICS:
            return {
                ...state,
                analytics: {...action.analytics}
            }
        default:
            return state
    }
}

export default tasks;