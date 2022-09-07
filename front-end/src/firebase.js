// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4F2osxTCFIMXCdpyLKWqmNfmq_JkbQzM",
  authDomain: "party-up-pern-project.firebaseapp.com",
  projectId: "party-up-pern-project",
  storageBucket: "party-up-pern-project.appspot.com",
  messagingSenderId: "993947430691",
  appId: "1:993947430691:web:825eac96c474d0af522696",
  measurementId: "G-083LZ2EV61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
