import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDehFs0a7CTbIs-6oi6L61grvB4lcC6eQk",
  authDomain: "music-app-7aef5.firebaseapp.com",
  projectId: "music-app-7aef5",
  storageBucket: "music-app-7aef5.appspot.com",
  messagingSenderId: "516783544960",
  appId: "1:516783544960:web:e6d82747d825e68c50a465",
  measurementId: "G-2CJ6PXMD4S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp };