// Import the functions you need from the SDKs you need
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import auth from "@react-native-firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface WebAuth {
    signInWithEmailAndPassword: (email: string, password: string) => Promise<any>,
    createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>,
}

interface DeviceAuth {
    signInWithEmailAndPassword: (email: string, password: string) => Promise<any>,
    createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>,
}

let webApp;
let webAuth: WebAuth | undefined;
let webAnalytics;
let getWebAuth: any;
let deviceApp;
let deviceAuth: DeviceAuth | undefined;

if (Platform.OS === 'web') {

    const firebase = require('firebase/app');

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

    // Initialize Firebase for Web
    webApp = firebase.initializeApp(firebaseConfig);
    webAnalytics = getAnalytics(webApp);
    getWebAuth = getAuth(webApp);
    webAuth = {
        signInWithEmailAndPassword: (email: string, password: string) => signInWithEmailAndPassword(getWebAuth, email, password),
        createUserWithEmailAndPassword: (email: string, password: string) => createUserWithEmailAndPassword(getWebAuth, email, password)
    };
    deviceApp = undefined;
    deviceAuth = undefined;
} else {
    // Initialize Firebase for iOS / Android
    const firebase = require('@react-native-firebase/app');
    deviceApp = firebase.initializeApp();
    deviceAuth = {
        signInWithEmailAndPassword: (email: string, password: string) => auth().signInWithEmailAndPassword(email, password),
        createUserWithEmailAndPassword: (email: string, password: string) => auth().createUserWithEmailAndPassword(email, password)
    };
    webApp = undefined;
    webAuth = undefined;
    webAnalytics = undefined;
    getWebAuth = undefined;
}

export { webApp, webAnalytics, getWebAuth, webAuth, deviceApp, deviceAuth };