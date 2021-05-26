import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyC9bsRRgiofNOMqi5nyjhvYGOzJt56Ai4s",
    authDomain: "project71-78c28.firebaseapp.com",
    databaseURL: "https://project71-78c28-default-rtdb.firebaseio.com",
    projectId: "project71-78c28",
    storageBucket: "project71-78c28.appspot.com",
    messagingSenderId: "74299602515",
    appId: "1:74299602515:web:ff975338510a3931e478a6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()