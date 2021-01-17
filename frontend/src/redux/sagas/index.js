// sagas
import authSagas from "./auth"
import userProfileSagas from './userProfile'

const sagas = [
    authSagas,
    userProfileSagas
];

const registerSagas = (middleware) => {
    sagas.map((saga) => {
        middleware.run(saga);
    });
};

export default registerSagas;