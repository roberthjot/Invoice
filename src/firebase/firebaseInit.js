import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAVjzE7n1iTnINoclVUWrQLyDmP6H6r1Rk",
  authDomain: "invoice-app-5f00a.firebaseapp.com",
  projectId: "invoice-app-5f00a",
  storageBucket: "invoice-app-5f00a.appspot.com",
  messagingSenderId: "680797717736",
  appId: "1:680797717736:web:9df0f7bde4d5bdd107755d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();