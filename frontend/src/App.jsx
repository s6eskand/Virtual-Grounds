import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import {
    store,
    persistor
} from "./redux/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";

// custom components

import Landing from './views/Landing';
import Login from './views/Login';
function App() {
  return (
    <div> 
      <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter>
                  <Login />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
