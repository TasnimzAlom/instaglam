import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
    apiKey: "AIzaSyCis39AnmszWRS1YR-JdOxxxJXD1wWjcN0",
    authDomain: "igram-f0dd2.firebaseapp.com",
    projectId: "igram-f0dd2",
    storageBucket: "igram-f0dd2.appspot.com",
    messagingSenderId: "362617109462",
    appId: "1:362617109462:web:8e935ac318122e8f418277"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// console.log("firebase", firebase);

export { firebase, FieldValue };