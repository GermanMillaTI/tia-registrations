import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import 'firebase/compat/auth'
import { getAuth } from "firebase/auth"
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
import { ref, update } from "firebase/database"

// Your web app's Firebase configuration
const forakerConfig = {
    apiKey: process.env.REACT_APP_FORAKER_API_KEY,
    authDomain: process.env.REACT_APP_FORAKER_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FORAKER_DATABASEURL,
    projectId: process.env.REACT_APP_FORAKER_PROJECTID,
    storageBucket: process.env.REACT_APP_FORAKER_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FORAKER_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FORAKER_FBAPPID
};

const forakerapp = firebase.initializeApp(forakerConfig, 'forakerapp');

// Init services
const forakerdb = getDatabase(forakerapp);

const writeForakerValue = (path, value) => {
    update(ref(forakerdb, path), value)
}

export { writeForakerValue };
