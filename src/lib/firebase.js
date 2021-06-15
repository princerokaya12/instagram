import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {

  apiKey: "AIzaSyAh7wnHbjzW58VssoqfgWHsaW_2juDCi_8",
  authDomain: "instagram-projects-506d5.firebaseapp.com",
  projectId: "instagram-projects-506d5",
  storageBucket: "instagram-projects-506d5.appspot.com",
  messagingSenderId: "625662939262",
  appId: "1:625662939262:web:47baa4a4944df80e31882f"};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase','firebase')

export { firebase, FieldValue };
