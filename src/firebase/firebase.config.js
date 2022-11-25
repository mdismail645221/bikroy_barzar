// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJG0ybOE8c_sPIYIF3Hx9LlE52njmm5xk",
  authDomain: "bikroy-bazar-c79d8.firebaseapp.com",
  projectId: "bikroy-bazar-c79d8",
  storageBucket: "bikroy-bazar-c79d8.appspot.com",
  messagingSenderId: "428320050433",
  appId: "1:428320050433:web:d65fdeca5cc2666c121f00",
  measurementId: "G-XCEN726LLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app