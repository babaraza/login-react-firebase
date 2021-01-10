import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0vg0YYUe2jirYwefouO6Q0Rjf-NOj_y4",
  authDomain: "login-app-8dd8b.firebaseapp.com",
  databaseURL: "https://login-app-8dd8b.firebaseio.com",
  projectId: "login-app-8dd8b",
  storageBucket: "login-app-8dd8b.appspot.com",
  messagingSenderId: "171654869598",
  appId: "1:171654869598:web:21822a2a0a99aa2491bacf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
