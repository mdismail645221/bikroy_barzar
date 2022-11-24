// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwm5qsJkIdnHnDMAbssK1EfTblIzXbWs",
  authDomain: "bikroybazar645221.firebaseapp.com",
  projectId: "bikroybazar645221",
  storageBucket: "bikroybazar645221.appspot.com",
  messagingSenderId: "775552045049",
  appId: "1:775552045049:web:cca8e67f1f94e65aa77728",
  measurementId: "G-Y8NR43YQXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app