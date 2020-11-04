import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed'

const config ={
    apiKey: "AIzaSyC6syXjaf_RBzfa8XN3VMrpJtQnwkM7dCg",
    authDomain: "vinhflix-a7d48.firebaseapp.com",
    databaseURL: "https://vinhflix-a7d48.firebaseio.com",
    projectId: "vinhflix-a7d48",
    storageBucket: "vinhflix-a7d48.appspot.com",
    messagingSenderId: "166199742315",
    appId: "1:166199742315:web:c0812f2b5bef1fcbde062e"
}



const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export {firebase};