import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB58aVi9cTx5fkexLc5b1Xi5qCqKHA5Lns",
    authDomain: "todos-work-project.firebaseapp.com",
    projectId: "todos-work-project",
    storageBucket: "todos-work-project.appspot.com",
    messagingSenderId: "18068081366",
    appId: "1:18068081366:web:04d9375a7949f71d891777",
    measurementId: "G-Z1XRRD2DJ7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app , auth}