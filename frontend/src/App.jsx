import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import {
    store,
    persistor
} from "./redux/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch } from "react-router-dom";

// custom components

import Landing from './views/Landing';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Login from './views/Login';
import Signup from './views/Signup';
import Profile from './views/Profile';
import Board from './views/Board';


function App() {
  return (
    <div> 
      <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter>
                <Navbar3 />
                  <Board />

                </BrowserRouter>
            </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
