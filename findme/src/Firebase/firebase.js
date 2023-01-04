import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvwRKNkZpt5qEUA9rYqxZXexLkHS9YT8k",
  authDomain: "findme-2f5ec.firebaseapp.com",
  databaseURL: "https://findme-2f5ec-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "findme-2f5ec",
  storageBucket: "findme-2f5ec.appspot.com",
  messagingSenderId: "1077638541856",
  appId: "1:1077638541856:web:d18a4f86d1ddc542ec8245"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);

export {db}

export default firebaseApp;
