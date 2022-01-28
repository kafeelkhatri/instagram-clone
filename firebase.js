import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVo2T-k_7h5Y8yF8t941NvTWO4fReEDK8",
  authDomain: "instagram-clone-aa1a7.firebaseapp.com",
  projectId: "instagram-clone-aa1a7",
  storageBucket: "instagram-clone-aa1a7.appspot.com",
  messagingSenderId: "879097416981",
  appId: "1:879097416981:web:8d12512c2d3b72ef876d1c",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
