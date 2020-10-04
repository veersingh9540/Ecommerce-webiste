import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCmsQV8XIKlnSKETab876RL0tWPr-ZRduU",
        authDomain: "clone-e21e8.firebaseapp.com",
        databaseURL: "https://clone-e21e8.firebaseio.com",
        projectId: "clone-e21e8",
        storageBucket: "clone-e21e8.appspot.com",
        messagingSenderId: "775599660477",
        appId: "1:775599660477:web:bb4acd9e2aa6729db346d4",
        measurementId: "G-VZNXQ06ESF"
      

});
const db=firebaseApp.firestore();
const auth = firebase.auth();
export{db,auth}