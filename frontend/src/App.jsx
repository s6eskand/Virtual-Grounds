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

import Base from './views/Base';

function App() {
  return (
    <div> 
      <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter>
                  <Base />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
