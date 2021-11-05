// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCcUhbm8n_7ZEufpcgJHyQLntu5eeA2wCo",
    authDomain: "facebook-clone-ded32.firebaseapp.com",
    projectId: "facebook-clone-ded32",
    storageBucket: "facebook-clone-ded32.appspot.com",
    messagingSenderId: "431418088217",
    appId: "1:431418088217:web:067863e542c9900a640388",
    measurementId: "G-KH7Z6EYF2V"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;