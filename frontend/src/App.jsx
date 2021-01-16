import './App.css';

// redux
import {
    store,
    persistor
} from "./redux/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";

// custom components
import Test from './components/Test';

function App() {
  return (
    <div> 
      <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter>
                  <Test title="hello"/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </div>
  );
}

export default App;
