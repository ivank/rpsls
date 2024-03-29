import * as firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "",
    appId: process.env.REACT_APP_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);
export default firebase;
