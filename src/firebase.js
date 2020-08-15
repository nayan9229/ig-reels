import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCbNbbusCnSA7WstIqDYAwDHbbeRBW9m4U",
    authDomain: "ig-reels-32e22.firebaseapp.com",
    databaseURL: "https://ig-reels-32e22.firebaseio.com",
    projectId: "ig-reels-32e22",
    storageBucket: "ig-reels-32e22.appspot.com",
    messagingSenderId: "108368641379",
    appId: "1:108368641379:web:f902455fd909f1fdab6756",
    measurementId: "G-K8QJX3GLRV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
