import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import 'firebase/compat/auth'
import { getAuth } from "firebase/auth"
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyDPMmZFaf3kjA_l4J94l2j6A5rpFJ7BEYs",
    authDomain: "tiai-registrations.firebaseapp.com",
    databaseURL: "https://tiai-registrations-default-rtdb.firebaseio.com",
    projectId: "tiai-registrations",
    storageBucket: "tiai-registrations.appspot.com",
    messagingSenderId: "1090626878097",
    appId: "1:1090626878097:web:7182282cd03c36ad3fdd30"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Init services
const auth = getAuth(app);
const realtimeDb = getDatabase(app);
const storage = getStorage(app);

export { auth, realtimeDb, getAuth, storage };

