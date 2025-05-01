// Inputs from firebase config for Device and Web
import { FIREBASE_APP, FIREBASE_AUTH } from './firebaseConfigDevice'
import { webApp, webAuth, getWebAuth } from './firebaseConfigWeb';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

// Define the DeviceApp interface 
interface DeviceAuth {
  signInWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>;
}

let deviceApp;
let deviceAuth : DeviceAuth | undefined;
let deviceDatabase;

// Initialize Firebase for Device
deviceApp = FIREBASE_APP;
deviceAuth = {
  signInWithEmailAndPassword: (email: string, password: string) => FIREBASE_AUTH.signInWithEmailAndPassword(email, password),
  createUserWithEmailAndPassword: (email: string, password: string) => FIREBASE_AUTH.createUserWithEmailAndPassword(email, password) 
}

export { deviceApp, deviceAuth, webApp, webAuth, getWebAuth }