import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../css/__index.css'
import firebase from 'firebase/compat';


const firebaseConfig = {

  apiKey: "AIzaSyC0KvGPH4p9pWYbSBT-YjEEbi8lsxGN0aI",

  authDomain: "telelun-ec847.firebaseapp.com",

  projectId: "telelun-ec847",

  storageBucket: "telelun-ec847.appspot.com",

  messagingSenderId: "272020731377",

  appId: "1:272020731377:web:98c85e11159a206c0f8050",

  measurementId: "G-XQ8CFX3FEL"

};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};

const fs = firebase.firestore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App fs={fs} />
  </React.StrictMode>
)
