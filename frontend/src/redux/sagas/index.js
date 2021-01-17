// sagas
import authSagas from "./auth";
import userProfileSagas from './userProfile';
import taskSagas from './tasks';

const sagas = [
    authSagas,
    userProfileSagas,
    taskSagas,
];

const registerSagas = (middleware) => {
    sagas.map((saga) => {
        middleware.run(saga);
    });
};

export default registerSagas;