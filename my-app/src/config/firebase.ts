// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgdSSySYeYY2gt1RSIBMC1GbYG5i6qRfU",
  authDomain: "mymoonshot-76f99.firebaseapp.com",
  projectId: "mymoonshot-76f99",
  storageBucket: "mymoonshot-76f99.firebasestorage.app",
  messagingSenderId: "887897516773",
  appId: "1:887897516773:web:6a92dc980492c433b3820c",
  measurementId: "G-0SVDMRES6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});