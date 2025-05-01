// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import auth from "@react-native-firebase/auth";

const firebase = require('@react-native-firebase/app');

// Initialize Firebase
export const FIREBASE_APP = firebase.initializeApp()
export const FIREBASE_AUTH = auth();