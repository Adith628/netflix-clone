import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAqlpl_Aj2AKoO8CdCK_ehOXEv8GAFTDv4",
  authDomain: "netflix-clone-1f25d.firebaseapp.com",
  projectId: "netflix-clone-1f25d",
  storageBucket: "netflix-clone-1f25d.appspot.com",
  messagingSenderId: "149505000967",
  appId: "1:149505000967:web:ee475f3ba62c6d08084ca2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();



export {auth};
export default db;