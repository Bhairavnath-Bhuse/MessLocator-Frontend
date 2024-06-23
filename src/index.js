import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppContextProvider } from './Context/AppContext';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import rootReducer from './Context/reducer';
import {configureStore} from "@reduxjs/toolkit"
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './data/store';



const store = configureStore({             //added "rootReducer" into store variable and rootReducer is combination of all reducer which is made in slices;
  reducer:rootReducer,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store = {store}>
    <BrowserRouter>
        <AppContextProvider>
          
              <App />
              <Toaster/>
        
      </AppContextProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
