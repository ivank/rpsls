import firebase from "firebase";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "rpsls-76958.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "rpsls-76958",
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);
export default firebase;
