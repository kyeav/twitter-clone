import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPLX8lLYSc_CLB8k6-iOf2djFlyMI_vk8",
    authDomain: "twitter-clone-b0acc.firebaseapp.com",
    projectId: "twitter-clone-b0acc",
    storageBucket: "twitter-clone-b0acc.appspot.com",
    messagingSenderId: "961468388615",
    appId: "1:961468388615:web:77c09abcbaaef0a1a0e1a2",
    measurementId: "G-GV4ECM2J9Y"
};

// initialise firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { db }