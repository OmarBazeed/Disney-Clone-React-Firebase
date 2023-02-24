import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8X_maWtQJ5gCk64PSWnJiDcFpKbHmFzA",
  authDomain: "disney-clone-e3a7d.firebaseapp.com",
  projectId: "disney-clone-e3a7d",
  storageBucket: "disney-clone-e3a7d.appspot.com",
  messagingSenderId: "596209129545",
  appId: "1:596209129545:web:0dbea509b0b84668774798",
  measurementId: "G-VM2WQ26RWJ",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
