import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA0bj6Nv45dZo9RM1ZZLxPYCxEOL_8NTt8",
  authDomain: "time-table-d07d8.firebaseapp.com",
  projectId: "time-table-d07d8",
  storageBucket: "time-table-d07d8.appspot.com",
  messagingSenderId: "693641542292",
  appId: "1:693641542292:web:ee2e46e4e6fa6bc13f5281",
  measurementId: "G-2EWJQEWMJ6"
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase