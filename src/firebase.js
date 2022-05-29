import firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_vQqRaEz3BDKx9TNPIQaddX4XCSol4Sk",
    authDomain: "slack-clone-c435b.firebaseapp.com",
    projectId: "slack-clone-c435b",
    storageBucket: "slack-clone-c435b.appspot.com",
    messagingSenderId: "610356353955",
    appId: "1:610356353955:web:dca682efeb78d3dd7bd816",
    measurementId: "G-SQGQ9FVBWZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider};
  export default db;