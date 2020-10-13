// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCdJxnZ4wMm7MxMKSafisMOMrLbJ237Swo",
    authDomain: "whatsapp-clone-1384a.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-1384a.firebaseio.com",
    projectId: "whatsapp-clone-1384a",
    storageBucket: "whatsapp-clone-1384a.appspot.com",
    messagingSenderId: "851225442796",
    appId: "1:851225442796:web:a719206d45acb9bd3828c9",
    measurementId: "G-9XMP8M5MN7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;