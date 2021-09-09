import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase, FieldValue}}>
    <h1 className="bg-blue-300 w-full h-screen text-red-500">Hello, World</h1>
  </FirebaseContext.Provider>,  
  document.getElementById('root')
);