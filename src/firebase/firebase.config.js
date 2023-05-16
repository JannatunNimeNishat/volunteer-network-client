// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:import.meta.env.VITE_APIKEY,
authDomain:import.meta.env.VITE_AUTHDOMAIN,
projectId:import.meta.env.VITE_PROJECTID,
storageBucket:import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
appId:import.meta.env.VITE_APPID
  /* apiKey: "AIzaSyAVRM50BZdR_oWfINlGGbF8cTuJ7Mej0U8",
  authDomain: "volunteer-network-c280c.firebaseapp.com",
  projectId: "volunteer-network-c280c",
  storageBucket: "volunteer-network-c280c.appspot.com",
  messagingSenderId: "191608161941",
  appId: "1:191608161941:web:b0e00eace2bf5b985cbd9c" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;