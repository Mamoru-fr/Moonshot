// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from '@firebase/auth';
import { getAuth } from '@react-native-firebase/auth';

const firebase = require('@react-native-firebase/app').default


// Initialize Firebase
export const FIREBASE_APP = firebase.apps.length ? firebase.app : firebase.initializeApp({})
export const FIREBASE_DB = getFirestore(FIREBASE_APP);