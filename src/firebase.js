// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase"
import "firebase/auth"

const firebaseApp =firebase.initializeApp(
    {
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
        apiKey: "AIzaSyCrQw_QrJZbF1ki3fnBdPK20hJP2OWwN9s",
    authDomain: "netflixreact-25269.firebaseapp.com",
    projectId: "netflixreact-25269",
    storageBucket: "netflixreact-25269.appspot.com",
    messagingSenderId: "294369962690",
    appId: "1:294369962690:web:29aada2c4f568799cf695b",
    measurementId: "G-DE8FZD3MCJ"
    }
    

) 
// Initialize Firebase

const auth = firebase.auth();
const db = firebaseApp.firestore();


// //initiating references to the databases
// const usersRef = db.collection('users')

// // for privileges purposes
// const functions = firebase.functions();

// //google provider sign-in
// const googleProvider = new firebase.auth.GoogleAuthProvider();


export {  auth};
export default db;