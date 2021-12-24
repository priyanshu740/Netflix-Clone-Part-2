import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyA9lu35_6K_NDvVtETXQtuRGoPAem_JtfA",
    authDomain: "netflixclone-ba191.firebaseapp.com",
    projectId: "netflixclone-ba191",
    storageBucket: "netflixclone-ba191.appspot.com",
    messagingSenderId: "895150380315",
    appId: "1:895150380315:web:69d05c56a572a4b29c6fbe",
    measurementId: "G-E2D67C6SC3"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const projectFirestore = firebase.firestore()

  export  {storage,projectFirestore};