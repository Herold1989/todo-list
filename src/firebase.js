// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDviRcIz9F6dxc9ybZUSMoQm6Wh8uvToB0",
    authDomain: "todo-app-d4d3d.firebaseapp.com",
    projectId: "todo-app-d4d3d",
    storageBucket: "todo-app-d4d3d.appspot.com",
    messagingSenderId: "1071692929427",
    appId: "1:1071692929427:web:3e9c0dcda42353460fb066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)