import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO5IRZ3DA_-EgOs7zmymm28DK_LVw8GVE",
  authDomain: "movie-film-3fa97.firebaseapp.com",
  projectId: "movie-film-3fa97",
  storageBucket: "movie-film-3fa97.appspot.com",
  messagingSenderId: "516477160329",
  appId: "1:516477160329:web:f5198ae5f192183736ef58",
  measurementId: "G-ZZG80MN3LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth()

export {db, auth}