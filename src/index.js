import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Firebase/FirebaseContext';
import {firebaseApp} from './Firebase/config';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: firebaseApp }}>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
