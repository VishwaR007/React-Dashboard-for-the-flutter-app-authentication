// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1UTsKssGMHBCdKDgwWVKanE4WbWcdHzI",
  authDomain: "second-project-8c431.firebaseapp.com",
  projectId: "second-project-8c431",
  storageBucket: "second-project-8c431.appspot.com",
  messagingSenderId: "1013031778451",
  appId: "1:1013031778451:web:f343a35210fad67e273566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database =  getFirestore(app)



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore, initializeFirestore, CACHE_SIZE_UNLIMITED} from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyA0mZPcj_ZfD8zjMkm9h077HOXgDdkS688",
//   authDomain: "first-project-4016c.firebaseapp.com",
//   projectId: "first-project-4016c",
//   storageBucket: "first-project-4016c.appspot.com",
//   messagingSenderId: "496519631808",
//   appId: "1:496519631808:web:9b46f0b958cc6e116e6e25"
// };

// const app = initializeApp(firebaseConfig);
// // export const database = getFirestore(app);
// export const database = initializeFirestore(app, {
//   cacheSizeBytes: CACHE_SIZE_UNLIMITED
// });