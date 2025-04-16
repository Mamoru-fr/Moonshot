// Import the functions you need from the SDKs you need
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { Platform } from "react-native";


// Define the WebAuth interface
interface WebAuth {
    signInWithEmailAndPassword: (email: string, password: string) => Promise<any>,
    createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>,
}

let webApp;
let webAuth: WebAuth | undefined;
let getWebAuth: Auth;

if (Platform.OS === 'web') {
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
    webApp = initializeApp(firebaseConfig);
    getWebAuth = getAuth(webApp);
    webAuth = {
        signInWithEmailAndPassword: (email: string, password: string) => signInWithEmailAndPassword(getWebAuth, email, password),
        createUserWithEmailAndPassword: (email: string, password: string) => createUserWithEmailAndPassword(getWebAuth, email, password)
    };
}

export { webApp, getWebAuth, webAuth }